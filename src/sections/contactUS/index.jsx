import SectionHeading from '../../components/sectionHeading';
import React, { useEffect, useState } from 'react';

const FloatingLabelInput = ({ label, type = 'text', onFocus, onBlur }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');
    return (
        <div className="relative w-full">
            <input
                type={type}
                value={value}
                onChange={e => setValue(e.target.value)}
                onFocus={e => { setIsFocused(true); onFocus && onFocus(e); }}
                onBlur={e => { setIsFocused(false); onBlur && onBlur(e); }}
                placeholder=""
                className="peer border border-gray-300 rounded-lg px-4 py-2 w-full bg-white focus:outline-none focus:border-[#276100] transition-all duration-300 hover:shadow-md focus:shadow-lg focus:scale-[1.03]"
            />
            <label
                className={
                    `absolute left-4 bg-white px-1 pointer-events-none font-inter-400 transition-all duration-300
                    ${isFocused || value
                        ? 'text-xs text-[#276100] top-0 -translate-y-1/2 scale-90 font-inter-500 shadow-md'
                        : 'text-base text-gray-400 top-1/2 -translate-y-1/2'}
                    `
                }
                style={{ transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)' }}
            >
                {label}
            </label>
        </div>
    );
};

const FloatingLabelTextarea = ({ label, onFocus, onBlur }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');
    const showPlaceholder = !isFocused && !value;
    return (
        <div className="relative w-full transition-all duration-500">
            <textarea
                value={value}
                onChange={e => setValue(e.target.value)}
                onFocus={e => { setIsFocused(true); onFocus && onFocus(e); }}
                onBlur={e => { setIsFocused(false); onBlur && onBlur(e); }}
                placeholder={showPlaceholder ? label : ''}
                className={`peer border border-gray-300 rounded-lg px-4 py-3 w-full min-h-[120px] bg-white focus:outline-none focus:border-[#276100] resize-y transition-all duration-300 hover:shadow-md focus:shadow-lg focus:scale-[1.02] ${showPlaceholder ? 'placeholder-gray-400' : ''}`}
            />
            {/* Label floats only when focused or has value, otherwise hidden */}
            {(isFocused || value) && (
                <label
                    className={`absolute left-4 top-0 px-1 bg-white text-xs text-[#276100] scale-90 font-inter-500 shadow-md transition-all duration-300 pointer-events-none`}
                    style={{ transform: 'translateY(-50%)', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)', transitionDelay: '0.2s' }}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

const ContactUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isFormFocused, setIsFormFocused] = useState(false);
    const handleFieldFocus = () => setIsFormFocused(true);
    const handleFieldBlur = () => setIsFormFocused(false);
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);
    return (
        <section className={`relative w-full flex  justify-center py-10 bg-white rounded-3xl  px-2 md:px-10 overflow-hidden transition-colors duration-300 ${isFormFocused ? 'border-[#276100]' : 'border-[#CBCBCB]'}`}>
            {/* Gradient background behind everything */}
            <div className="absolute left-0  right-0 bottom-[-2%] h-40 md:h-48" style={{ zIndex: 0, pointerEvents: 'none', borderRadius: '0 0 32px 32px', background: 'linear-gradient(180deg, rgba(62,153,0,0.10) 0%, #3E9900 100%)' }} />
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center relative z-10">
                {/* Header Section */}
                <div className={`flex flex-col items-center mb-8 mt-2 w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: '0.1s' }}>
                    <SectionHeading title="Contact Us" />
                    <h1 className="text-3xl md:text-5xl font-inter-500 leading-tight text-center flex flex-col px-4 fade-in-down mt-4">
                        Ready to Take Billing Stress Off Your Plate?
                    </h1>
                    <p className="mt-2 text-[#2E2E1F] text-center text-base md:text-lg font-inter-300 max-w-2xl">
                        Let's discuss how I can help you save time, reduce denials, and increase collections.
                    </p>
                </div>
                {/* Form Section */}
                <form className={`w-full bg-white rounded-2xl flex flex-col gap-8 border-1 p-6 md:p-10 transition-colors duration-300 ${isFormFocused ? 'border-[#276100]' : 'border-[#CBCBCB]'}`} style={{ boxShadow: '0 4px 32px 0 rgba(62,153,0,0.07)' }}>
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
                        <h2 className="text-xl font-inter-400 mb-4">Your Contact Details</h2>
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            <div className={`flex flex-col flex-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
                                <FloatingLabelInput label="Full Name" onFocus={handleFieldFocus} onBlur={handleFieldBlur} />
                            </div>
                            <div className={`flex flex-col flex-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.5s' }}>
                                <FloatingLabelInput label="Email Address" type="email" onFocus={handleFieldFocus} onBlur={handleFieldBlur} />
                            </div>
                            <div className={`flex flex-col flex-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
                                <FloatingLabelInput label="Phone Number" type="tel" onFocus={handleFieldFocus} onBlur={handleFieldBlur} />
                            </div>
                        </div>
                    </div>
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.7s' }}>
                        <FloatingLabelTextarea label="Write your message" onFocus={handleFieldFocus} onBlur={handleFieldBlur} />
                    </div>
                    <div className={`flex justify-start mt-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
                        <button type="submit" className="bg-[#276100] hover:bg-[#348000] text-white font-inter-400 rounded-xl px-10 py-3 text-lg transition-all duration-200 shadow-md hover:scale-105 focus:scale-105">
                            Submit
                        </button>
                    </div>
                </form>
                <style>{`
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .fade-in-down {
            animation: fadeInDown 0.7s cubic-bezier(0.22, 1, 0.36, 1) both 0.05s;
          }
          .contact-section {
            position: relative;
            overflow: hidden;
          }
          .contact-section::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 160px;
            z-index: 0;
            background: linear-gradient(180deg, rgba(62,153,0,0.10) 0%, #3E9900 100%);
            border-radius: 0 0 32px 32px;
            pointer-events: none;
          }
        `}</style>
            </div>
        </section>
    );
};

export default ContactUs;
