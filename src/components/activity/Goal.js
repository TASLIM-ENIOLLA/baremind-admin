import { PersonRounded } from "@mui/icons-material";
import React from "react";

const Goal = () => {
  return (
    <div className="goal-container">
      <div className="goal-item">
        <div className="goal-icon">
          <PersonRounded />
        </div>
        <div className="goal-detail">
          <span className="goal-title">Meditate 3 times daily</span>
          <div className="progress-container">
            <div className="progress-track bg-green"></div>
          </div>
        </div>
      </div>
      <div className="goal-item">
        <div className="goal-icon">
          <PersonRounded />
        </div>
        <div className="goal-detail">
          <span className="goal-title">Meditate 3 times daily</span>
          <div className="progress-container">
            <div className="progress-track bg-red"></div>
          </div>
        </div>
      </div>
      <div className="goal-item">
        <div className="goal-icon">
          <PersonRounded />
        </div>
        <div className="goal-detail">
          <span className="goal-title">Meditate 3 times daily</span>
          <div className="progress-container">
            <div className="progress-track bg-blue"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
