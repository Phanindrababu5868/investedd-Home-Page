"use client";

import { useState } from "react";

import "./index.css";

const ncdData = [
  {
    logo: "/Images/Edelweiss.png",
    title: "Edelweiss Financial Services Ltd",
    price: "₹10,000",
    returns: 10.9,
    closeDate: "56 days 21 hours 36 minutes",
  },
  {
    logo: "/Images/Muthoot.png",
    title: "Muthoot Finance Ltd",
    price: "₹10,000",
    returns: 10.9,
    closeDate: "56 days 21 hours 36 minutes",
  },
  {
    logo: "/Images/Indiabulls.png",
    title: "Indiabulls Housing Finance Ltd",
    price: "₹10,000",
    returns: 10.9,
    closeDate: "56 days 21 hours 36 minutes",
  },
  {
    logo: "/Images/IIFL.png",
    title: "IIFL Home Finance Ltd",
    price: "₹10,000",
    returns: 10.9,
    closeDate: "56 days 21 hours 36 minutes",
  },
  {
    logo: "/Images/Muthoot.png",
    title: "Muthoot Finance Ltd",
    price: "₹10,000",
    returns: 10.9,
    closeDate: "56 days 21 hours 36 minutes",
  },
  {
    logo: "/Images/Indiabulls.png",
    title: "Indiabulls Housing Finance Ltd",
    price: "₹10,000",
    returns: 10.9,
    closeDate: "56 days 21 hours 36 minutes",
  },
];

const NewNCD = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);

  const visibleItems = ncdData.slice(startIndex, endIndex);

  const handleNextClick = () => {
    if (startIndex >= 0) {
      setStartIndex((prev) => prev + 1);
    }
    if (endIndex < ncdData.length) {
      setEndIndex((prev) => prev + 1);
    }
  };

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
    if (endIndex > 4) {
      setEndIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="new-NCD-section-bg-container">
      <div className="new-NCD-section-heading-container">
        <h2 className="new-NCD-section-heading">Introducing NCDs</h2>
        <p className="new-NCD-section-caption">
          Invest in the secured debenture with highest returns upto 10%.
        </p>
      </div>
      <div className="new-NCD-section-crad-deck">
        {visibleItems.map((eachNCD, index) => (
          <div className="new-NCD-section-card" key={index}>
            <div className="new-NCD-section-title-container">
              <img
                src={eachNCD.logo}
                alt={eachNCD.title}
                className="new-NCD-section-card-img"
              />
              <span className="new-NCD-section-card-title">
                {eachNCD.title}
              </span>
            </div>
            <div className="new-NCD-section-ncd-card-details-container">
              <span className="new-NCD-section-ncd-card-text">
                Min. Investment
                <br />
                <span className="new-NCD-section-ncd-card-price">
                  {eachNCD.price}
                </span>
              </span>
              <span className="new-NCD-section-ncd-card-text">
                Returns Upto <br />
                <span className="new-NCD-section-ncd-card-price">
                  {eachNCD.returns}%
                </span>
              </span>
            </div>
            <span className="new-NCD-section-ncd-card-close-date">
              Apply by &nbsp;
              {eachNCD.closeDate}
            </span>
          </div>
        ))}
      </div>
      <div className="inspect-bg-container">
        <div className="inspect-text-container">
          <span className="inspect-text">See all NCDs</span>
          <img src="/Images/arrow_outward.jpg" className="inspect-arrow-img" />
        </div>
        <div className="slide-btns-container">
          <button
            className="slide-btn"
            disabled={startIndex === 0}
            onClick={handlePrevClick}
          >
            <img src="/Images/leftArrow.png" className="slide-arrow-img" />
          </button>
          <button
            className="slide-btn"
            onClick={handleNextClick}
            disabled={endIndex >= ncdData.length}
          >
            <img src="/Images/Rightarrow.png" className="slide-arrow-img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewNCD;
