import "./index.css";

const OurStory = () => {
  return (
    <div className="our-story-section-bg-container">
      <h2 className="our-story-section-heading">Our Story</h2>
      <p className="our-story-section-description">
        You should know that Tipo has been designed to change the landscape of
        online investment. This online integration framework is built keeping in
        mind the modern investors for easy and convenient share trading.
        Furthermore, to serve you in achieving your financial objectives, Tipo
        provides investment products and services like IPO, SBG and NCD.{" "}
      </p>

      <div className="our-story-section-read-more-container">
        <span className="our-story-section-read-more-text">Read More</span>
        <img
          src="/Images/arrow_outward.jpg"
          className="our-story-section-arrow-img"
        />
      </div>
    </div>
  );
};

export default OurStory;
