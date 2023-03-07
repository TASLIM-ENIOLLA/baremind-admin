import { CallRounded, Videocam } from "@mui/icons-material";
import React from "react";
import { MoreHorizRounded } from "@mui/icons-material";

const ConversationHead = () => {
  return (
    <div class="conversation-header">
      <div class="conversation-head-left">
        <div class="header-profile-cont">
          <img src="image/user.png" class="chat-img" alt="" />
          <div class="chat-status"></div>
        </div>
        <div class="header-profile">
          <span class="name">Mahlodi Letsie</span>
          <span class="status">Active</span>
        </div>
      </div>
      <div class="conversation-head-right">
        <div class="header-action-icon">
          <Videocam />
        </div>
        <div class="header-action-icon">
          <CallRounded />
        </div>
        <div class="header-action-icon">
          <MoreHorizRounded />
        </div>
      </div>
    </div>
  );
};

export default ConversationHead;
