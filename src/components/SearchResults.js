import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import StockContext from "../Context/stockContext";
export const SearchResults = ({ results }) => {
  const {darkMode} = useContext(ThemeContext);
  const {setStockSymbol} = useContext(StockContext);
  return (
    <ul
      className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll  ${
        darkMode
          ? "bg-gray-900 border-gray-800 custom-scrollbar custom-scrollbar-dark"
          : " bg-white border-neutral-200 custom-scrollbar"
      }`}
    >
      {results.map((item) => (
        <li
          key={item.symbol}
          className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md  ${
            darkMode ? "hover:bg-[#bc72c8]" : "hover:bg-[#bc72c8]"
          }`}
          onClick={() => {
            setStockSymbol(item.symbol);
          }}
        >
          <span>{item.symbol}</span>
          <span>{item.description}</span>
        </li>
      ))}
    </ul>
  );
};
