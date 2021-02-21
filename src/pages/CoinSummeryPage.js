import React from "react";
import CoinList from "./../component/CoinList";
import Addcoin from "./../component/Addcoin";
import "./coinSummeryPage.css";

function CoinSummeryPage() {
  return (
    <div className="coinSummeryPage">
      <Addcoin />
      <CoinList />
    </div>
  );
}

export default CoinSummeryPage;
