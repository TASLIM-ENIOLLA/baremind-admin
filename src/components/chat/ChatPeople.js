import React from "react";

const ChatPeople = () => {
  return (
    <div className="chat-people-list">
      <div className="chat-people-item">
        <div className="people-img-cont">
          <img src="image/user2.jpeg" alt="" className="chat-img" />
          <div className="people-status"></div>
        </div>
        <div className="chat-people-content">
          <div className="person-name">
            <p className="name">Mahlodi Letsie</p>
            <span className="date">3:40pm</span>
          </div>
          <p className="conversation-preview">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="chat-people-item">
        <div className="people-img-cont">
          <img src="image/user4.jpeg" alt="" className="chat-img" />
          <div className="people-status"></div>
        </div>
        <div className="chat-people-content">
          <div className="person-name">
            <p className="name">Mahlodi Letsie</p>
            <span className="date">3:40pm</span>
          </div>
          <p className="conversation-preview">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="chat-people-item">
        <div className="people-img-cont">
          <img src="image/user3.jpeg" alt="" className="chat-img" />
          <div className="people-status"></div>
        </div>
        <div className="chat-people-content">
          <div className="person-name">
            <p className="name">Mahlodi Letsie</p>
            <span className="date">3:40pm</span>
          </div>
          <p className="conversation-preview">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default ChatPeople;
