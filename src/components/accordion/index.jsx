import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChevronDown from '../../assets/svgs/chevronDown';
import ChevronUp from '../../assets/svgs/chevronUp';
import SectionHeading from '../sectionHeading';

const AccordionItem = ({ title, content, isOpen, onToggle, id }) => {
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div

            className={`mb-3 cursor-pointer rounded-xl shadow-sm transition-all duration-500 ease-in-out transform hover:scale-[1.01] ${isOpen ? 'bg-[#F6FFF0] border-[#296600]' : 'bg-white border-transparent'
                } border`}
        >
            <h3>
                <button
                    className={`flex w-full ursor-pointer text-lg font-inter-400 items-center justify-between px-4 sm:px-6 py-5 text-left font-inter-500 text-lg transition-all duration-300 rounded-xl focus:outline-none ${isOpen
                        ? 'text-[#296600] bg-[#E6FFD4]'
                        : 'text-[#2E2E1F] hover:bg-[#F6FFF0]'
                        }`}
                    onClick={onToggle}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-content-${id}`}
                    id={`accordion-heading-${id}`}
                >
                    <span className="transition-transform duration-300">{title}</span>
                    <span className={`ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDown className="transition-all duration-300 text-[#2E2E1F]" />
                    </span>
                </button>
            </h3>
            <div
                id={`accordion-content-${id}`}
                role="region"
                aria-labelledby={`accordion-heading-${id}`}
                style={{
                    maxHeight: isOpen ? `${height}px` : '0px',
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                className="overflow-hidden px-4 sm:px-6"
            >
                <div ref={contentRef} className="py-3 text-[#2E2E1F] font-inter-300 text-base">
                    {content}
                </div>
            </div>
        </div>
    );
};

AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
};

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div
            className={`w-full  max-w-full px-2 py-5 sm:px-4 md:px-8 lg:px-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            role="region"
            aria-label="Accordion"
        >
            <div className="flex flex-col items-center mb-8 mt-2">
                <SectionHeading title="FAQs" />
                <h1
                    className="text-3xl md:text-5xl font-inter-500 leading-tight text-center flex flex-col px-2 fade-in-down"
                >
                    <span>Have a question? We're</span>
                    <span> here to help.</span>
                </h1>
            </div>
            {items.map((item, index) => (
                <div
                    key={index}
                    className='cursor-pointer'
                    style={{
                        transitionDelay: `${index * 0.1}s`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.5s ease-out',
                        cursor: 'pointer'
                    }}
                >
                    <AccordionItem
                        id={index}
                        title={item.title}
                        content={item.content}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                </div>
            ))}
        </div>
    );
};

Accordion.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired
        })
    ).isRequired
};

export default React.memo(Accordion);