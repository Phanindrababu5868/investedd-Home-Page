import "./index.css";

const keyFeaturesList = [
  [
    {
      id: 1,
      imageUrl: "",
      title: "Broker of Your Choice",
      text: "Experience seamless investment with your broker. TIPO is tied-up with +13 brokers so you can invest in a few clicks.",
    },
    {
      id: 2,
      imageUrl: "",
      title: "Broker of Your Choice",
      text: "Experience seamless investment with your broker. TIPO is tied-up with +13 brokers so you can invest in a few clicks.",
    },
  ],
  [
    {
      id: 3,
      imageUrl: "",
      title: "Broker of Your Choice",
      text: "Experience seamless investment with your broker. TIPO is tied-up with +13 brokers so you can invest in a few clicks.",
    },
    {
      id: 4,
      imageUrl: "",
      title: "Broker of Your Choice",
      text: "Experience seamless investment with your broker. TIPO is tied-up with +13 brokers so you can invest in a few clicks.",
    },
  ],
  [
    {
      id: 5,
      imageUrl: "",
      title: "Broker of Your Choice",
      text: "Experience seamless investment with your broker. TIPO is tied-up with +13 brokers so you can invest in a few clicks.",
    },
  ],
];

const KeyFeatures = () => {
  return (
    <div className="Key-Features-section-bg-container">
      <div className="Key-Feature-row">
        <div className="Single-Key-Feature-conatiner">
          <div className="Single-Key-Feature-img-container">
            <img
              src="/images/handshake.jpg"
              alt="key-feature-1"
              className="Single-Key-Feature-image"
            />
          </div>
          <div className="Single-Key-Feature-details-container">
            <p className="Single-Key-Feature-title">Broker of Your Choice</p>
            <p className="Single-Key-Feature-description">
              Experience seamless investment with your broker. TIPO is tied-up
              with +13 brokers so you can invest in a few clicks.
            </p>
          </div>
        </div>
        <div className="Single-Key-Feature-conatiner">
          <div className="Single-Key-Feature-img-container">
            <img
              src="/images/choice.png"
              alt="key-feature-2"
              className="Single-Key-Feature-image"
            />
          </div>
          <div className="Single-Key-Feature-details-container">
            <p className="Single-Key-Feature-title">Choices for Everyone</p>
            <p className="Single-Key-Feature-description">
              Whether you’re a risk-taker or believe in safe investment. TIPO
              has the currated investment opportunities for you.
            </p>
          </div>
        </div>
      </div>

      <div className="Key-Feature-row">
        <div className="Single-Key-Feature-conatiner">
          <div className="Single-Key-Feature-img-container">
            <img
              src="/images/smartphone.png"
              alt="key-feature-2"
              className="Single-Key-Feature-image"
            />
          </div>
          <div className="Single-Key-Feature-details-container">
            <p className="Single-Key-Feature-title">Simple Yet Impactful</p>
            <p className="Single-Key-Feature-description">
              TIPO suite is a collection of cutting-edge investment solutions
              built on clear concepts for your understanding.
            </p>
          </div>
        </div>
        <div className="Single-Key-Feature-conatiner">
          <div className="Single-Key-Feature-img-container">
            <img
              src="/images/exchange.jpg"
              alt="key-feature-1"
              className="Single-Key-Feature-image"
            />
          </div>
          <div className="Single-Key-Feature-details-container">
            <p className="Single-Key-Feature-title">Rapid Transaction</p>
            <p className="Single-Key-Feature-description">
              TIPO do not put any limit on the number of banks you can use for
              investment via UPI and traditional wire-transfer.
            </p>
          </div>
        </div>
      </div>

      <div className="Key-Feature-row">
        <div className="Single-Key-Feature-conatiner">
          <img
            src="/images/Clipart.jpg"
            alt=""
            className="Single-Key-Feature-img-container"
          />
          <div className="Single-Key-Feature-details-container">
            <p className="Single-Key-Feature-title">
              Earn Rewards, Merch and more
            </p>
            <p className="Single-Key-Feature-description">
              Earn rewards coins whenever you complete challenges and spend to
              avail discounts and buy exclusive products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
