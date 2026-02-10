import React, {useEffect, useRef, useState} from 'react'

const FadeIn = ({ children, delay=0, duration=500, threshold=0.1 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                //Trigger animation when element enters viewport
                if(entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    observer.unobserve(elementRef.current);
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -50px 0px' //Trigger slightly before element enters viewport
            }
        );

        if(elementRef.current){
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [threshold, isVisible]);

    return <div
            ref={elementRef}
            className={`transition-all ease-out ${
                isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
            }`}
            style={{
                animationDelay: isVisible ? `${delay}ms` : '0ms',
                animationDuration: `${duration}ms`,
                animationFillMode: 'both',
            }}
            >
                {children}
            </div>
};
export default FadeIn

