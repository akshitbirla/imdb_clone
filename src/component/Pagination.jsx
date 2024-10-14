import React from "react";

function Pagination({ handlePrev, handleNext, pageNo }) {
  return (
    <div className="bg-gray-400 p-4 m-8 rounded-xl flex justify-center">
      <div
        onClick={handlePrev}
        className="px-8 hover:cursor-pointer hover:scale-110 duration-300 text-xl"
      >
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="text-xl font-bold">{pageNo}</div>
      <div
        onClick={handleNext}
        className="px-8 hover:cursor-pointer hover:scale-110 duration-300 text-xl"
      >
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
