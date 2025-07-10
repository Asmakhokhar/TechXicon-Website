
'use client';
import React from "react";
import { PacmanLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <PacmanLoader color="#00CFDD" size={40} />
    </div>
  );
};

export default Loader;
