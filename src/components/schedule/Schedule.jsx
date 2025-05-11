import React, { useEffect, useState } from 'react';
import scheduleSectionBgImg from "../../assets/pngs/scheduleSectionBg.png";
import RightArrow from '../../assets/svgs/rightArrow';
import ActionButton from '../actionButton';
import ScheduleModal from '../ScheduleModal';

const Schedule = ({ onOpenModal, onClose, isModalOpen }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>

            <section
                className="relative w-[80%] mx-auto py-16 md:py-24 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${scheduleSectionBgImg})`
                }}
                aria-label="Schedule Consultation Section"
            >
                {/* Content */}
                <div className={`relative z-10 w-full px-4 sm:px-6 md:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="w-full text-center">
                        <h2
                            className="text-2xl sm:text-3xl md:text-4xl font-inter-500 text-[#296600] mb-4 flex flex-col"
                            aria-label="Let's build a revenue strategy that works for you"
                        >
                            <span>Let's build a revenue strategy that</span>
                            <span>works for you.</span>
                        </h2>
                        <p
                            className="text-base sm:text-lg text-[#2E2E1F] mb-8 font-inter-300"
                            aria-label="Consultation description"
                        >
                            Schedule a free consultation with our RCM experts. We'll analyze your current processes and provide a customized solution to optimize your revenue cycle.
                        </p>
                        <div
                            className="flex flex-col lg:flex-row  gap-4 justify-center items-center"
                            role="group"
                            aria-label="Call to action"
                        >
                            <ActionButton
                                content="Schedule a Call"
                                className="w-content sm:w-auto "
                                Icon={<RightArrow />}
                                onClick={onOpenModal}
                                aria-label="Schedule a consultation call"
                            />
                            <p
                                className="text-[#2E2E1F]/80 text-sm font-inter-300"
                                aria-label="Consultation details"
                            >
                                No commitment required • 30-minute consultation
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ScheduleModal
                isOpen={isModalOpen}
                onClose={onClose}
            />

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(32px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .fade-in-up {
                    animation: fadeInUp 1s cubic-bezier(0.22, 1, 0.36, 1) both;
                }
            `}</style>
        </>
    );
};

// PropTypes for component props
Schedule.propTypes = {
    // Add any props if needed in the future
};

export default React.memo(Schedule);