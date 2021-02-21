import React, { useRef, useEffect, useState } from "react";
import Chartjs from "chart.js";
import { ChartConfig } from "../chartConfigs/ChartConfig";
function HistoryChart({ coinData }) {
  const ChartRef = useRef();
  const { day, week, year, detail } = coinData;
  const [timeFormat, setTimeFormat] = useState("24h");
  console.log("Day", detail);
  console.log("week", week);
  const [isLoading, setIsLoading] = useState(false);

  const DetermieTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "week":
        return week;
      case "year":
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    setIsLoading(true);
    if (ChartRef && ChartRef.current && detail) {
      const chartInstance = new Chartjs(ChartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name} Price`,
              data: DetermieTimeFormat(),
              backgroundColor: "rgba(0,0,0,0.2)",
              borderColor: "rgba(0,0,0,1)",

              borderWidth: 1,
              pointRadius: 0,
            },
          ],
        },
        options: {
          ...ChartConfig,
        },
      });
    }
    setIsLoading(false);
  }, []);
  return (
    <div className="bg-white border mt-2 rounded p-3">
      {isLoading && <div>ooe</div>}
      <div>
        <canvas ref={ChartRef} id="myChart" width={250} height={250}></canvas>
      </div>
      <div className="chart-button mt-2">
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => setTimeFormat("24h")}
        >
          1 day
        </button>
        <button
          className="btn btn-outline-secondary btn-sm mx-2"
          onClick={() => setTimeFormat("week")}
        >
          Week
        </button>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => setTimeFormat("year")}
        >
          Year
        </button>
      </div>
    </div>
  );
}

export default HistoryChart;
