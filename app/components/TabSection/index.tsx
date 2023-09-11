"use client";

import { useState } from "react";

import "./index.css";
import IpoTab from "../IpoTab";
import NCDTab from "../NCDTAb";
import SVGTab from "../SVGTab";

const tabs = [
  {
    id: 1,
    imageUrl: "/Images/insights.jpg",
    title: "Initial public offering",
  },
  {
    id: 2,
    imageUrl: "/Images/database.jpg",
    title: "non-convertible debentures",
  },
  {
    id: 3,
    imageUrl: "/Images/auto_awesome.jpg",
    title: "Sovereign Gold Bond",
  },
];

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const Tabs = tabs.map((eachATb, index) => {
    const isActive = activeTab === eachATb.id ? "activeTab" : "non-activeTab";
    return (
      <div
        className={`${isActive} tab-title-container`}
        onClick={() => setActiveTab(eachATb.id)}
      >
        <img src={eachATb.imageUrl} className="tab-img" />
        <span className="tab-title">{eachATb.title}</span>
      </div>
    );
  });

  return (
    <div className="Tab-section-container">
      <div className="tabs-section-tab-container">{Tabs}</div>
      {activeTab === 1 && <IpoTab />}
      {activeTab === 2 && <NCDTab />}
      {activeTab === 3 && <SVGTab />}
    </div>
  );
};

export default TabSection;
