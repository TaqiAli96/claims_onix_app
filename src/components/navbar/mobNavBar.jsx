import React, { useEffect } from "react";
import { CloseIcon } from "flowbite-react";
import ActionButton from "../actionButton";
import RightArrow from "../../assets/svgs/rightArrow";
import navigationItems from "../../constants/navitems";
import { Link } from "react-scroll";


const MobileNavbar = ({ onClick, isOpen, onClose }) => {
  // Lock/Unlock body scroll based on mobile menu state
  useEffect(() => {
    if (isOpen) {
      // Lock scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Reset scroll when menu is closed
      document.body.style.overflow = "";
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen z-50 bg-white transform transition-all duration-500 ease-in-out
        ${isOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
        }
        lg:hidden`}
    >
      {/* Close Icon */}
      <div className="flex justify-end p-5">
        <button onClick={onClose} className="cursor-pointer">
          <CloseIcon />
        </button>
      </div>

      {/* Navigation Items */}
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 cursor-pointer">
        {navigationItems?.map((item, index) => (

          <Link
            key={item.to}
            to={item.to}
            onClick={onClose}
            smooth={true}
            duration={500}
            className="relative group text-black block px-5 py-5 rounded-md text-base font-medium focus:outline-none" style={{
              animation: `fadeInDown 0.5s ease-out forwards`,
              animationDelay: `${index * 100}ms`,
              opacity: 0
            }}
          >
            {item.name}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#348000] origin-right scale-x-0 transition-transform duration-300 group-focus:scale-x-100 group-focus:origin-left group-hover:scale-x-100 group-hover:origin-left"></span>
          </Link>

        ))}
        <div className="flex justify-center w-full">
          <ActionButton content={"Contact Us"} Icon={<RightArrow />} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
