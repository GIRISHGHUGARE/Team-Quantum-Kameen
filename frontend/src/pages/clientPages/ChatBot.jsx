import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async () => {
        if (!userInput.trim()) return;

        const userMessage = { text: userInput, from: "user" };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        setIsLoading(true);
        setUserInput(""); // Clear input field

        try {
            // Send request to the backend
            const response = await axios.post("http://localhost:8000/api/chat", {
                message: userInput,
            });

            // Get the AI response
            const aiMessage = { text: response.data.message, from: "ai" };
            setMessages((prevMessages) => [...prevMessages, aiMessage]);
        } catch (error) {
            console.error("Error fetching from backend:", error);
            const errorMessage = {
                text: "Sorry, something went wrong. Please try again later.",
                from: "ai",
            };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-lg w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
            >
                <div className="p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                        AI Chatbot
                    </h2>

                    {/* Messages Container */}
                    <div className="messages-container space-y-4 mb-6 max-h-[500px] overflow-y-auto">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-lg flex ${message.from === "user"
                                    ? "bg-green-600 text-white self-end ml-auto"
                                    : "bg-emerald-500 text-white self-start mr-auto"
                                    }`}
                            >
                                <p>{message.text}</p>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="loading-message flex items-center justify-center space-x-2">
                                <Loader className="animate-spin" size={24} />
                                <p className="text-white">AI is typing...</p>
                            </div>
                        )}
                    </div>

                    {/* Input Field */}
                    <div className="input-container flex items-center space-x-2">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Type your message here..."
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button
                            onClick={sendMessage}
                            disabled={isLoading}
                            className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
                        >
                            {isLoading ? <Loader className="animate-spin" size={24} /> : "Send"}
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ChatBot;
