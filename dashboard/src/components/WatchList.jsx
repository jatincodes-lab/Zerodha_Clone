import React, { useState } from "react";
import { watchlist } from "../data/data";
import { Tooltip, Grow } from "@mui/material";
import { PieChart } from "./PieChart";

const WatchList = () => {
  const labels = watchlist.map((stocks) => stocks.name); // ✅ labels go here
  const data = {
    labels,
    datasets: [
      {
        label: "Stocks",
        data: watchlist.map((stocks) => stocks.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="watchlist-container">
        <div className="search-container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
            className="search"
          />
          <span className="counts"> {watchlist.length} / 50</span>
        </div>

        <ul className="list">
          {watchlist.map((stock, index) => {
            return <WatchListItem stock={stock} key={index} />;
          })}
        </ul>
        <PieChart data={data} />
      </div>
    </>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  let [seeWatchListAction, setSeeWatchListAction] = useState(false);

  let handelMouseEnter = (e) => {
    setSeeWatchListAction(true);
  };
  let handelMouseExit = (e) => {
    setSeeWatchListAction(false);
  };

  return (
    <li>
      <div
        className="item"
        onMouseEnter={handelMouseEnter}
        onMouseLeave={handelMouseExit}
      >
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          <span className={stock.isDown ? "down" : "up"}>
            {stock.isDown ? (
              <i className="fa-solid fa-angle-down"></i>
            ) : (
              <i className="fa-solid fa-angle-up"></i>
            )}
          </span>
          <span className={stock.isDown ? "down" : "up"}>{stock.price}</span>
        </div>
      </div>
      {seeWatchListAction && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip title="Sell" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title="Chart" placement="top" arrow TransitionComponent={Grow}>
          <button className="chart">
            <i class="fa-solid fa-chart-simple"></i>
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="more">
            <i class="fa-solid fa-info"></i>
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
