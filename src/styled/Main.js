import styled from "styled-components";
import { mobile, mobilelg, tablet } from "./responsive";

const Primary = {
  nav: "#5161ce",
  primary: "#4a5ac0",
  navHover: "#4a56a8",
  greenColor: "#09cf83",
};

const { nav, navHover, greenColor } = Primary;

export const Container = styled.div`
  display: flex;
  overflow: scroll;
  overflow-x: hidden;
  ${tablet({
    justifyContent: "space-between",
  })}
`;

export const SideBarContainer = styled.div`
  flex: 1;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  background: ${nav};
  ${tablet({
    overflowX: "scroll",
    display: "none",
    position: "absolute",
    width: "300px",
    boxSshadow: "0 2px 12px #312f2f",
    zIindex: 1,
  })}
`;

export const SideBarLogo = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  color: #fff;
`;

export const SideBarList = styled.ul`
  list-style: none;
`;

export const SideBarListItem = styled.li`
  font-size: 12px;
  padding: 10px 20px;
  color: #fff;
  transition: 0.3s ease-in-out;
  &:hover {
    background: ${navHover};
  }
  &:actve {
    background: ${navHover};
  }
  ${mobilelg({
    fontSize: "20px",
    padding: "20px 30px",
  })}
`;

export const SideBarLink = styled.a`
  color: inherit;
`;

export const Icon = styled.div`
  margin-right: 10px;
  display: flex;
`;
export const SideBarAds = styled.div`
  margin: 10px;
  background-color: #4e59a8;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 10px;
`;
export const AdsSpan = styled.span`
  text-align: center;
  font-size: 22px;
  font-weight: 300;
`;
export const AdsButton = styled.button`
  margin-top: 20px;
  background-color: #09cf83;
  border: none;
  color: #fff;
  padding: 10px;
  width: 100px;
  border-radius: 5px;
`;

export const MainWrapper = styled.div`
  flex: 5;
  height: 100vh;
`;

export const MainTopNav = styled.div`
  background: white;
  padding: 20px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0 5px 12px #eee;
`;
export const NavTitleWrapper = styled.div`
  width: 75%;
  ${tablet({
    width: "65%",
  })}
  ${mobilelg({ width: "unset" })}
`;
export const NavTitle = styled.h2`
  ${tablet({ display: "none" })}
`;
export const MobileToggle = styled.div`
  display:none;
  ${tablet({ display: "block" })}
`;
export const Nav = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${tablet({
    width: "35%",
  })}
  ${mobilelg({ width: "unset" })}
`;

export const NavProfileImage = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  object-fit: cover;
  margin-right: 20px;
`;

export const NameContainer = styled.div`
  display: inherit;
  display: flex;
  flex-direction: column;
`;
export const Name = styled.h4`
  font-size: smaller;
`;
export const Country = styled.span`
  font-size: 12px;
  font-weight: lighter;
`;
export const NavList = styled.div`
  display: flex;
  align-items: center;
`;
export const NavIcon = styled.div`
  color: ${greenColor};
  margin: 10px;
  ${mobilelg({ fontSize: "20px", marginLeft: "12px" })}
`;

// =======================================
// =======================================
// =======================================
export const Body = styled.div`
  display: flex;
  padding: 20px;
  ${mobilelg({ flexDirection: "column" })}
`;
export const BodyLeft = styled.div`
  width: 75%;
  padding-right: 20px;
  ${tablet({
    width: "70%",
    padding: "20px 20px 0 0",
  })}
  ${mobilelg({ width: "100%", padding: "20px 0" })}
`;
export const BodyRight = styled.div`
  flex: 2;
  ${mobilelg({ display: "block" })}
`;
export const BodyFull = styled.div`
  width: 100%;
`;

export const SectionTitle = styled.span`
  display: block;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;
export const SectionLink = styled.a`
  color: #09cf83;
`;
