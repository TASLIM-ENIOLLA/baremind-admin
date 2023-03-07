import { Link } from "react-router-dom";
import React from "react";
import { Icon, SideBarList, SideBarListItem } from "../../styled/Main";
import { sideBarList } from "./../../sidebar";

const SideBarItem = () => {
  const linkStyle = {
    display: "flex",
    alignItems: "center",
  };
  return (
    <>
      <SideBarList>
        {sideBarList.map((list, i) => (
          <SideBarListItem key={i}>
            <Link style={linkStyle} to={list.path}>
              <Icon>{list.icon}</Icon>
              {list.name}
            </Link>
          </SideBarListItem>
        ))}
      </SideBarList>
    </>
  );
};

export default SideBarItem;
