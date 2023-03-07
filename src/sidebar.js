import {
  AccountCircleRounded,
  BoyRounded,
  ConnectWithoutContactRounded,
  DashboardRounded,
  MusicNoteRounded,
  SelfImprovementRounded,
  VolunteerActivismRounded,
  ChatBubble,
  VerifiedUser,
} from "@mui/icons-material";

export const sideBarList = [
  {
    name: "Home",
    icon: <DashboardRounded />,
    path: "/",
  },
  {
    name: "Meditation",
    icon: <SelfImprovementRounded />,
    path: "meditation",
  },
  {
    name: "Activity",
    icon: <VolunteerActivismRounded />,
    path: "activity",
  },
  {
    name: "Chat",
    icon: <ChatBubble />,
    path: "chat",
  },
  {
    name: "Profile",
    icon: <AccountCircleRounded />,
    path: "profile",
  },
  {
    name: "Community",
    icon: <ConnectWithoutContactRounded />,
    path: "community",
  },
];
