import React, { useEffect, useState } from "react";
import CoinData from "./../component/CoinData";
import HistoryChart from "./../component/HistoryChart";
import { useParams } from "react-router-dom";
import coinGecko from "./../apis/coinGecko";
import HistoryChartDetail from "../component/HistoryChartDetail";

export default function CoinDetailPage() {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const formatData = (arr) => {
    return arr.map((eachArr) => {
      return {
        x: eachArr[0],
        y: eachArr[1].toFixed(2),
      };
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [detail, day, week, year] = await Promise.all([
        coinGecko.get("/coins/markets", {
          params: {
            vs_currency: "usd",
            ids: id,
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),

        coinGecko.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: "usd",
            days: "7",
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: "usd",
            days: "365",
          },
        }),
      ]);

      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
      });
      setIsLoading(false);
      console.log("check", detail.data[0]);
    };
    fetchData();
  }, []);

  return (
    <div className="coin_List">
      {isLoading && <div>Loading</div>}
      <HistoryChartDetail detail={coinData.detail} />
      <HistoryChart coinData={coinData} />
      <CoinData />
    </div>
  );
}
