import React, { useEffect, useState } from "react";
import StarIcon from "../../../assets/svgs/starIcon";
import ActionButton from "../../actionButton";
import PropTypes from "prop-types";

const HeroSectionContent = ({ onOpenModal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="flex  flex-col mx-4 lg:mx-40 justify-center items-center text-center gap-6 px-4 sm:px-6 md:px-0 mb-16 md:mb-24 lg:mb-32"
      aria-label="Hero Section"
    >
      <header
        className="flex gap-2 text-[11px] sm:text-sm font-inter-300 bg-white rounded-full px-4 py-2 items-center border border-black/4"
        style={{
          animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
          animationDelay: '200ms',
          opacity: 0
        }}
      >
        <span
          aria-hidden="true"
          style={{
            animation: 'bounce 2s infinite',
            display: 'inline-block'
          }}
        >
          <StarIcon />
        </span>
        <span className="text-[#3E9900] font-semibold" aria-label="Trusted">
          Trusted
        </span>
        <span>Best Billing Company in US</span>
      </header>

      <h1
        className="flex flex-col lg:gap-3 font-inter-400 text-4xl sm:text-5xl md:text-7xl lg:text-6xl text-[#276100] tracking-wide leading-tight tracking-wider"
        style={{
          animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
          animationDelay: '400ms',
          opacity: 0
        }}
      >
        <span>Maximize Your Revenue. Minimize Risk. Partner with the Most Trusted Medical Billing & Coding Expert in the Industry.</span>
      </h1>

      <p
        className="font-inter-300 text-lg tracking-wide lg:mx-25"
        style={{
          animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
          animationDelay: '600ms',
          opacity: 0
        }}
      >
        Certified. Proven. Results-Driven. Empowering private practices, clinics, and healthcare providers with accurate coding, seamless billing, and revenue optimization—without the headaches.
      </p>

      <div
        className="mt-4"
        style={{
          animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
          animationDelay: '800ms',
          opacity: 0
        }}
      >
        <ActionButton
          content={"Book Your Free Discovery Call"}
          aria-label="Book a free discovery call with ClaimsOnix"
          onClick={onOpenModal}
        />
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(-5%);
              animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            50% {
              transform: translateY(0);
              animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
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
    </section>
  );
};

HeroSectionContent.propTypes = {
  onOpenModal: PropTypes.func.isRequired
};

export default React.memo(HeroSectionContent);
