import React, { useEffect, useState, useCallback } from "react";
import PropTypes from 'prop-types';
import Navbar from "../navbar/navbar";
import heroDesktop from "../../assets/pngs/HeroDesktopImage.png";
import heroMobile from "../../assets/pngs/HeroMobImage.png";
import HeroSectionContent from "./HeroSectionContent";
import dashboardImage from "../../assets/pngs/dashboardIconImage.png";

const MOBILE_SCREEN_WIDTH = 950;

const HeroSection = ({
  desktopImage = heroDesktop,
  mobileImage = heroMobile,
  dashboardImageSrc = dashboardImage,
  onOpenModal,
  onOpenScheduleModal
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < MOBILE_SCREEN_WIDTH);
  }, []);

  useEffect(() => {
    handleResize(); // Call on mount
    window.addEventListener("resize", handleResize);
    setIsVisible(true); // Trigger animation after mount
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <section
      className="w-full bg-cover relative"
      style={{
        backgroundImage: `url(${isMobile ? mobileImage : desktopImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `${isMobile ? "center top 87%" : "center"}`,
        border:"1px solid white"

      }}
      role="banner"
      aria-label="Hero section"
    >
      <Navbar onOpenModal={onOpenModal} />

      <div className={`mt-20 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <HeroSectionContent onOpenModal={onOpenScheduleModal} />
      </div>

      <div className="flex justify-center px-4 sm:px-6 md:px-0 pt-20">
        <img
          src={dashboardImageSrc}
          alt="ClaimsOnix Dashboard Interface"
          width={900}
          height={506}
          loading="eager"
          className={`max-w-full h-auto transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '300ms' }}
        />
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  desktopImage: PropTypes.string,
  mobileImage: PropTypes.string,
  dashboardImageSrc: PropTypes.string,
  onOpenModal: PropTypes.func.isRequired
};

export default React.memo(HeroSection);
