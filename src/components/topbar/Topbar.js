import {
  Country,
  Image,
  MainTopNav,
  MobileToggle,
  Name,
  NameContainer,
  Nav,
  NavIcon,
  NavList,
  NavProfileImage,
  NavTitle,
  NavTitleWrapper,
} from "../../styled/Main";
import { Link } from "react-router-dom";
import {
  ChatBubbleOutline,
  GridViewRounded,
  NotificationsOutlined,
} from "@mui/icons-material";
import { useContext } from "react";
import userContext from './../../context/user/userContext';

const Topbar = ({ title }) => {
  const context = useContext(userContext);
  return (
    <MainTopNav>
      <NavTitleWrapper>
        <NavTitle>{title}</NavTitle>
        <MobileToggle onClick={context.setToggle}>
          <GridViewRounded />
        </MobileToggle>
      </NavTitleWrapper>
      <Nav>
        <NavProfileImage>
          <Image src="image/user.png" alt="img" />
          <NameContainer>
            <Name> Mahlodi Letsie</Name>
            <Country>South Africa</Country>
          </NameContainer>
        </NavProfileImage>
        <NavList>
          <Link to="#">
            <NavIcon>
              <NotificationsOutlined />
            </NavIcon>
          </Link>
          <Link to="#">
            <NavIcon>
              <ChatBubbleOutline />
            </NavIcon>
          </Link>
        </NavList>
      </Nav>
    </MainTopNav>
  );
};

export default Topbar;
