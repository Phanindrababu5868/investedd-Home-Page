"use client";

import { useState } from "react";

import "./index.css";

import SVGCard from "./SVGCard";

const priceList = [
  {
    Duration: "ALL",
    price: 4999.5,
    priceChange: 10,
    lossORGain: "Gain",
    changePersantage: 0.2,
  },
  {
    Duration: "1D",
    price: 4989.5,
    priceChange: 17,
    lossORGain: "LOSS",
    changePersantage: 0.5,
  },
  {
    Duration: "1W",
    price: 4799.5,
    priceChange: 15,
    lossORGain: "LOSS",
    changePersantage: 0.6,
  },
  {
    Duration: "1M",
    price: 4999.5,
    priceChange: 20,
    lossORGain: "Gain",
    changePersantage: 0.8,
  },
  {
    Duration: "1Y",
    price: 4999.5,
    priceChange: 20,
    lossORGain: "Gain",
    changePersantage: 0.2,
  },
  {
    Duration: "2Y",
    price: 4999.5,
    priceChange: 10,
    lossORGain: "LOSS",
    changePersantage: 0.2,
  },
  {
    Duration: "3Y",
    price: 4999.5,
    priceChange: 10,
    lossORGain: "LOSS",
    changePersantage: 0.2,
  },
];

const SVGTab = () => {
  const [currentData, setCurrentdata] = useState(priceList[0]);

  return (
    <>
      <div className="tab-section-title-container">
        <span className="tab-section-tab-title">Go Long Term with SGB</span>
        <span className="tab-section-tab-caption">
          Invest in never failing gold bold
        </span>
      </div>
      <div className="SGB-Tab-graph-and-card-container">
        <div className="SGB-Tab-graph-container">
          <div className="SGB-Tab-Graph-price-container">
            <span className="SGB-Tab-Graph-price">₹{currentData.price}</span>
            <span
              className={`SGB-Tab-Graph-price-change ${
                currentData.lossORGain === "LOSS" ? "loss" : "gain"
              }`}
            >
              {currentData.lossORGain === "LOSS" ? "-" : "+"}
              {currentData.priceChange} ({currentData.changePersantage}%)
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="772"
            height="250"
            viewBox="0 0 772 250"
            fill="none"
            className="SGB-Tab-graph"
          >
            <path
              d="M0 216.917L6.43333 227.614C12.8667 238.312 25.7333 259.708 38.6 242.945C51.4667 226.182 64.3333 171.26 77.2 136.737C90.0667 102.214 102.933 88.0896 115.8 93.3722C128.667 98.6547 141.533 123.344 154.4 149.727C167.267 176.111 180.133 204.187 193 224.858C205.867 245.528 218.733 258.791 231.6 236.748C244.467 214.705 257.333 157.357 270.2 147.353C283.067 137.349 295.933 174.69 308.8 170.26C321.667 165.829 334.533 119.628 347.4 116.819C360.267 114.009 373.133 154.59 386 157.167C398.867 159.745 411.733 124.318 424.6 116.332C437.467 108.347 450.333 127.803 463.2 152.184C476.067 176.564 488.933 205.869 501.8 185.931C514.667 165.994 527.533 96.8134 540.4 52.7794C553.267 8.74537 566.133 -10.1426 579 7.64454C591.867 25.4316 604.733 79.8938 617.6 101.144C630.467 122.394 643.333 110.432 656.2 125.627C669.067 140.823 681.933 183.176 694.8 177.336C707.667 171.497 720.533 117.464 733.4 106.958C746.267 96.4521 759.133 129.473 765.567 145.983L772 162.494"
              stroke="#0EBCEC"
              stroke-width="1.5"
            />
          </svg>
          <div className="SGB-Tab-Graph-details-container">
            <div className="SGB-Tab-Graph-details">NSE</div>
            <div className="SGB-Tab-Graph-space-container"> </div>
            {priceList.map((eachPrice) => (
              <div
                className={`SGB-Tab-Graph-duration-details-container ${
                  eachPrice.Duration === currentData.Duration
                    ? "active-duration"
                    : "non-active-duration"
                }`}
                onClick={() => {
                  setCurrentdata(eachPrice);
                  console.log(eachPrice);
                }}
              >
                {eachPrice.Duration}
              </div>
            ))}
            {/* <div className="SGB-Tab-Graph-duration-details-container">All</div>
            <div className="SGB-Tab-Graph-duration-details-container">1D</div>
            <div className="SGB-Tab-Graph-duration-details-container">1W</div>
            <div className="SGB-Tab-Graph-duration-details-container">1M</div>
            <div className="SGB-Tab-Graph-duration-details-container">1Y</div>
            <div className="SGB-Tab-Graph-duration-details-container">3Y</div>
            <div className="SGB-Tab-Graph-duration-details-container">5Y</div> */}
          </div>
        </div>
        <SVGCard />
      </div>
      <div className="tab-section-buttons-bg-container">
        <button>Invest Now</button>
        <button className="tab-section-ipo-card-small-btn">See All SGB</button>
      </div>
    </>
  );
};

export default SVGTab;
