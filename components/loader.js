import React from "react";

const Loader = () => {
  return (
    <div className="absolute inset-0 z-50 w-full flex justify-center bg-white">
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
