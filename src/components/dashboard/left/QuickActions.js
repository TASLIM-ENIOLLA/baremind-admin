import { ChatBubbleRounded, WorkspacesRounded } from "@mui/icons-material";
import React from "react";

const QuickActions = () => {
  return (
    <div className="quick-action-container">
      <div className="quick-action-item">
        <div className="quick-action-icon">
          <ChatBubbleRounded />
        </div>
        <div className="quick-action-text">
          <p>Would you like to talk to a professional you need ?</p>
          <span className="text-action">Talk to a consultant</span>
        </div>
      </div>
      <div className="quick-action-item">
        <div className="quick-action-icon">
          <WorkspacesRounded />
        </div>
        <div className="quick-action-text">
          <p>Would you like to talk to a professional you need ?</p>
          <span className="text-action">Talk to a consultant</span>
        </div>
      </div>
      <div className="quick-action-item">
        <div className="quick-action-icon">
          <WorkspacesRounded />
        </div>
        <div className="quick-action-text">
          <p>Would you like to talk to a professional you need ?</p>
          <span className="text-action">Talk to a consultant</span>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
