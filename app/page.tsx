"use client";

import Image from "next/image";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import KeyFeatures from "./components/KeyFeatures";
import OurStory from "./components/OurStory";
import NewSGB from "./components/NewSGBSection";
import NewNCD from "./components/NewNCDSection";
import MoreThanJust from "./components/MoreThanJust";
import Footer from "./components/Footer";
import HowToInveste from "./components/HowToInveste";
import FAQ from "./components/FAQS/index";
import NewIpo from "./components/NewIPOsection";
import LearnWithExpert from "./components/LearnWithExpert";
import TabSection from "./components/TabSection";
import IpoTab from "./components/IpoTab";
import { useState } from "react";

export default function Home() {
  const [showPopUp, setShowPopUp] = useState(false);

  const hadlePopUp = () => {
    setShowPopUp(!showPopUp);
    console.log(showPopUp);
  };

  return (
    <main>
      <Navbar onClickHandler={hadlePopUp} />
      <HeroSection />
      <NewIpo />
      <KeyFeatures />
      <NewSGB />
      <OurStory />
      <NewNCD />
      <MoreThanJust />
      <TabSection />

      <HowToInveste />
      <LearnWithExpert />
      <FAQ />
      <Footer />
      <div
        className={`log-in-pop-up-container ${
          showPopUp ? "show-login-pop-up" : "log-in-popup-hide"
        }`}
      >
        <div className="log-in-pop-up-reward-container">
          <h6 className="log-in-pop-up-reward-text">
            Join now & Earn ₹100 worth of reward coins
          </h6>
        </div>
        <div className="log-in-pop-up-login-options-container">
          <div className="log-in-pop-up-login-options-title-container">
            <span className="log-in-with-broker-title">
              Login with your broker
            </span>
            <button className="log-in-pop-up-close-btn" onClick={hadlePopUp}>
              close
            </button>
          </div>
          <div>
            <div className="Broker-row">
              <div className="Broker">
                <img
                  src="/Images/Zerodha.jpg"
                  alt="Zerodha"
                  className="Broker-img"
                />
                <span className="Broker-name">Zerodha</span>
              </div>
              <div className="Broker">
                <img src="/Images/HDFC.jpg" alt="HDFC" className="" />
                <span className="Broker-name">HDFC Securities</span>
              </div>
              <div className="Broker border-right-hide">
                <img src="/Images/Kotak.jpg" alt="kotak" className="" />
                <span className="Broker-name">Kotac Securities</span>
              </div>
            </div>
            <div className="Broker-row">
              <div className="Broker">
                <img
                  src="/Images/Axis.jpg"
                  alt="Zerodha"
                  className="Broker-img"
                />
                <span className="Broker-name">Axis Securities</span>
              </div>
              <div className="Broker">
                <img src="/Images/Sbi.jpg" alt="SBI" className="Broker-img" />
                <span className="Broker-name">SBI Securities</span>
              </div>
              <div className="Broker border-right-hide">
                <img
                  src="/Images/Broker.png"
                  alt="Zerodha"
                  className="Broker-img"
                />
                <span className="Broker-name">Broker name</span>
              </div>
            </div>
            <div className="Broker-row  ">
              <div className="Broker border-bottom-hide">
                <img
                  src="/Images/Broker.png"
                  alt="Broker"
                  className="Broker-img"
                />

                <span className="Broker-name">Broker name</span>
              </div>
              <div className="Broker  border-bottom-hide">
                <img
                  src="/Images/Broker.png"
                  alt="Broker"
                  className="Broker-img"
                />
                <span className="Broker-name">Broker-img</span>
              </div>
              <div className="Broker border-right-hide border-bottom-hide">
                <span className="Broker-name ">+5 Brokers</span>
              </div>
            </div>
          </div>
          <div className="log-in-pop-up-text-container">
            <span className="log-in-pop-up-select-text">
              Select your broker account to login or{" "}
              <span className="log-in-pop-up-create-text">
                create a new one
              </span>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
