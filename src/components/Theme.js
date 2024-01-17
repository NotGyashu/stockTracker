import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
export const Theme = ()=>{
    const {darkMode, setDarkMode} = useContext(ThemeContext);

    const toggleDarkMode = () =>{
        setDarkMode(!darkMode)
    }
    return(
        <button className={`rounded-lg border-1 border-neutral-400 p-2 absolute right-4 xl:right-32 shadow-lg ${darkMode ? "shadow-gray-800" : null}`} onClick={toggleDarkMode} >
{/* <MoonIcon classname= "h-8 w-8 cursor-pointer stroke-2 fill-none stroke-neutral-700 " /> */}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-4 w-4 cursor-pointer stroke-2 fill-none stroke-neutral-700 ${darkMode?"fill-yellow-400 stroke-yellow-400" : "fill-white stroke-neutral-400"}`}>
  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
</svg>

        </button>
    )
}