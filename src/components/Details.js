import React, { useContext } from "react";
import Card from "./card";
import ThemeContext from "../Context/ThemeContext";

const Details = ({details}) => {
  const {darkMode} = useContext(ThemeContext)
    const detailsList = {
        name: "Name ",
        country: "Country ",
        exchange: "Exchange",
        ipo: "IPO ",
        marketCapitalization: "Market Capitalization",
        finnhubIndustry: "Industry"
        
    };

    const convertToBillion = (number) => {
        return (
        (number / 1000).toFixed(2)
        )
    };


    return (
        <Card>
            <ul className={`w-full h-full flex flex-col justify-between divide-y-1 text-xs ${darkMode ? "divide-gray-500 text-white":null}`}>
                {Object.keys(detailsList).map((item)=>{
                    return(
                        <li key= { item } className="flex-1 flex justify-between items-center">
                        <span>
                            {detailsList[item]}
                        </span>
                        <span>
                          {  item ===  "marketCapitalization" ?  convertToBillion(details[item]) : details[item]
                          }
                        </span>

                        </li>
                    )

                    
                })}
            </ul>



        </Card>
    )


}
export default Details;