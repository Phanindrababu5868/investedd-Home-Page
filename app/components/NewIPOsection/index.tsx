"use client";

import { useState } from "react";
import "./index.css";

const data = [
  {
    imageurl: "/Images/boat.png",
    companyTitle: "Boat",
    price: 1000000,
    closeDate: "3rd ~ 17th October, 2022",
  },
  {
    imageurl: "/Images/encure.png",
    companyTitle: "Emcure IPO",
    price: 1000000,
    closeDate: "3rd ~ 17th October, 2022",
  },
  {
    imageurl: "/Images/gnlogo.png",
    companyTitle: "Go First",
    price: 1000000,
    closeDate: "3rd ~ 17th October, 2022",
  },
  {
    imageurl: "/Images/encure.png",
    companyTitle: "Emcure IPO",
    price: 1000000,
    closeDate: "3rd ~ 17th October, 2022",
  },
  {
    imageurl: "/Images/boat.png",
    companyTitle: "Boat",
    price: 1000000,
    closeDate: "3rd ~ 17th October, 2022",
  },
];

const NewIpo = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);

  const visibleItems = data.slice(startIndex, endIndex);

  const handleNextClick = () => {
    if (startIndex >= 0) {
      setStartIndex((prev) => prev + 1);
    }
    if (endIndex < data.length) {
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

  const cards = visibleItems.map((eachIpo) => (
    <div className="new-ipo-card">
      <div className="new-ipo-title-container">
        <img
          src={eachIpo.imageurl}
          className="new-ipo-card-img"
          alt={eachIpo.companyTitle}
        />
        <span className="new-ipo-name">{eachIpo.companyTitle} IPO </span>
      </div>
      <div className="new-ipo-price-details-container">
        <p className="new-ipo-price">
          ₹ {eachIpo.price}
          <br />
          <span className="new-ipo-card-text">/1000 Shares</span>
        </p>
      </div>
      <span className="new-ipo-card-text">
        Apply by <span className="new-ipo-close-date">{eachIpo.closeDate}</span>
      </span>
    </div>
  ));

  return (
    <div className="New-IPO-Section-Bg-container">
      <span className="New-IPO-Section-heading">Market Launches</span>
      <p className="New-IPO-Section-description">
        Check out newly launches IPO, don’t miss the opportunity.
      </p>
      <div className="new-ipo-cards-container">
        <div className="new-ipo-card">
          <div className="new-ipo-title-container">
            <img src="/Images/piggibank.png" className="new-ipo-card-img" />
            <span className="new-ipo-name">Do first IPO investment</span>
          </div>
          <div className="new-ipo-reward-card-price-container">
            <span className="new-ipo-reward-card-text">Rewards</span>
            <div className="new-ipo-reward-card-reward-details-container">
              <img
                src="/Images/stars.png"
                alt="star"
                className="new-ipo-card-start-img"
              />
              <span className="new-ipo-price">2000 IC</span>
            </div>
          </div>
          <span className="new-ipo-card-text" style={{ "font-size": "14px" }}>
            Explore and do minimum investment of ₹20,000 in any IPO
          </span>
        </div>
        {cards}
      </div>

      <div className="inspect-bg-container">
        <div className="inspect-text-container">
          <span className="inspect-text">See All</span>
          <img src="/Images/arrow_outward.jpg" className="inspect-arrow-img" />
        </div>
        <div className="slide-btns-container">
          <button
            className="slide-btn"
            onClick={handlePrevClick}
            disabled={startIndex === 0}
          >
            <img src="/Images/leftArrow.png" className="slide-arrow-img" />
          </button>
          <button
            className="slide-btn"
            onClick={handleNextClick}
            disabled={endIndex >= data.length}
          >
            <img src="/Images/RightArrow.png" className="slide-arrow-img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewIpo;
