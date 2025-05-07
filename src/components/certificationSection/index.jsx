import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { certifications } from "../../constants/certficications";

const CustomText = ({ content }) => (
  <span className="text-[#296600] font-inter-600">{content}</span>
);

CustomText.propTypes = {
  content: PropTypes.string.isRequired
};

const CertificationSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="flex flex-col justify-center items-center py-10 gap-4 w-full overflow-hidden"
      aria-label="Certifications and Trust Indicators"
    >
      <p className={`text-center w-full font-inter-300 text-lg transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
        Trusted by <CustomText content="1000+ Teams" /> across{" "}
        <CustomText content="100+ Countries" />
      </p>

      <div
        className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        role="region"
        aria-label="Certification logos"
      >
        <div className="flex flex-row justify-between px-4 md:px-10 gap-2 sm:gap-4 min-w-6xl">
          {certifications.map(({ id, Icon, name }, index) => (
            <div
              key={id}
              className={`flex justify-center items-center transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
                }`}
              style={{
                transitionDelay: `${index * 0.15}s`
              }}
              role="img"
              aria-label={`${name || 'Certification'} logo`}
            >
              {Icon && (
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 flex items-center justify-center">
                  <img
                    src={Icon}
                    alt={name || 'Certification'}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    width={128}
                    height={128}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default React.memo(CertificationSection);
