"use client";

import "./index.css";

const LearnWithExpert = () => {
  const data = [
    {
      url: "/Images/youtube.png",
      text: "Learn the Basic of Investment",
    },
    {
      url: "/Images/youtube.png",
      text: "Learn the Basic of Investment",
    },
    {
      url: "/Images/youtube.png",
      text: "Learn the Basic of Investment",
    },
    {
      url: "/Images/youtube.png",
      text: "Learn the Basic of Investment",
    },
    {
      url: "/Images/youtube.png",
      text: "Learn the Basic of Investment",
    },
  ];

  const items = data.map((eachItem) => (
    <div className="video-card">
      <div className="video-img-container">
        <img src={eachItem.url} className="video-image" draggable="false" />
      </div>
      <div className="video-text-container">
        <p className="learn-with-experts-video-title">{eachItem.text}</p>
      </div>
    </div>
  ));

  const responsive = {
    0: {
      items: 4,
    },
  };

  return (
    <div className="learn-with-experts-section-bg-container">
      <div className="learn-with-experts-section-heading-container">
        <h1 className="learn-with-experts-section-heading">
          Learn with Our Expert
        </h1>
        <p className="learn-with-experts-section-description">
          The basic of investment in our products
        </p>
      </div>
      <div className="cards">{items}</div>
    </div>
  );
};

export default LearnWithExpert;
