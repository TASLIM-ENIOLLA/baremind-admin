import {
  CameraAltRounded,
  ForumRounded,
  PhotoRounded,
  SendRounded,
} from "@mui/icons-material";
import React from "react";

const CreatePost = () => {
  return (
    <div className="create-post-container">
      <h3 className="title">Create Post</h3>
      <div className="create-post-wrapper">
        <div className="create-post-icon">
          <ForumRounded />
        </div>
        <textarea
          id=""
          placeholder="What's up, Mahlodi?"
          className="create-post-field"
        ></textarea>
      </div>
      <div className="create-post-actions">
        <div className="create-action-left">
          <span className="create-action-icon">
            <PhotoRounded />
          </span>
          <span className="create-action-icon">
            <CameraAltRounded />
          </span>
        </div>
        <button
          className="btn"
          style={{ display: "flex", alignItems: "center" }}
        >
          Publish <SendRounded style={{ marginLeft: "5px" }} />
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
