import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CloseIcon } from 'flowbite-react';

const Modal = ({ isOpen, onClose, children, title, description }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black z-50 transition-opacity duration-300 ease-in-out"
                style={{ opacity: 0.5 }}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    className="w-full max-w-2xl bg-white rounded-lg shadow-xl transform transition-all duration-500 ease-out"
                    style={{
                        animation: 'slideIn 0.5s ease-out forwards',
                        transform: 'translateX(100%)',
                    }}
                >
                    <div className='flex justify-end p-4 md:p-3'>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 focus:outline-none transition-colors duration-200"
                            aria-label="Close modal"
                        >
                            <CloseIcon className="h-6 w-6" />
                        </button>
                    </div>
                    <div className='flex flex-col gap-4 items-center'>
                        <div className='px-4 md:px-20 text-center flex flex-col gap-2'>
                            <h3 className="text-2xl md:text-4xl font-semibold text-black">{title}</h3>
                            <p className='text-[#4C4C4C] text-base md:text-lg font-normal'>{description}</p>
                        </div>
                        <div className="w-full px-4 md:px-1 pb-8">
                            {children}
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
                    @keyframes slideIn {
                        0% {
                            transform: translateX(100%);
                            opacity: 0;
                        }
                        100% {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }

                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 0.5;
                        }
                    }

                    @media (prefers-reduced-motion: reduce) {
                        * {
                            animation-duration: 0.01ms !important;
                            animation-iteration-count: 1 !important;
                            transition-duration: 0.01ms !important;
                            scroll-behavior: auto !important;
                        }
                    }
                `}
            </style>
        </>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Modal; 