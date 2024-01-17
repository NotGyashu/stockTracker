import React from "react";
 const ChartFilter = ({text, active, onClick}) => {
    return (
      <button
        className={`w-8  m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer ${
          active
            ? "bg-[#520f5c] border-[#520f5c] text-white"
            : "border-[#bc72c8] text-[#bc72c8]"
        }`}
        onClick={onClick}
      >
        {text}
      </button>
    );
;
}
export default ChartFilter;