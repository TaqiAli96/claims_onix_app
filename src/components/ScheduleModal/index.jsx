import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import PhoneIcon from '../../assets/svgs/phoneIcon';

const ScheduleModal = ({ isOpen, onClose }) => {
    const handleCallClick = () => {
        window.location.href = 'tel:+1-307-212-8968';
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Schedule Your Consultation"
            description="Ready to optimize your revenue cycle? Give us a call!"
        >
            <div className="flex flex-col items-center gap-6 py-4">
                <div className="bg-[#E6FFD4] p-6 rounded-full">
                    <PhoneIcon className="h-12 w-12 text-[#276100]" />
                </div>
                <div className="text-center">
                    <p className="text-lg text-gray-600 mb-2">Call us at:</p>
                    <a
                        href="tel:+1-307-212-8968"
                        className="text-3xl font-semibold text-[#276100] hover:text-[#348000] transition-colors duration-200"
                    >
                        (307) 212-8968
                    </a>
                </div>
                <button
                    onClick={handleCallClick}
                    className="w-full max-w-xs bg-[#276100] hover:bg-[#348000] text-white font-inter-400 rounded-xl px-8 py-4 text-lg transition-all duration-200 shadow-md hover:scale-105 focus:scale-105 flex items-center justify-center gap-2"
                >
                    <PhoneIcon className="h-5 w-5" />
                    Call Now
                </button>
                <p className="text-sm text-gray-500 text-center">
                    Available Monday - Friday<br />
                    9:00 AM - 6:00 PM EST
                </p>
            </div>
        </Modal>
    );
};

ScheduleModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ScheduleModal; 