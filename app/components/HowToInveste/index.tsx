import "./index.css";

const HowToInveste = () => {
  return (
    <div className="how-to-invets-section-bg-container">
      <div className="how-to-invets-section-details-container">
        <div className="how-to-invets-section-heading-container">
          <p className="how-to-invets-section-heading">
            How to Invest with TIPO?
          </p>
          <p className="how-to-invets-section-description">
            The ideal platform for those looking to diversify their investments.
          </p>
        </div>
        <div className="how-to-invets-section-investment-step-container">
          <div className="how-to-invets-section-investment-step">
            <img
              src="/Images/search.png"
              alt="search"
              className="how-to-invets-section-investment-icon"
            />
            <span className="how-to-invets-section-investment-step-description">
              Do your research on instrument you want to invest.{" "}
              <span className="how-to-invets-section-investment-step-span">
                Read more
              </span>
            </span>
          </div>
          <div className="how-to-invets-section-investment-step">
            <img
              src="/Images/login.png"
              alt="login"
              className="how-to-invets-section-investment-icon"
            />
            <span>
              Login to TIPO with your broker account or create a new account{" "}
              <span className="how-to-invets-section-investment-step-span">
                here
              </span>
            </span>
          </div>
          <div className="how-to-invets-section-investment-step">
            <img
              src="/Images/edit.png"
              alt="edit"
              className="how-to-invets-section-investment-icon"
            />
            <span>
              Choose your open instrument application and customize it
            </span>
          </div>
          <div className="how-to-invets-section-investment-step">
            <img
              src="/Images/task.png"
              alt="tsak"
              className="how-to-invets-section-investment-icon"
            />
            <span>
              Proceed to final step with your application for preview and
              payment
            </span>
          </div>
        </div>
      </div>
      <div className="how-to-invets-section-youtube-img"></div>
    </div>
  );
};

export default HowToInveste;
