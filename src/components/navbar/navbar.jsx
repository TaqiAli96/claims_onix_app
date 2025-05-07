import React, { useState, useEffect } from "react";
import ActionButton from "../actionButton";
import RightArrow from "../../assets/svgs/rightArrow";
import navigationItems from "../../constants/navitems";
import HamburgerIcon from "../../assets/svgs/hamburgerIcon";
import AppLogo from "../../assets/pngs/AppLogo.png";
import MobileNavbar from "./mobNavBar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${isScrolled
        ? 'fixed top-0 left-0 right-0 bg-white shadow-md mt-0 p-5'
        : 'relative bg-transparent mt-10'
        }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="px-4 sm:px-6 lg:px-4 lg:mx-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="w-44 animate-fade-in">
            <a href="/" aria-label="Home">
              <img
                src={AppLogo}
                alt="ClaimsOnix Logo"
                className="w-full h-full"
                width="176"
                height="64"
                loading="eager"
              />
            </a>
          </div>

          <div className="hide-on-mobile-950 flex items-center justify-center space-x-6 flex-1">
            {navigationItems?.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="relative group text-black text-xs lg:text-sm xl:text-base px-2 py-2 font-inter-400 transition-colors duration-300 hover:text-[#348000] whitespace-nowrap"
                style={{
                  animation: `fadeInDown 0.5s ease-out forwards`,
                  animationDelay: `${index * 100}ms`,
                  opacity: 0
                }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#348000] origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
              </a>
            ))}
          </div>

          <div
            className="hide-on-mobile-950 md:flex items-center justify-end"
            style={{
              animation: 'fadeInDown 0.5s ease-out forwards',
              animationDelay: '400ms',
              opacity: 0
            }}
          >
            <ActionButton content={"Contact Us"} Icon={<RightArrow />} />
          </div>

          <div
            className="show-on-mobile-950 hidden items-center"
            style={{
              animation: 'fadeInDown 0.5s ease-out forwards',
              animationDelay: '500ms',
              opacity: 0
            }}
          >
            <button
              onClick={toggleMobileMenu}
              className="text-black focus:outline-none transition-transform duration-300 hover:scale-110"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </div>

      <MobileNavbar isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />

      <style>
        {`
          @media (max-width: 950px) {
            .hide-on-mobile-950 { display: none !important; }
            .show-on-mobile-950 { display: flex !important; }
          }
          @media (min-width: 951px) {
            .hide-on-mobile-950 { display: flex !important; }
            .show-on-mobile-950 { display: none !important; }
          }
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default React.memo(Navbar);
