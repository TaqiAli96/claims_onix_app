import React from "react";
import PropTypes from 'prop-types';

const ActionButton = ({ content, Icon, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white bg-[#276100] hover:bg-[#348000] font-normal text-base font-inter-300 rounded-[100px] px-5 py-2.5 text-center inline-flex gap-2 items-center"
    >
      {content || ""}
      {Icon && Icon}
    </button>
  );
};

ActionButton.propTypes = {
  content: PropTypes.string,
  Icon: PropTypes.node,
  onClick: PropTypes.func
};

export default ActionButton;
