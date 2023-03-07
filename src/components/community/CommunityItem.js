import React from "react";
import {
  Comment,
  FavoriteBorder,
  MoreHorizRounded,
  Share,
} from "@mui/icons-material";

const CommunityItem = () => {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-item">
          <img src="image/user.png" alt="" className="post-user-img" />
          <div className="post-user-details">
            <div className="post-user-name">Mahlodi Letsie</div>
            <span className="post-time">5 mins ago. Public</span>
          </div>
        </div>
        <div className="post-head-icon">
          <MoreHorizRounded />
        </div>
      </div>
      <div className="post-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad
          numquam laboriosam deleniti esse dolore ipsam doloribus, suscipit odit
          minus optio dolores officia debitis recusandae odio error excepturi
          reiciendis ducimus modi, expedita natus, fuga impedit fugit accusamus!
          Aliquid fugit laborum vitae reiciendis repellat quam porro minus
          temporibus, quas alias nisi.
        </p>
      </div>
      <div className="post-footer">
        <div className="post-footer-icon">
          <FavoriteBorder />
          <span>129 Likes</span>
        </div>
        <div className="post-footer-icon">
          <Comment />
          <span>20 Comments</span>
        </div>
        <div className="post-footer-icon">
          <Share />
          <span>34 Shares</span>
        </div>
      </div>
    </div>
  );
};

export default CommunityItem;
