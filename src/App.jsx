import React from 'react'
import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";

const App = () => {
    return (
        <div className='min-h-screen bg-black pb-[100vh]'>
            <Navbar/>
            <main>
                <Hero/>
                <About/>
                <Skills/>
            </main>
        </div>
    );
};
export default App
