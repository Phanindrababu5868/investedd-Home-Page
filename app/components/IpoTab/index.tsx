import "./index.css";

const ipoList = [
  {
    imageUrl: "/Images/anybody.png",
    companyTitle: "Anybody Can Invest Limited",
    currentPrice: "₹32,500.50",
    futurePrice: "₹22,000.25",
    investementAmount: "₹10000",
    investementDate: "30th Mar, 2017",
  },
  {
    imageUrl: "/Images/DCX.png",
    companyTitle: "DCX System Ltd - IPO",
    currentPrice: "₹32,500.50",
    futurePrice: "₹22,000.25",
    investementAmount: "₹10000",
    investementDate: "30th Mar, 2017",
  },
  {
    imageUrl: "/Images/DCX.png",
    companyTitle: "DCX System Ltd - IPO",
    currentPrice: "₹32,500.50",
    futurePrice: "₹22,000.25",
    investementAmount: "₹10000",
    investementDate: "30th Mar, 2017",
  },
];

const IpoTab = () => {
  return (
    <>
      <div className="tab-section-title-container">
        <span className="tab-section-tab-title">IPOs with Best Returns</span>
        <span className="tab-section-tab-caption">
          If you had invested in these IPOs...
        </span>
      </div>
      <div className="tab-section-ipo-cards-container">
        {ipoList.map((eachIpo) => (
          <div className="tab-section-ipo-card">
            <div className="tab-section-ipo-card-title-container">
              <img
                src={eachIpo.imageUrl}
                alt={eachIpo.companyTitle}
                className="tab-section-ipo-card-img"
              />
              <span className="tab-section-ipo-card-ipo-comapny-name">
                {eachIpo.companyTitle}
              </span>
            </div>
            <div className="tab-section-ipo-card-price-container">
              <span className="tab-section-ipo-card-price-caption">
                Today’s Value
              </span>
              <span className="tab-section-ipo-card-price">
                {eachIpo.currentPrice}
              </span>
            </div>
            <div className="tab-section-ipo-card-price-container">
              <span className="tab-section-ipo-card-price-caption">Gain</span>
              <span className="tab-section-ipo-card-price tab-section-ipo-card-gain-price">
                {eachIpo.futurePrice}
              </span>
              <span className="tab-section-ipo-card-price-caption">250%</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="352"
              height="82"
              viewBox="0 0 352 82"
              fill="none"
              className="tab-section-ipo-card-graph-stroke"
            >
              <path
                d="M-19 70.6108L-15.75 74.0597C-12.5 77.5087 -6 84.4065 0.500001 79.0022C7 73.5978 13.5 55.8913 20 44.7612C26.5 33.6311 33 29.0774 39.5 30.7805C46 32.4835 52.5 40.4434 59 48.9492C65.5 57.4551 72 66.507 78.5 73.1709C85 79.8349 91.5 84.1109 98 77.0044C104.5 69.8979 111 51.4089 117.5 48.1836C124 44.9584 130.5 56.997 137 55.5687C143.5 54.1405 150 39.2454 156.5 38.3395C163 37.4337 169.5 50.5169 176 51.3478C182.5 52.1787 189 40.7572 195.5 38.1828C202 35.6083 208.5 41.881 215 49.7412C221.5 57.6013 228 67.0491 234.5 60.6212C241 54.1934 247.5 31.8899 254 17.6935C260.5 3.49708 267 -2.59233 273.5 3.14218C280 8.87668 286.5 26.4351 293 33.286C299.5 40.137 306 36.2804 312.5 41.1794C319 46.0784 325.5 59.733 332 57.8503C338.5 55.9676 345 38.5476 351.5 35.1605C358 31.7734 364.5 42.4192 367.75 47.7421L371 53.065"
                stroke="#0EBCEC"
                stroke-width="1.5"
              />
            </svg>
            <span className="tab-section-ipo-card-investement-text">
              Investment &nbsp; {eachIpo.investementAmount} &nbsp;{" "}
              {eachIpo.investementDate}
            </span>
          </div>
        ))}
      </div>
      <div className="tab-section-buttons-bg-container">
        <button>Invest Now</button>
        <button className="tab-section-ipo-card-small-btn">See All IPOs</button>
      </div>
    </>
  );
};

export default IpoTab;
