import React, { useContext } from "react";
import Card from "./card";
import ThemeContext from "../Context/ThemeContext";

const OverView = ({symbol,price,change,changePercent, currency}) =>{
    
 const {darkMode} = useContext(ThemeContext)   
    
    
    return (
      <Card>
        <span
          className={`${
            darkMode ? "text-white" : "text-neutral-400"
          } absolute left-2 top-2  text-xl xl:text-sm 2xl:text-base`}
        >
          {symbol}
        </span>
        <div className="w-full h-full flex items-center justify-around ">
          <span className={`${darkMode?"text-white":"text-black"} text-2xl xl:text-4xl 2xl:text-5xl flex items-center`}>
            {price}
            <span
              className={`${
                darkMode ? "text-white" : "text-neutral-400"
              } text-lg xl:text-base 2xl:text-2xl  m-2`}
            >
              {currency}
            </span>
          </span>
          <span
            className={`text-lg xl:text-xl 2xl:tetx-2xl ${
              change > 0 ? "text-lime-500 " : " text-red-500"
            }`}
          >
            {change}&nbsp;<span>({changePercent}%)</span>
          </span>
        </div>
      </Card>
    );
    
}
export default OverView;