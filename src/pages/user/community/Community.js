import { useEffect } from "react";
import { BodyLeft, BodyRight } from "./../../../styled/Main";
import CreatePost from "./../../../components/community/CreatePost";
import CommunityItem from "../../../components/community/CommunityItem";
import CommunityTag from "../../../components/community/CommunityTag";
import CommunityEvent from "../../../components/community/CommunityEvent";
import "./community.css";

const Community = ({ setNavTitle }) => {
  useEffect(() => {
    setNavTitle("Community");
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <BodyLeft>
        <CreatePost />
        <CommunityItem />
      </BodyLeft>

      <BodyRight>
        <CommunityTag />
        <CommunityEvent />
      </BodyRight>
    </>
  );
};

export default Community;
