import React from "react";

const DashboardHead = () => {
  return (
    <div className="dashboard-head">
      <div className="dashboard-head-text">
        <span>Start your day right and your body will thank you</span>
        <a href="#liink" className="get-started">
          Get Started
        </a>
      </div>
      <div className="dashboard-image">
        <img src="image/meditation.png" alt="" />
      </div>
    </div>
  );
};

export default DashboardHead;
