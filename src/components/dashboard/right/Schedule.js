import { MoreHorizRounded } from "@mui/icons-material";
import React from "react";

const Schedule = () => {
  return (
    <div className="schedule-container">
      <div className="schedule-item green">
        <div className="schedule-item-top">
          <span className="badge">Live</span>
          <span className="item-icon">
            <MoreHorizRounded />
          </span>
        </div>
        <div className="schedule-item-bottom">
          <div className="schedule-item-name">Training Yoga className</div>
          <div className="schedule-item-date">21 Feb</div>
        </div>
      </div>
      <div className="schedule-item yellow">
        <div className="schedule-item-top">
          <span className="badge">Live</span>
          <span className="item-icon">
            <MoreHorizRounded />
          </span>
        </div>
        <div className="schedule-item-bottom">
          <div className="schedule-item-name">Training Yoga className</div>
          <div className="schedule-item-date">21 Feb</div>
        </div>
      </div>
      <div className="schedule-item red">
        <div className="schedule-item-top">
          <span className="badge">Live</span>
          <span className="item-icon">
            <MoreHorizRounded />
          </span>
        </div>
        <div className="schedule-item-bottom">
          <div className="schedule-item-name">Training Yoga className</div>
          <div className="schedule-item-date">21 Feb</div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
