import SideBarItem from "./SideBarItem";

import {
  AdsButton,
  AdsSpan,
  SideBarAds,
  SideBarContainer,
  SideBarLogo,
} from "../../styled/Main";

const Sidebar = () => {
  return (
    <SideBarContainer>
      {/* Side Bar Logo */}
      <SideBarLogo>
        <i className="bi bi-bootstrap"></i>
        Bare Mind
      </SideBarLogo>
      {/* Side Bar Logo */}

      {/* Side Bar Lists */}
      <SideBarItem />
      {/* Side Bar Lists */}

      {/* Side Bar Ads */}
      <SideBarAds>
        <AdsSpan>Get the best of Bare Mind</AdsSpan>
        <AdsButton>Upgrade</AdsButton>
      </SideBarAds>
      {/* Side Bar Ads */}
    </SideBarContainer>
  );
};

export default Sidebar;
