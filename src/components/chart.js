import React, { useContext, useState, useEffect } from "react";
import Card from "./card";
import { convertUnixTimestampToDate,convertDateToUnixTimestamp,CreateDate } from "../Helpers/date-helper";
import { mockHistoricalData } from "../constants/mock";

import {
  AreaChart,
  ResponsiveContainer,
  Area,
  Tooltip,
  XAxis,
  YAxis,
} 
from "recharts";
import { chartConfig } from "../constants/config";
import ChartFilter from "./ChartFilter";
import ThemeContext from "../Context/ThemeContext";
import { fetchHistoricalData } from "../api/finnhub-api";
import StockContext from "../Context/stockContext";

export const Chart = () => {
  const [data, setData] = useState([]);
  const [show,setShow] = useState()
  const [filter, setFilter] = useState("1W");
  const {darkMode} = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);

  const formatData = (data) => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimestampToDate(data.t[index]),
      };
    });
  };

  useEffect(()=>{
      
    const getDateRange = ()=>{
      
      const {days,weeks,months,years} = chartConfig[filter];
      const endDate = new Date();
      const startDate = CreateDate(endDate , -days,-weeks,-months,-years);

      const startUnixTimesstamp = convertDateToUnixTimestamp(startDate);
      const endTimestamp = convertUnixTimestampToDate(endDate);

      return {startUnixTimesstamp,endTimestamp}
    }
    const updateChartDate = async () =>{

   try
   {
 const {startUnixTimesstamp, endTimestamp} = getDateRange();
 const resolution = chartConfig[filter].Resolution;

 const result = await fetchHistoricalData(
  stockSymbol,
  resolution,
  startUnixTimesstamp,
  endTimestamp
 )
 setData(formatData(result));
 setShow(true)
   }
   catch(error){
   
    console.log(error);
   } 
   
    }
    updateChartDate();

  },[stockSymbol,filter])

 

  return (
    <Card>
      <ul className="flex absolute top-2 right-2 z-40 ">
        {Object.keys(chartConfig).map((item) => {
          return (
            <li key={item}>
              <ChartFilter
                text={item}
                active={filter === item}
                onClick={() => {
                  setFilter(item);
                }}
              />
            </li>
          );
        })}
      </ul>

      {show ? (
        <ResponsiveContainer>
          <AreaChart data={mockHistoricalData}>
            <defs>
              <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={darkMode ? "#d452e3" : "rgb(210, 110, 199)"}
                  stopOpacity={0.8}
                />
                <stop
                  offset="100%"
                  stopColor={darkMode ? "#ec9ff5" : "rgb(210, 110, 199)"}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#312e8"
              fillOpacity={1}
              strokeWidth={0.5}
              fill="url(#chartColor)"
            />
            <Tooltip
              contentStyle={darkMode ? { background: "#520f5c" } : null}
              itemStyle={darkMode ? { color: "rgb(255 255 255)" } : null}
            />
            <XAxis
              dataKey="date"
             
            />
            <YAxis
              domain={["dataMin", "dataMax"]}
             
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <div class="text-3xl p-20 text-gray-400 font-special">
          <p>
            Ooops!!<br></br> API subscription expired because dont have any
            money
          </p>
          <div
            class="border-2 px-2 rounded shadow-xl cursor-pointer hover:border-[#520f5c] text-white bg-[#520f5c] mt-20"
            onClick={() => {
              setShow(true);
            }}
          >
            click me for random bukkshit data
          </div>
        </div>
      )}
    </Card>
  );
};
