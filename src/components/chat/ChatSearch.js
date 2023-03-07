import React from "react";

const ChatSearch = () => {
  return (
    <div className="chat-search">
      <div className="search">
        <div className="search-icon">
          <bi className="bi-search"></bi>
        </div>
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="search-filter">
        <span>All</span>
      </div>
    </div>
  );
};

export default ChatSearch;
