import { useState } from 'react';
import { ChevronDown, Star } from "lucide-react";
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from "react-icons/si";
import { PERSONAL_INFO, STATS } from "../../utils/constants.js";
import { scrollToSection } from "../../hooks/useScrollSpy.js";
import FadeIn from "../animations/FadeIn.jsx";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground.jsx";

const Hero = () => {
    return (
        <section className=''>
            <RadialGradientBackground variant='hero'/>

            {/* Content Container */}
            <div className=''>
                <div className=''>
                    {/* Left Column - Content */}
                    <div className=''>
                        <FadeIn delay={0}>
                            <div className=''>
                                <Star className=''/>
                                <span className=''>
                                    {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                                </span>
                            </div>
                        </FadeIn>

                        <FadeIn  delay={100}>
                            <h1 className=''>
                                React.js Developer Portfolio
                            </h1>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <p className=''>
                                Building moder, scalable web applications with React, JavaScript, and cutting-edge technologies. Transforming ideas into exceptional digital experiences.
                            </p>
                        </FadeIn>

                        <FadeIn delay={300}>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className=''
                            >
                                <div className=''>
                                    Get in Touch
                                </div>
                            </button>
                        </FadeIn>

                        <FadeIn delay={400}>
                            <div className=''>
                                {STATS.map((stat, index) => (
                                    <div key={index} className=''>
                                        <div className=''>
                                            {stat.value}
                                        </div>
                                        <p className=''>
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero
