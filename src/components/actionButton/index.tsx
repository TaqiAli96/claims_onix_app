import React from "react";

const ActionButton = ({ content, Icon }) => {
  return (
    <button
      type="button"
      className="text-white bg-[#276100] hover:bg-[#348000] font-normal text-base font-inter-300 rounded-[100px] px-5 py-2.5 text-center inline-flex gap-2 items-center"
    >
      {content || ""}
      {Icon && Icon}
    </button>
  );
};

export default ActionButton;
