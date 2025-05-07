import React from "react";
import PropTypes from 'prop-types';
import Badge from "./../badge";

const TopBar = ({
  badgeText = "New",
  message = "Built for Providers Who Want Results, Not Just Reports."
}) => {
  return (
    <aside
      className="flex justify-center items-center bg-[#276100] p-5"
      aria-label="Announcement bar"
    >
      <div
        className="flex items-center gap-4 text-xs sm:text-sm leading-5 max-w-7xl mx-auto px-4"
        role="alert"
      >
        <Badge
          content={badgeText}
          color={"#276100"}
          aria-label="New feature badge"
        />
        <p
          className="text-white font-inter-300"
          aria-live="polite"
        >
          {message}
        </p>
      </div>
    </aside>
  );
};

TopBar.propTypes = {
  badgeText: PropTypes.string,
  message: PropTypes.string
};

export default React.memo(TopBar);
