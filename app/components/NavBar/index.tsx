// components/Navbar.tsx

"use client";
import { useState } from "react";

import "./index.css";
// components/Button.tsx
import React from "react";

interface NavProps {
  onClickHandler: () => void;
}

const Navbar: React.FC<NavProps> = ({ onClickHandler }) => {
  const [isDropdownOpenLearMore, setIsDropdownOpenLearMore] = useState(false);
  const [isDropdownOpensupport, setIsDropdownOpenSupport] = useState(false);

  const toggleDropdownLearMore = () => {
    if (isDropdownOpensupport === true) {
      setIsDropdownOpenSupport(false);
    }
    setIsDropdownOpenLearMore(!isDropdownOpenLearMore);
  };

  const toggleDropdownSupport = () => {
    if (isDropdownOpenLearMore === true) {
      setIsDropdownOpenLearMore(false);
    }
    setIsDropdownOpenSupport(!isDropdownOpensupport);
  };

  return (
    <>
      <nav className="Home-page-Navbar">
        <p className="Home-page-Navbar-app-name">
          <span className="">i</span>nvestedd
        </p>
        <div>
          <div className="Home-page-Navbar-navlinkes">
            <div className="nav-bar-drop-down-container">
              <div className="Home-page-Navbar-drop-down-title">
                <span
                  className="Home-page-Navbar-navlink"
                  onClick={toggleDropdownLearMore}
                >
                  Learn More{" "}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  onClick={toggleDropdownLearMore}
                >
                  <mask
                    id="mask0_4860_8495"
                    style={{ "mask-type": "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_4860_8495)">
                    <path
                      d="M12 15.3751L6 9.3751L7.4 7.9751L12 12.5751L16.6 7.9751L18 9.3751L12 15.3751Z"
                      fill="#075E76"
                    />
                  </g>
                </svg>
              </div>

              <ul
                className={`nav-bar-drop-down-menu ${
                  isDropdownOpenLearMore ? "open" : ""
                }`}
              >
                <li className="nav-bar-drop-down-menu-text">About us</li>
                <li className="nav-bar-drop-down-menu-text">
                  Partners & Brokers
                </li>
                <li className="nav-bar-drop-down-menu-text">
                  Initial Public Offering
                </li>
                <li className="nav-bar-drop-down-menu-text">
                  Non-convertible Debenture
                </li>
                <li className="nav-bar-drop-down-menu-text">
                  Sovereign Gold Bond
                </li>
                <li className="nav-bar-drop-down-menu-text">Blog & News</li>
              </ul>
            </div>
            <div className="nav-bar-drop-down-container">
              <div className="Home-page-Navbar-drop-down-title">
                <span
                  className="Home-page-Navbar-navlink"
                  onClick={toggleDropdownSupport}
                >
                  Help & Support{" "}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  onClick={toggleDropdownSupport}
                >
                  <mask
                    id="mask0_4860_8495"
                    style={{ "mask-type": "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_4860_8495)">
                    <path
                      d="M12 15.3751L6 9.3751L7.4 7.9751L12 12.5751L16.6 7.9751L18 9.3751L12 15.3751Z"
                      fill="#075E76"
                    />
                  </g>
                </svg>
              </div>
              <ul
                className={`nav-bar-drop-down-menu ${
                  isDropdownOpensupport ? "open" : ""
                }`}
              >
                <li className="nav-bar-drop-down-menu-text">Contact Us</li>
                <li className="nav-bar-drop-down-menu-text">Chat & Support</li>
                <li className="nav-bar-drop-down-menu-text">
                  Terms & Conditions
                </li>
              </ul>
            </div>

            <button
              className="Home-page-Navbar-login-btn"
              onClick={() => onClickHandler()}
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
