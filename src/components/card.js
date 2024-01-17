import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const Card = ({children})=> {
  const {darkMode} = useContext(ThemeContext)
  return (
    
   <div className={`w-full h-full rounded-md relative p-4 border border-2 border-neutral-200${darkMode ? "bg-gray-900 text-gray-800":" bg-white "}`}>
    
    {children}


   </div>


  )



}

export default Card;