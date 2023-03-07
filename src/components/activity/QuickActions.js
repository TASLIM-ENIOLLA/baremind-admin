import { MoreHorizRounded, WorkspacesRounded } from "@mui/icons-material";
import React from "react";

const QuickActions = () => {
  return (
    <div className="quick-action-container">
      <div className="quick-action-item">
        <div className="quick-action-icon">
          <MoreHorizRounded />
        </div>
        <div className="quick-action-text">
          <p>Interview with Dr Mary Jone</p>
          <span className="text-action">12 people watching</span>
        </div>
      </div>
      <div className="quick-action-item">
        <div className="quick-action-icon">
          <WorkspacesRounded />
        </div>
        <div className="quick-action-text">
          <p>Interview with Dr Mary Jone</p>
          <span className="text-action">12 people watching</span>
        </div>
      </div>
      <div className="quick-action-item">
        <div className="quick-action-icon">
          <WorkspacesRounded />
        </div>
        <div className="quick-action-text">
          <p>Interview with Dr Mary Jone</p>
          <span className="text-action">12 people watching</span>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
