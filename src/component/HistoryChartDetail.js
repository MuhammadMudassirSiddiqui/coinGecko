import React from "react";

function HistoryChartDetail({ detail }) {
  return (
    <div>
      {detail && <p className="my-0">${detail.current_price.toFixed(2)}</p>}
      <p
        className={
          detail?.price_change_24h > 0
            ? "text-success my-0"
            : "text-danger my-0"
        }
      >
        {detail?.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>
  );
}

export default HistoryChartDetail;
