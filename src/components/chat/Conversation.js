import { AttachFile, InsertEmoticon, SendRounded } from "@mui/icons-material";
import React from "react";

const Conversation = () => {
  return (
    <div className="conversation-chat-mssg">
      <div className="conversation-history scroll-bar">
        <div className="conversation-item">
          <img src="image/user4.jpeg" className="conversation-img" alt="" />
          <div className="conversation-dtls">
            <p className="conversation-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, ducimus recusandae. Odit debitis delectus deserunt
              dolore! Unde temporibus enim nisi cupiditate quam autem. Ratione
              voluptatem odio et, tempora modi quae.
            </p>
            <span className="date">3:99am</span>
          </div>
        </div>
        <div className="conversation-item is-mine">
          <img src="image/user.png" className="conversation-img" alt="" />
          <div className="conversation-dtls">
            <p className="conversation-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, ducimus recusandae. Odit debitis delectus deserunt
              dolore! Unde temporibus enim nisi cupiditate quam autem. Ratione
              voluptatem odio et, tempora modi quae.
            </p>
            <span className="date">3:99am</span>
          </div>
        </div>
        <div className="conversation-item is-mine">
          <img src="image/user2.jpeg" className="conversation-img" alt="" />
          <div className="conversation-dtls">
            <p className="conversation-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, ducimus recusandae. Odit debitis delectus deserunt
              dolore! Unde temporibus enim nisi cupiditate quam autem. Ratione
              voluptatem odio et, tempora modi quae.
            </p>
            <span className="date">3:99am</span>
          </div>
        </div>
        <div className="conversation-item">
          <img src="image/user3.jpeg" className="conversation-img" alt="" />
          <div className="conversation-dtls">
            <p className="conversation-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, ducimus recusandae. Odit debitis delectus deserunt
              dolore! Unde temporibus enim nisi cupiditate quam autem. Ratione
              voluptatem odio et, tempora modi quae.
            </p>
            <span className="date">3:99am</span>
          </div>
        </div>
      </div>
      <div className="new-conversation-cont">
        <div className="new-conversation">
          <input
            type="text"
            placeholder="Message"
            className="input-conversation"
          />
          <div className="conversation-action">
            <div className="chat-action-icon">
              <InsertEmoticon />
            </div>
            <div className="chat-action-icon">
              <AttachFile />
            </div>
            <div className="chat-action-icon green">
              <SendRounded />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
