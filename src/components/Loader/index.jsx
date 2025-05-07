import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
      <div className="flex flex-col items-center">
        {/* Spinning circle */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-[#276100] border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-[#276100] rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-4 text-[#276100] font-medium animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loader;
