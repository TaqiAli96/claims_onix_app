import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: true,
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`cursor-pointer fixed bottom-8 right-8 p-3 rounded-full bg-[#276100] text-white shadow-lg transition-opacity duration-300 hover:bg-green-600 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            aria-label="Scroll to top"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
            </svg>
        </button>
    );
};

export default ScrollToTop; 