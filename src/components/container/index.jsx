import React from "react";

const Container = ({ children }) => {
  return (
    <div className="flex flex-col w-full">
      {children ?? (
        <div className="p-4 text-gray-500">No content provided.</div>
      )}
    </div>
  );
};

export default Container;
