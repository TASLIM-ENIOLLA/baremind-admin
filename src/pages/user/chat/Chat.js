import { useEffect } from "react";
import "./chat.css";
import { BodyFull } from "./../../../styled/Main";
import {
  ChatWrapper,
  PeopleContainer,
  ConversationContainer,
} from "./../../../styled/styledChat";
import ChatSearch from "../../../components/chat/ChatSearch";
import ChatPeople from "../../../components/chat/ChatPeople";
import ConversationHead from "./../../../components/chat/ConversationHead";
import Conversation from "../../../components/chat/Conversation";

const Chat = ({ setNavTitle }) => {
  useEffect(() => {
    setNavTitle("Chat");
    // eslint-disable-next-line
  }, []);
  return (
    <BodyFull>
      <ChatWrapper>
        <PeopleContainer>
          {/* =Search== */}
          <ChatSearch />
          {/* === People === */}
          <ChatPeople />
        </PeopleContainer>

        <ConversationContainer>
          {/* Conversation head */}
          <ConversationHead />
          {/* Conversations */}
          <Conversation />
        </ConversationContainer>
      </ChatWrapper>
    </BodyFull>
  );
};

export default Chat;
