import React from 'react';
import PropTypes from 'prop-types';
import SectionHeading from "../../components/sectionHeading"
import Card from "../../components/card"
import IconContainer from "../../components/iconContainer"
import cardData from "../../constants/services"

// Animation utility for staggered fade-in
const fadeInUp = (index) => ({
    animation: `fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both`,
    animationDelay: `${index * 0.12 + 0.1}s`
});

const ServicesHeader = () => (
    <>
        <SectionHeading title="Our Services" />
        <h1
            className="text-2xl sm:text-3xl md:text-5xl font-inter-500 leading-tight text-center md:text-left flex flex-col fade-in-down"

        >
            <span>Complete RCM Support From</span>
            <span>Eligibility to Collections</span>
        </h1>
        <p
            className="text-[#4C4C4C] text-base sm:text-lg font-inter-400 text-center md:text-left flex flex-col fade-in-down"
            style={{
                animationName: 'fadeInDown',
                animationDuration: '0.7s',
                animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                animationFillMode: 'both',
                animationDelay: '0.15s'
            }}
        >
            <span>We manage the entire revenue cycle with precision, speed, and full compliance.</span>
            <span>Here's how we keep your billing smooth, scalable, and profitable.</span>
        </p>
    </>
);

const ServiceCard = ({ item, index }) => {
    const { Icon, title, desc, id } = item;
    return (
        <div
            style={fadeInUp(index)}
            className="transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl h-full flex flex-col"
        >
            <Card
                key={id}
                IconContainer={
                    <IconContainer
                        className="rounded-xl bg-[#3E99001A] p-3 sm:p-4 flex justify-center items-center w-fit"
                        Icon={Icon}
                        id={id}
                    />
                }
                title={title}
                description={desc}
                className="p-4 sm:p-6 md:p-8 bg-white border border-[#E6E6E6] rounded-3xl shadow-md transition-shadow duration-300 h-full flex flex-col"
                titleClassName="text-[#00134D] text-base sm:text-lg md:text-2xl font-inter-600"
                descriptionClassName="text-sm sm:text-base md:text-lg text-[#4A4A4A] font-inter-300"
            />
        </div>
    );
};

ServiceCard.propTypes = {
    item: PropTypes.shape({
        Icon: PropTypes.elementType.isRequired,
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired
};

const Services = () => {
    return (
        <section
            className="flex bg-[#F8FFF5] py-10 flex-col gap-4 w-full items-center md:items-start overflow-x-hidden px-4 sm:px-6 md:px-15"
            aria-label="Our Services"
        >
            <ServicesHeader />
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 w-full items-stretch"
                role="list"
                aria-label="Service offerings"
            >
                {cardData.map((item, idx) => (
                    <ServiceCard key={item.id} item={item} index={idx} />
                ))}
            </div>
            {/* Animation keyframes */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translate3d(0, 40px, 0);
                    }
                    to {
                        opacity: 1;
                        transform: none;
                    }
                }
                .animate-fade-in-down {
                    animation: fadeInDown 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
                }
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translate3d(0, -30px, 0);
                    }
                    to {
                        opacity: 1;
                        transform: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default React.memo(Services);