import React, { useEffect, useState } from "react";
import coinGecko from "./../apis/coinGecko";
import { GlobalContext } from "./../context/WatchListContext";
import Coin from "./Coin";

const CoinList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { watchList, DeleteCoin } = GlobalContext();

  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const fetchDate = async () => {
      setIsLoading(true);
      let responce = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(","),
        },
      });
      setCoins(responce.data);
      setIsLoading(false);
    };
    if (watchList.length > 0) {
      fetchDate();
    } else {
      setCoins([]);
    }
  }, [watchList]);
  return (
    <div>
      {isLoading && <div>Loading</div>}
      {coins.map((coin) => (
        <Coin key={coin.td} coin={coin} deleteHandler={DeleteCoin} />
      ))}
    </div>
  );
};
export default CoinList;
