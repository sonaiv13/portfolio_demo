import React, {useState, useRef} from 'react'
import {ChevronLeft, ChevronRight, Quote, Star} from 'lucide-react'
import {testimonials} from '../../data/testimonials.js'
import FadeIn from "../animations/FadeIn.jsx";

const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const scrollToIndex = (index) => {
        setCurrentIndex(index);
        if(scrollContainerRef.current){
            const cardWidth = scrollContainerRef.current.offsetWidth;
            scrollContainerRef.current.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            });
        }
    };

    const nextTestimonial = () => {
        const newIndex = (currentIndex + 1) % testimonials.length;
        scrollToIndex(newIndex);
    };

    const prevTestimonial = () => {
        const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        scrollToIndex(newIndex);
    };

     const testimonialStats = [
         { value: '3x', label: 'Faster Delivery' },
         { value: '95%', label: 'Client Satisfaction' },
         { value: '100%', label: 'On-Time Delivery' },
         { value: '5*', label: 'Average Rating' },
     ];

    return (
        <section id='testimonials' className=''>
            <div className=''>
                <div className=''/>
            </div>

            <div className=''>
                <FadeIn delay={0}>
                    <div className=''>
                        <div className=''>
                            <Quote className=''/>
                            <span className=''>Testimonials</span>
                        </div>
                        <h2 className=''>
                            Trusted by forward-thinking teams
                        </h2>
                        <p className=''>
                            Empowering clients with design-driven, high-quality solutions built for success.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={100}>
                    <div className=''>
                        <div
                            ref={scrollContainerRef}
                            className=''
                            style={{ scrollSnapType: 'x mandatory' }}
                        >
                            <div className=''>
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={testimonial.id}
                                        className=''
                                        style={{ scrollSnapAlign: 'start' }}
                                    >
                                        <div className=''>
                                            <div className=''>
                                                {/* Image Section */}
                                                <div className=''>
                                                    <div className=''>
                                                        <img
                                                            src={testimonial.image}
                                                            alt={testimonial.name}
                                                            className=''
                                                        />

                                                        {/* Stat Badge Overlay */}
                                                        <div className=''>
                                                            <div className=''>
                                                                <div className=''>
                                                                    {testimonialStats[index]?.value}
                                                                </div>
                                                                <div className=''>
                                                                    {testimonialStats[index]?.label}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className=''>
                                                    {/* Quote */}
                                                    <div className=''>
                                                        <Quote className=''/>
                                                        <p className=''>
                                                            "{testimonial.quote}"
                                                        </p>
                                                    </div>

                                                    <div className=''>
                                                        <div>
                                                            <div className=''>
                                                                {testimonial.name}
                                                            </div>
                                                            <div className=''>
                                                                {testimonial.role}, {testimonial.company}
                                                            </div>
                                                        </div>

                                                        <div className=''>
                                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                                <Star key={i} className=''/>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className=''>
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToIndex(index)}
                                    className={`transition-all duration-300 rounded-full ${currentIndex === index 
                                        ? 'bg-white w-6 h-2' 
                                        : 'bg-white/30 w-2 h-2 hover:bg-white/50'}`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={prevTestimonial}
                            className=''
                            aria-label='Previous testimonial'
                        >
                            <ChevronLeft className=''/>
                        </button>

                        <button
                            onClick={nextTestimonial}
                            className=''
                            aria-label='Next testimonial'
                        >
                            <ChevronRight className=''/>
                        </button>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
export default Testimonials
