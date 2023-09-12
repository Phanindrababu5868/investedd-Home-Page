import "./index.css";

const Footer = () => {
  return (
    <div className="footer-section-bg-container">
      <div className="footer-section-app-details-contianer">
        <div className="footer-section-Newsletter-container">
          <img
            src="/Images/investedd.png"
            alt="Investedd"
            className="footer-section-Newsletter-img"
          />
          <span className="footer-section-Newsletter-subscribe">Subscribe</span>
          <p className="footer-section-Newsletter-caption">
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="footer-section-Newsletter-email-container">
            <input
              type="text"
              className="footer-section-Newsletter-email-input"
              placeholder="Enter your email"
            />
            <button>Subscribe</button>
          </div>
          <p className="footer-section-Newsletter-subscibe-description">
            By subscribing you agree to with our <span>Privacy Policy</span> and
            provide consent to receive updates from our company.
          </p>
        </div>

        <div className="footer-section-details-link-bg-container">
          <div className="footer-section-details-product-link-bg-container">
            <p className="footer-section-details-links-heading">Products</p>
            <div className="footer-section-details-links-conatiner">
              <div className="social-links-container">
                <span className="footer-section-details-link">
                  Initial Public Offerings
                </span>
              </div>
              <div className="social-links-container">
                <span className="footer-section-details-link">Debentures</span>
              </div>
              <div className="social-links-container">
                <span className="footer-section-details-link">Gold Bold</span>
              </div>
              <div className="social-links-container">
                <span className="footer-section-details-link">
                  Multi-vendors
                </span>
              </div>
            </div>
          </div>
          <div className="footer-section-details-product-link-bg-container">
            <p className="footer-section-details-links-heading">InvesTedd</p>
            <div className="footer-section-details-links-conatiner">
              <div className="Link-container">
                <span className="footer-section-details-link">About Us</span>
              </div>
              <div className="Link-container">
                <span className="footer-section-details-link">Blog</span>
              </div>
              <div className="Link-container">
                <span className="footer-section-details-link">
                  Media & Press
                </span>
              </div>
              <div className="Link-container">
                <span className="footer-section-details-link">Events</span>
              </div>
              <div className="Link-container">
                <span className="footer-section-details-link">
                  Help and Support
                </span>
              </div>
            </div>
          </div>
          <div className="footer-section-details-product-link-bg-container">
            <p className="footer-section-details-links-heading">Follow Us</p>
            <div className="footer-section-details-links-conatiner">
              <div className="social-links-container">
                <img
                  src="/Images/Facebook.png"
                  className="social-medial-icon"
                  alt="face book"
                />
                <span className="">Facebook</span>
              </div>
              <div className="social-links-container">
                <img
                  src="/Images/Instagram.png"
                  className="social-medial-icon"
                  alt="instagram"
                />
                <span className="">Instagram</span>
              </div>
              <div className="social-links-container">
                <img
                  src="/Images/Twitter.png"
                  className="social-medial-icon"
                  alt="twitter"
                />
                <span className="">Twitter</span>
              </div>
              <div className="social-links-container">
                <img
                  src="/Images/LinkedIn.png"
                  className="social-medial-icon"
                  alt="linked in"
                />
                <span className="">LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section-credits-container">
        <div className="line"></div>
        <div className="credits-row">
          <p className="all-rights-reserved-text">
            2021 InvesTedd. All right reserved.
          </p>
          <div className="credits-container">
            <span className="credits-text">Privacy Policy</span>
            <span className="credits-text">Terms of Service</span>
            <span className="credits-text">Cookies Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
