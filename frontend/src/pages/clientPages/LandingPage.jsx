import React from 'react'
import Header from "./../../components/Header"
import Hero from "./../../components/Hero"
import About from "./../../components/About"
import Homebg from "./../../assets/Homebg.jpg"

function LandingPage() {
    return (
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
            </div>
        </div>
    )
}

export default LandingPage