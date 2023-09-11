"use client";

import { useState } from "react";

import "./index.css";

const sgbData = [
  {
    bondName: "SGBJUN29",
    currentPrice: "5,020.45",
    futurePrice: "7,200.00",
    stockBroker: "BSE",
    bondCloseDate: "56 days 21 hours 36 minutes",
  },
  {
    bondName: "SGBAUG27",
    currentPrice: "4,900.00",
    futurePrice: "6,840.00",
    stockBroker: "NSE",
    bondCloseDate: "56 days 21 hours 36 minutes",
  },
  {
    bondName: "SGBJAN26",
    currentPrice: "4,995.80",
    futurePrice: "6,200.00",
    stockBroker: "BSE",
    bondCloseDate: "56 days 21 hours 36 minutes",
  },
  {
    bondName: "SGBAUG25",
    currentPrice: "4,700.00",
    futurePrice: "6,640.00",
    stockBroker: "NSE",
    bondCloseDate: "56 days 21 hours 36 minutes",
  },
];
const NewSGB = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);

  const visibleItems = sgbData.slice(startIndex, endIndex);

  const handleNextClick = () => {
    if (startIndex >= 0) {
      setStartIndex((prev) => prev + 1);
    }
    if (endIndex < sgbData.length) {
      setEndIndex((prev) => prev + 1);
    }
  };

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
    if (endIndex > 3) {
      setEndIndex((prev) => prev - 1);
    }
  };

  const SvgCard = visibleItems.map((eachBond) => (
    <div className="New-SGB-section-crad">
      <div className="New-SGB-section-crad-title-container">
        <img
          src="/Images/goldbar.png"
          alt="gold bar"
          className="New-SGB-section-crad-img"
        />
        <p className="New-SGB-section-crad-img-title">
          {eachBond.bondName}
          <br />{" "}
          <span className="New-SGB-section-crad-text">
            {eachBond.stockBroker}
          </span>
        </p>
      </div>
      <div className="New-SGB-section-crad-prices-bg-container">
        <div className="New-SGB-section-crad-price-container">
          <span className="New-SGB-section-crad-text-bold New-SGB-section-crad-text">
            invest now
          </span>
          <span className="New-SGB-section-crad-price">
            {eachBond.currentPrice}
          </span>
          <span className="New-SGB-section-crad-text">per gram</span>
        </div>
        <div className="New-SGB-section-crad-price-container">
          <span className="New-SGB-section-crad-text New-SGB-section-crad-text-bold">
            8 year later
          </span>
          <span className="New-SGB-section-crad-price">
            {eachBond.futurePrice}
          </span>
          <span className="New-SGB-section-crad-text">per gram</span>
        </div>
      </div>
      <div className="New-SGB-section-crad-clodedare-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <mask
            id="mask0_2536_3627"
            className="svg-style"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="20"
          >
            <rect width="20" height="20" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_2536_3627)">
            <path
              d="M7.5 3V1.5H12.5V3H7.5ZM9.25 12H10.75V7H9.25V12ZM10 18C9.028 18 8.11833 17.816 7.271 17.448C6.42367 17.08 5.684 16.58 5.052 15.948C4.42 15.316 3.92 14.5763 3.552 13.729C3.184 12.8817 3 11.972 3 11C3 10.028 3.184 9.11833 3.552 8.271C3.92 7.42367 4.42 6.684 5.052 6.052C5.684 5.42 6.42367 4.92 7.271 4.552C8.11833 4.184 9.028 4 10 4C10.8053 4 11.5797 4.13533 12.323 4.406C13.0663 4.67667 13.7573 5.05533 14.396 5.542L15.479 4.479L16.521 5.521L15.458 6.604C15.9447 7.22933 16.3233 7.917 16.594 8.667C16.8647 9.417 17 10.1947 17 11C17 11.972 16.816 12.8817 16.448 13.729C16.08 14.5763 15.58 15.316 14.948 15.948C14.316 16.58 13.5763 17.08 12.729 17.448C11.8817 17.816 10.972 18 10 18ZM10 16.5C11.528 16.5 12.8267 15.9653 13.896 14.896C14.9653 13.8267 15.5 12.528 15.5 11C15.5 9.472 14.9653 8.17333 13.896 7.104C12.8267 6.03467 11.528 5.5 10 5.5C8.472 5.5 7.17333 6.03467 6.104 7.104C5.03467 8.17333 4.5 9.472 4.5 11C4.5 12.528 5.03467 13.8267 6.104 14.896C7.17333 15.9653 8.472 16.5 10 16.5Z"
              fill="#52757F"
            />
          </g>
        </svg>
        <p className="New-SGB-section-crad-text">
          {" "}
          &nbsp; {eachBond.bondCloseDate}
        </p>
      </div>
    </div>
  ));
  return (
    <div className="New-SGB-section-bg-conatiner">
      <div className="New-SGB-section-heading-conatiner">
        <h2 className="New-SGB-section-heading">Demanding Gold Bold</h2>
        <p className="New-SGB-section-caption">
          Ideal interface to invest in Sovereign Gold Bond Scheme
        </p>
      </div>
      <div className="New-SGB-section-deck">{SvgCard}</div>
      <div className="inspect-bg-container">
        <div className="inspect-text-container">
          <span className="inspect-text">See all SGBs</span>
          <img src="/Images/arrow_outward.jpg" className="inspect-arrow-img" />
        </div>
        <div className="slide-btns-container">
          <button
            className="slide-btn"
            onClick={handlePrevClick}
            disabled={startIndex <= 0}
          >
            <img src="/Images/leftArrow.png" className="slide-arrow-img" />
          </button>
          <button
            className="slide-btn"
            onClick={handleNextClick}
            disabled={endIndex === sgbData.length}
          >
            <img src="/Images/RightArrow.png" className="slide-arrow-img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewSGB;
