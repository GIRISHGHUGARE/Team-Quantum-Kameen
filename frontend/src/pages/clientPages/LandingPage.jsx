// import React from 'react'
// import Header from "../../components/Header"
// import Hero from "../../components/Hero"
// import About from "../../components/About"
// import Homebg from "./../../assets/Homebg.jpg"
// import Services from "./../../components/Services"
// import Footer from "./../../components/Footer"

// function LandingPage() {
//     return (
//         <div className="relative h-screen w-screen">
//             {/* Background Image */}
//             <div
//                 className="absolute inset-0 opacity-90 bg-cover bg-center"
//                 style={{
//                     backgroundImage: `url(${Homebg})`, // Background image
//                 }}
//             ></div>

//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent"></div>

//             {/* Main Content */}
//             <div className="relative z-10">
//                 <Header />
//                 <Hero />
//                 <About />
//                 <Services/>
//                 <Footer/>
//             </div>
//         </div>
//     )
// }

// export default LandingPage

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Homebg from "./../../assets/Homebg.jpg";
import Services from "./../../components/Services";
import ContactUs from "./../../components/ContactUs"
import Footer from "./../../components/Footer";
import chatbotIcon from "./../../assets/chatbotIcon.png"; // Import your icon or image

function LandingPage() {
    const navigate = useNavigate(); // Initialize navigate function

    const handleButtonClick = () => {
        navigate('/chatbot'); // Redirect to the new page (replace with your route)
    };

    return (
        <section id="home">
            <div className="relative h-screen w-screen">
                {/* Background Image */}
                <div
                    className="absolute inset-0 opacity-90 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${Homebg})`, // Background image
                    }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent"></div>

                {/* Main Content */}
                <div className="relative z-10">
                    <Header />
                    <Hero />
                    <About />
                    <Services />
                    <ContactUs />
                    <Footer />
                </div>

                {/* Circular Button */}
                <button
                    className="fixed bottom-14 right-5 w-20 h-20 bg-creme text-white rounded-full shadow-lg flex items-center justify-center hover:bg-brown transition duration-300 z-20"
                    onClick={handleButtonClick} // On click, navigate to the new page
                >
                    {/* Icon or Image */}
                    <img src={chatbotIcon} alt="Icon" className="w-20 h-20" />
                </button>
            </div>
        </section>
    );
}

export default LandingPage;
