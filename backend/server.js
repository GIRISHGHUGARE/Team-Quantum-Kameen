import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
import courseRoutes from "./routes/course.route.js";
import productRoutes from "./routes/product.route.js";
import microloanRoutes from "./routes/microloan.route.js";
import './config/passport.js';
import passport from 'passport';
import session from 'express-session';
import KNN from "ml-knn";
import bodyParser from "body-parser";
import dialogflow from '@google-cloud/dialogflow';


const trainingSet = [
    [1, 50, 1, 1], // Eco-Friendly
    [0, 200, 0, 0], // Non-Eco-Friendly
    [1, 30, 1, 1], // Eco-Friendly
    [0, 150, 0, 0], // Non-Eco-Friendly
    [1, 45, 1, 1], // Eco-Friendly
    [0, 180, 0, 0], // Non-Eco-Friendly
    [1, 60, 1, 1], // Eco-Friendly
    [0, 170, 0, 0], // Non-Eco-Friendly
    [1, 40, 1, 1], // Eco-Friendly
    [0, 190, 0, 0], // Non-Eco-Friendly
    [1, 55, 1, 1], // Eco-Friendly
    [0, 160, 0, 0], // Non-Eco-Friendly
    [1, 35, 1, 1], // Eco-Friendly
    [0, 175, 0, 0], // Non-Eco-Friendly
    [1, 50, 1, 1], // Eco-Friendly
    [0, 180, 0, 0], // Non-Eco-Friendly
    [1, 70, 1, 1], // Eco-Friendly
    [0, 200, 0, 0], // Non-Eco-Friendly
    [1, 25, 1, 1], // Eco-Friendly
    [0, 150, 0, 0], // Non-Eco-Friendly
    [1, 50, 1, 1], // Eco-Friendly
    [0, 175, 0, 0], // Non-Eco-Friendly
    [1, 65, 1, 1], // Eco-Friendly
    [0, 185, 0, 0], // Non-Eco-Friendly
    [1, 30, 1, 1], // Eco-Friendly
    [0, 160, 0, 0], // Non-Eco-Friendly
    [1, 45, 1, 1], // Eco-Friendly
    [0, 195, 0, 0], // Non-Eco-Friendly
    [1, 55, 1, 1], // Eco-Friendly
    [0, 210, 0, 0], // Non-Eco-Friendly
    [1, 40, 1, 1], // Eco-Friendly
    [0, 190, 0, 0], // Non-Eco-Friendly
    [1, 60, 1, 1], // Eco-Friendly
    [0, 170, 0, 0], // Non-Eco-Friendly
    [1, 35, 1, 1], // Eco-Friendly
    [0, 150, 0, 0], // Non-Eco-Friendly
    [1, 50, 1, 1], // Eco-Friendly
    [0, 200, 0, 0], // Non-Eco-Friendly
    [1, 45, 1, 1], // Eco-Friendly
    [0, 160, 0, 0], // Non-Eco-Friendly
    [1, 55, 1, 1], // Eco-Friendly
    [0, 180, 0, 0], // Non-Eco-Friendly
    [1, 65, 1, 1], // Eco-Friendly
    [0, 175, 0, 0], // Non-Eco-Friendly
    [1, 30, 1, 1], // Eco-Friendly
    [0, 190, 0, 0], // Non-Eco-Friendly
    [1, 40, 1, 1], // Eco-Friendly
    [0, 210, 0, 0], // Non-Eco-Friendly
    [1, 60, 1, 1], // Eco-Friendly
    [0, 185, 0, 0], // Non-Eco-Friendly
];

const labels = [
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0
];

// Initialize KNN with the dataset
const knn = new KNN(trainingSet, labels, { k: 3 });
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
console.log("Server starting...");
app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');  // Adjusted to allow more flexibility
    res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');  // Add CORP
    next();
});

app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
// Session configuration
app.use(session({
    secret: process.env.GOOGLE_CLIENT_SECRET,
    resave: false,
    saveUninitialized: true
}));
// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());
app.use("/api/v1/auth", authRoutes);
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/product', productRoutes);
app.use('/api/v1/microloan', microloanRoutes);


// Create Dialogflow session client
const sessionClient = new dialogflow.SessionsClient({
    keyFilename: path.join(__dirname, 'service-acc-key.json')
});

const projectId = process.env.DIALOGFLOW_PROJECT_ID;
const sessionId = 'random-session-id'; // You can change this to make each session unique
const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

// Endpoint to handle chat messages from the frontend
app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;

    try {
        // Prepare Dialogflow request
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: userMessage,
                    languageCode: 'en',
                },
            },
        };

        // Send request to Dialogflow
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;

        // Check if the response contains a specific intent for course information
        if (result.intent.displayName === 'Course Information') {
            // Optionally, retrieve course data from your database
            const courses = await getCourses(); // Assume you have a function to fetch courses
            result.fulfillmentText = `Our available courses are: ${courses.join(', ')}. Would you like to enroll?`;
        }

        // Send Dialogflow response back to frontend
        res.json({ message: result.fulfillmentText });

    } catch (error) {
        console.error('Error sending message to Dialogflow:', error);
        res.status(500).json({ message: 'Error processing your request' });
    }
});
app.post('/api/knn/predict', (req, res) => {
    const { material, carbonFootprint, packaging, certification } = req.body;
    if (
        material === undefined ||
        carbonFootprint === undefined ||
        packaging === undefined ||
        certification === undefined
    ) {
        return res.status(400).json({ error: 'All input fields are required' });
    }
    try {
        const input = [material, carbonFootprint, packaging, certification];
        const prediction = knn.predict([input]);
        res.json({
            prediction: prediction[0] === 1 ? 'Eco-Friendly' : 'Non-Eco-Friendly',
        });
    } catch (error) {
        console.error('Error during prediction:', error);
        res.status(500).json({ error: 'Failed to classify product' });
    }
});
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log(`Sever is running at port ${PORT}`)
})