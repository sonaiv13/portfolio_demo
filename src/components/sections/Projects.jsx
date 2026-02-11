import React, { useState, useRef } from 'react';
import { projects, categories } from '../../data/projects.js';
import { Briefcase, Sparkles, Target, Globe, Palette, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "../ui/ProjectCard.jsx";
import FadeIn from "../animations/FadeIn.jsx";

const Projects = () => {

    const [activeCategory, setActiveCategory] = useState("All");
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollContainerRef = useRef(null);

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    //Reset carousel when category changes
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentIndex(0);
        if(scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        }
    };

    const scrollToIndex = (index) => {
        setCurrentIndex(index);
        if(scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.offsetWidth / 3;
            container.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            });
        }
    };

    const nextSlide = () => {
        const maxIndex = Math.max(0, filteredProjects.length - 3);
        const newIndex = Math.min(currentIndex + 1, maxIndex);
        scrollToIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = Math.max(currentIndex -1, 0);
        scrollToIndex(newIndex);
    };

    //Category icons mapping
    const categoryIcons = {
        'All': Target,
        'Web Apps': Globe,
        'UI Components': Palette,
        'Full Stack': Zap,
    };

    return (
        <section id='projects' className=''>
            <div className=''>
                <div className=''/>
                <div className=''/>
                <div className=''/>
            </div>

            <div className=''>
                <FadeIn delay={0}>
                    <div className=''>
                        <div className=''>
                            <Briefcase className=''/>
                            <span className=''>My Work</span>
                        </div>
                        <h2 className=''>
                            Featured Projects
                        </h2>
                        <p className=''>
                            Showcasing my best work and achievements
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
export default Projects
