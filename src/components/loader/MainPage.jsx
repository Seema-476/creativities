import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const MainPage = () => {
    useEffect(() => {
        const timeline = gsap.timeline();

        timeline.fromTo(
            '.blue-page',
            { y: '110%' }, 
            { y: '0%', duration: 1, ease: 'power3.out' } 
        );
        timeline
            .fromTo(
                '.number',
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.3 }
            )
            .to('.number', {
                opacity: 0,
                y: -50,
                duration: 0.5,
                delay: 0.3,
                stagger: 0.3,
            });
        timeline.to('.blue-page', {
            y: '-100%',
            duration: 1,
            ease: 'power3.in',
            delay: 0.5, 
        });
        timeline.to('.blue-page', {
            height: 0, 
            duration: 1,
            ease: 'power3.inOut',
        });
    }, []);

    return (
        <div className="overflow-hidden">
            <div className="bg-blue-400 w-full h-screen blue-page flex flex-col justify-center items-center">
                <p className="text-2xl text-white number">1</p>
                <p className="text-2xl text-white number">2</p>
                <p className="text-2xl text-white number">3</p>
            </div>
        </div>
    );
};

export default MainPage;