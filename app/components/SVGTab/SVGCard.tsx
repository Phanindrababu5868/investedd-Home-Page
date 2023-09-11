import "./index.css";

const SVGData = {
  openPrice: 4990.5,
  closePrice: 4942.5,
  todaysHighest: 4990.5,
  todaysLowest: 4942.5,
  oneYearHighest: 4990.5,
  oneYearLowest: 4942.5,
  buyOrderQty: 76.37,
};

const SVGCard = () => {
  return (
    <div className="SGB-Tab-card">
      <div className="SGB-Tab-card-title-container">
        <span className="tab-section-tab-caption-bold">Performance</span>
        <img
          src="/Images/info.png"
          className="tab-section-SGB-tab-card-info-img"
        />
      </div>
      <div className="SGB-Tab-card-prices-bg-container">
        <div className="SGB-Tab-card-prices-row">
          <div className="SGB-Tab-card-price-container">
            <span className="tab-section-ipo-card-price-caption">
              Open Price
            </span>
            <span className="SGB-Tab-card-price">₹{SVGData.openPrice}</span>
          </div>
          <div className="SGB-Tab-card-price-container">
            <span className="tab-section-ipo-card-price-caption">
              Close Price
            </span>
            <span className="SGB-Tab-card-price">₹{SVGData.closePrice}</span>
          </div>
        </div>
        <div className="SGB-Tab-card-prices-row">
          <div className="SGB-Tab-card-price-container">
            <span className="tab-section-ipo-card-price-caption">
              Today Highest
            </span>
            <span className="SGB-Tab-card-price">₹{SVGData.todaysHighest}</span>
          </div>
          <div className="SGB-Tab-card-price-container">
            <span className="tab-section-ipo-card-price-caption">
              Today Lowest
            </span>
            <span className="SGB-Tab-card-price">₹{SVGData.todaysLowest}</span>
          </div>
        </div>
        <div className="SGB-Tab-card-prices-row">
          <div className="SGB-Tab-card-price-container">
            <span className="tab-section-ipo-card-price-caption">
              52W Highest
            </span>
            <span className="SGB-Tab-card-price">
              ₹{SVGData.oneYearHighest}
            </span>
          </div>
          <div className="SGB-Tab-card-price-container">
            <span className="tab-section-ipo-card-price-caption">
              52W Lowest
            </span>
            <span className="SGB-Tab-card-price">₹{SVGData.oneYearLowest}</span>
          </div>
        </div>
        <div className="SGB-Tab-card-prices-row">
          <div className="SGB-Tab-card-price-container">
            <span className="tab-section-ipo-card-price-caption">
              Buy Order Qty.
            </span>
            <span className="SGB-Tab-card-price">{SVGData.buyOrderQty}</span>
          </div>
          <div className="SGB-Tab-card-price-container">
            <span className="tab-section-ipo-card-price-caption">
              Sell Order Qty
            </span>
            <span className="SGB-Tab-card-price">
              {Math.ceil(100 - SVGData.buyOrderQty)}
            </span>
          </div>
        </div>
      </div>
      <div>
        <span className="tab-section-NCD-card-text">
          Volume (Shares):&nbsp;
          <span className="tab-section-NCD-card-text-bold">200</span>
        </span>
        <span className="tab-section-NCD-card-text">
          &nbsp; &nbsp; Value (Lakh):{" "}
          <span className="tab-section-NCD-card-text-bold">1.5</span>
        </span>
      </div>
    </div>
  );
};

export default SVGCard;
