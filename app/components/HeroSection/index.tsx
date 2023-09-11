import "./index.css";

const HeroSection = () => {
  return (
    <div className="Hero-section-bg-container">
      <div className="Hero-section-details-bg-container">
        <h1>
          Simplify Investment <br /> withTIPO Suite
        </h1>
        <p>Invest in your favourite IPO, SGB and NCD in just few clicks!</p>
        <div className="">
          <button className="">Start Investing</button>
          <div className="Hero-section-images-bg-container">
            <div className="zerodha-img"></div>
            <div className="HDFC-img"></div>
            <div className="Kotak-img"></div>
            <div className="Axis-img"></div>
            <div className="Sbi-img"></div>
            <span>+10 Brokers</span>
          </div>
        </div>
      </div>

      <div className="Hero-section-Featured-Products">
        <div className="Hero-section-Featured-Products-card-container">
          <div className="Spacer"></div>
          <div className="Spacer"></div>
          <div className="Hero-section-Featured-Products-card IPO-card">
            <img src="Images/insights.jpg" alt="insights" />
            <h2>IPO</h2>
            <h6>
              <span className="Hero-section-Featured-Products-card-persantage IPO-text">
                30%
              </span>
              <b className="Hero-section-Featured-Products-card-bold">CAGR</b>
              <br />
              ABC Public Limited
            </h6>
          </div>
        </div>

        <div className="Hero-section-Featured-Products-card-container">
          <div className="Spacer"></div>
          <div className="Hero-section-Featured-Products-card NCD-card">
            <img src="Images/database.jpg" alt="database" />
            <h2>NCD</h2>
            <h6>
              <span className="Hero-section-Featured-Products-card-persantage NCD-text">
                16.32%
              </span>
              <b className="Hero-section-Featured-Products-card-bold">CAGR</b>
              <br />
              ABC Public Limited NCD
            </h6>
          </div>
          <div className="Spacer"></div>
        </div>

        <div className="Hero-section-Featured-Products-card-container">
          <div className="Hero-section-Featured-Products-card SGB-card">
            <img src="Images/auto_awesome.jpg" alt="auto-awesome" />
            <h2>SGB</h2>
            <h6>
              <span className="Hero-section-Featured-Products-card-persantage SGB-text">
                1.03%
              </span>{" "}
              <b className="Hero-section-Featured-Products-card-bold">CAGR</b>
              <br />
              ₹4900.25 (+₹50)
            </h6>
          </div>
          <div className="Spacer"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
