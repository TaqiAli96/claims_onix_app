import React from 'react';
import navigationItems from '../../constants/navitems';
import socialLinks from '../../constants/socialIcons';
import AppLogo from '../../assets/pngs/AppLogo.png';



const Footer = () => (
    <footer className="w-full bg-white border-t border-gray-100 py-10 pb-2">
        <div className="max-w-7xl mx-auto footer-main-row flex items-center justify-between px-4 gap-4">
            {/* Custom responsive direction for <850px */}
            <style>{`
                @media (max-width: 900px) {
                    .footer-main-row { flex-direction: column !important; }
                }
                @media (min-width: 850px) {
                    .footer-main-row { flex-direction: row !important; }
                }
            `}</style>
            {/* Logo */}
            <div className="w-44 animate-fade-in">
                <a href="/" aria-label="Home">
                    <img
                        src={AppLogo}
                        alt="ClaimsOnix Logo"
                        className="w-full h-full bg-transparent mix-blend-multiply"
                        width="176"
                        height="64"
                        loading="eager"
                    />
                </a>
            </div>
            {/* Navigation */}
            <nav className="flex flex-col md:flex-row flex-wrap justify-center gap-5 md:gap-6 text-sm md:text-sm lg:text-base font-inter-400">
                {navigationItems.map((link, i) => (
                    <a
                        key={i}
                        href="#"
                        className="hover:text-[#276100] transition-all duration-300 transform hover:-translate-y-1"
                    >
                        {link}
                    </a>
                ))}
            </nav>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
                {socialLinks.map(({ id, name, Icon }) => (
                    <a
                        key={id}
                        aria-label={name}
                        className="text-gray-700 hover:text-[#276100] transition-all duration-300 transform hover:scale-125"
                        href="#"
                    >
                        <Icon />
                    </a>
                ))}
            </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500 gap-2">
            <div>
                © Copyright 2024, All Rights Reserved
            </div>
            <div className="flex gap-6">
                <a href="#" className="hover:text-[#276100] transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-[#276100] transition-colors duration-200">Terms & Conditions</a>
            </div>
        </div>
    </footer>
);

export default Footer;
