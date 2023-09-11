import "./index.css";

const MoreThanJust = () => {
  return (
    <div className="more-than-just-bg-container">
      <h2 className="more-than-just-heading">More than Just Investment</h2>
      <div className="more-than-just-content-row">
        <div className="more-than-just-content-card">
          <img
            src="/Images/file.jpg"
            className="more-than-just-content-card-img"
          />
          <span className="more-than-just-content-card-title">
            Complete Challenges
          </span>
        </div>
        <div className="more-than-just-content-card">
          <img
            src="/Images/wallete.png"
            className="more-than-just-content-card-img"
          />
          <span className="more-than-just-content-card-title">
            Get Reward Coins
          </span>
        </div>
        <div className="more-than-just-content-card">
          <img
            src="/Images/Refer.png"
            className="more-than-just-content-card-img"
          />
          <span className="more-than-just-content-card-title">
            Refer & Earn
          </span>
        </div>
      </div>
      <div className="more-than-just-content-row">
        <div className="more-than-just-content-card">
          <img
            src="/Images/levelup.png"
            className="more-than-just-content-card-img"
          />
          <span className="more-than-just-content-card-title">Level Up</span>
        </div>
        <div className="more-than-just-content-card">
          <img
            src="/Images/redeem.png"
            className="more-than-just-content-card-img"
          />
          <span className="more-than-just-content-card-title">
            Redeem Exclusive Item
          </span>
        </div>
        <div className="more-than-just-content-card">
          <img
            src="/Images/Engage.png"
            className="more-than-just-content-card-img"
          />
          <span className="more-than-just-content-card-title">
            Redeem Exclusive Item
          </span>
        </div>
      </div>
      <p className="more-than-just-content-text">
        Complete challenges, maintain healthy portfolio, gain leaderboard
        position, earn badges and more rewards
      </p>
      <div className="empy-box"></div>
    </div>
  );
};

export default MoreThanJust;
