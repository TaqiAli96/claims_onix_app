import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FloatingLabelInput = ({ label, type = "text", onFocus, onBlur }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');

    const handleFocus = (e) => {
        setIsFocused(true);
        onFocus?.(e);
    };

    const handleBlur = (e) => {
        setIsFocused(false);
        onBlur?.(e);
    };

    return (
        <div className="relative">
            <input
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="w-full px-4 py-3 border border-gray-300  rounded-lg focus:outline-none focus:border-[#276100] transition-colors duration-200"
                placeholder=" "
            />
            <label
                className={`absolute left-4 transition-all duration-200 pointer-events-none ${isFocused || value ? '-top-2 text-sm bg-white px-1 text-[#276100]' : 'top-3 text-gray-500'
                    }`}
            >
                {label}
            </label>
        </div>
    );
};

const FloatingLabelTextarea = ({ label, onFocus, onBlur }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');

    const handleFocus = (e) => {
        setIsFocused(true);
        onFocus?.(e);
    };

    const handleBlur = (e) => {
        setIsFocused(false);
        onBlur?.(e);
    };

    return (
        <div className="relative">
            <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="w-full px-4 py-3 border border-gray-300  rounded-lg focus:outline-none focus:border-[#276100] transition-colors duration-200 min-h-[120px]"
                placeholder=" "
            />
            <label
                className={`absolute left-4 transition-all duration-200 pointer-events-none ${isFocused || value ? '-top-2 text-sm bg-white px-1 text-[#276100]' : 'top-3 text-gray-500'
                    }`}
            >
                {label}
            </label>
        </div>
    );
};

const ContactForm = ({ onSubmit, className = '' }) => {
    const [isFormFocused, setIsFormFocused] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const handleFieldFocus = () => {
        setIsFormFocused(true);
    };

    const handleFieldBlur = () => {
        setIsFormFocused(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit?.(e);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`w-full bg-white rounded-2xl flex flex-col gap-8 p-6 md:p-10 transition-colors duration-300 ${isFormFocused ? 'border-[#276100]' : 'border-[#CBCBCB]'} ${className}`}

        >
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
                <h2 className="text-xl font-inter-400 mb-4">Your Contact Details</h2>
                <div className="flex flex-col gap-4 w-full">
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
                        <FloatingLabelInput
                            label="Full Name"
                            onFocus={handleFieldFocus}
                            onBlur={handleFieldBlur}
                        />
                    </div>
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.5s' }}>
                        <FloatingLabelInput
                            label="Email Address"
                            type="email"
                            onFocus={handleFieldFocus}
                            onBlur={handleFieldBlur}
                        />
                    </div>
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
                        <FloatingLabelInput
                            label="Phone Number"
                            type="tel"
                            onFocus={handleFieldFocus}
                            onBlur={handleFieldBlur}
                        />
                    </div>
                </div>
            </div>
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.7s' }}>
                <FloatingLabelTextarea
                    label="Write your message"
                    onFocus={handleFieldFocus}
                    onBlur={handleFieldBlur}
                />
            </div>
            <div className={`flex justify-start mt-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
                <button
                    type="submit"
                    className="bg-[#276100] hover:bg-[#348000] text-white font-inter-400 rounded-xl px-10 py-3 text-lg transition-all duration-200 shadow-md hover:scale-105 focus:scale-105"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
    className: PropTypes.string
};

FloatingLabelInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};

FloatingLabelTextarea.propTypes = {
    label: PropTypes.string.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};

export default ContactForm; 