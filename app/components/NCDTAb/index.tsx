import "./index.css";

const NCDdata = [
  {
    ncdNumber: "INE000000XXXXX",
    logo: "/Images/Edelweiss.png",
    companyName: "Edelweiss Financial Services Ltd",
    openPrice: 40,
    closePrice: 125,
    prevPrice: 90,
    lastPrice: 125,
    volume: 200,
    value: 1.5,
    maturityDate: "31 March, 2030",
  },
  {
    ncdNumber: "INE000000XXXXX",
    logo: "/Images/Indiabulls.png",
    companyName: "Indiabulls Housoing Finance Ltd",
    openPrice: 40,
    closePrice: 125,
    prevPrice: 90,
    lastPrice: 125,
    volume: 200,
    value: 1.5,
    maturityDate: "31 March, 2030",
  },
  {
    ncdNumber: "INE000000XXXXX",
    logo: "/Images/Muthoot.png",
    companyName: "Muthoot Finance Ltd",
    openPrice: 40,
    closePrice: 125,
    prevPrice: 90,
    lastPrice: 125,
    volume: 200,
    value: 1.5,
    maturityDate: "31 March, 2030",
  },
];

const NCDTab = () => {
  return (
    <>
      <div className="tab-section-title-container">
        <span className="tab-section-tab-title">NCDs with Highest Returns</span>
        <span className="tab-section-tab-caption">
          Get a fixed rate of returns with these highest performing bonds
        </span>
      </div>
      <div className="tab-section-ipo-cards-container">
        {NCDdata.map((eachNCD) => (
          <div className="tab-section-NCD-card">
            <div className="tab-section-NCD-card-details-bg-container">
              <span className="tab-section-NCD-card-text">
                N6 &nbsp; &nbsp; &nbsp;
                {eachNCD.ncdNumber}
              </span>
              <div className="tab-section-NCD-card-logo-container">
                <img src={eachNCD.logo} className="tab-section-ipo-card-img" />
                <span className="tab-section-ipo-card-ipo-comapny-name">
                  {eachNCD.companyName}
                  <br />
                  <span className="tab-section-NCD-card-text">
                    Issue Description
                  </span>
                </span>
              </div>
              <div className="tab-section-NCD-card-price-container">
                <p className="tab-section-ipo-card-price-caption tab-section-NCD-card-price">
                  open Price <br />
                  <span className="tab-section-ipo-card-price">
                    {eachNCD.openPrice}
                  </span>
                </p>
                <p className="tab-section-ipo-card-price-caption tab-section-NCD-card-price">
                  close Price <br />
                  <span className="tab-section-ipo-card-price">
                    {eachNCD.closePrice}
                  </span>
                </p>
              </div>
              <div className="tab-section-NCD-card-price-container">
                <span className="tab-section-ipo-card-price-caption tab-section-NCD-card-price">
                  Prev Price <br />
                  <span className="tab-section-ipo-card-price">
                    {eachNCD.prevPrice}
                  </span>
                </span>
                <div className="tab-section-Ncd-card-prices-container ">
                  <span>
                    <span className="tab-section-ipo-card-price-caption">
                      Last Price{" "}
                    </span>
                    <img src="/Images/arrow_drop_up.png" className="tab-img" />
                  </span>
                  <span className="tab-section-ipo-card-price">
                    {eachNCD.lastPrice}
                  </span>
                  <span className="tab-section-ipo-card-price-caption tab-section-ipo-card-gain-price ">
                    + ₹10 (+10%)
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span className="tab-section-NCD-card-text">
                Maturity Date: &nbsp;
                <span className="tab-section-NCD-card-text-bold">
                  {eachNCD.maturityDate}
                </span>
              </span>
              <div>
                <span className="tab-section-NCD-card-text">
                  Volume (Shares):&nbsp;
                  <span className="tab-section-NCD-card-text-bold">
                    {eachNCD.volume}
                  </span>
                </span>
                <span className="tab-section-NCD-card-text">
                  &nbsp; &nbsp; Value (Lakh):{" "}
                  <span className="tab-section-NCD-card-text-bold">
                    {eachNCD.value}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="tab-section-buttons-bg-container">
        <button>Invest Now</button>
        <button className="tab-section-ipo-card-small-btn">See All NCDs</button>
      </div>
    </>
  );
};

export default NCDTab;
