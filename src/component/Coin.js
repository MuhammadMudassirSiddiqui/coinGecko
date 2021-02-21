import React from "react";
import { Link } from "react-router-dom";
import "./Coin.css";

function Coin({ coin, deleteHandler }) {
  return (
    <Link
      to={`/detail/${coin.id}`}
      className="coin d-flex justify-content-between align-items-center"
    >
      <img src={coin.image} alt="" width="50" height="50" />
      <span className="text-decoration-none text-dark mx-1 text-center">
        {coin.name}
      </span>
      <span className="coin_price text-decoration-none text-dark text-center">
        {coin.current_price}
      </span>
      <span
        className={
          coin.price_change_percentage_24h > 0
            ? `coin_priceChange coin_price text-decoration-none text-success mr-2 text-center mr-3`
            : `coin_priceChange coin_price text-decoration-none text-danger mr-2 text-center mr-3`
        }
      >
        {coin.price_change_percentage_24h}
      </span>
      <i
        onClick={(e) => {
          e.preventDefault();
          deleteHandler(coin.id);
        }}
        className="deleteIcon far fa-times-circle text-danger"
      ></i>
    </Link>
  );
}

export default Coin;
