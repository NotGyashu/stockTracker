import React, { useContext, useEffect, useState } from "react";
import { Chart } from "./chart";
import Header from "./Header";
import Details from "./Details";
import OverView from "./overview";
import ThemeContext from "../Context/ThemeContext";
import StockContext from "../Context/stockContext";
import { fetchQuote, fetchStockDEtails } from "../api/finnhub-api";
import { Footer } from "./footer";
import { Theme } from "./Theme";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);
  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});
  useEffect(
    () => {
      const updateStockDetils = async () => {
        try {
          const result = await fetchStockDEtails(stockSymbol);
          setStockDetails(result);
        } catch (error) {
          setStockDetails({});
          console.log(error);
        }
      };
      const updateStockOverview = async () => {
        try {
          const result = await fetchQuote(stockSymbol);
          setQuote(result);
        } catch (error) {
          setQuote({});
          console.log(error);
        }
      };
      updateStockDetils();
      updateStockOverview();
    },
    
    [stockSymbol]
  );
  return (
    <div
      className={` grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6 no-scrollbar  ${
        darkMode ? "bg-[#1d0920] text-gray-300" : "bg-neutral-100"
      }`}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex flex-col gap-5 ">
        <div class="border-1 flex justify-between items-center p-2 py-5 bg-[#421748] text-white">
          <div class="font-special text-3xl ">stockTracker</div>
          <div>
            <ul class="flex gap-10 text-lg">
              <li>News</li>
              <li>Blog</li>
              <li>About</li>
            </ul>
          </div>
          <div>
            <Theme />
            <button class="border font-semibold border-2 rounded px-3 text-xl">
              Follow
            </button>
          </div>
        </div>
        <Header name={stockDetails.name} />
      </div>
      <div class="col-span-3 grid grid-cols-3  gap-9 border">
        <div className="md:col-span-2  ml-10 h-[70vh]">
          <Chart />
        </div>
        <div class="flex flex-col gap-8">
          <div class="mr-10 h-[15vh]">
            <OverView
              symbol={stockSymbol}
              price={quote.c}
              change={quote.d}
              changePercent={quote.dp}
              currency={stockDetails.currency}
            />
          </div>
          <div className="row-span-1  mr-10 h-[50vh]">
            <Details details={stockDetails} />
          </div>
        </div>
      </div>

      <div class="col-span-3">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
