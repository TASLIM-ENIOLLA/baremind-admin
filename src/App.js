import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sideBar/Sidebar";
import { Body, Container, MainWrapper } from "./styled/Main";
import Topbar from "./components/topbar/Topbar";

import { Activity, Chat, Community, Dashboard, Meditation } from "./pages/base";
import Profile from "./pages/profile/Profile";
import SinglePost from "./components/meditation/SinglePost";
// import Survey from "./components/survey/Survey";
// import UserSurvey from "./components/survey/UserSurvey";
// import SurveyEnd from "./components/survey/SurveyEnd";

const App = () => {
  const [navTitle, setNavTitle] = useState("Dashboard");

  return (
    <Router>
       <Container>
        <Sidebar /> 
        <MainWrapper>
          <Topbar title={navTitle} />
          <Body> 
           
              
      <Routes>
       
      <Route
                path="/"
                element={<Dashboard setNavTitle={setNavTitle} />}
              />  
         <Route
                path="meditation/*"
                element={<Meditation setNavTitle={setNavTitle} />}
              />
               <Route path='post' element={<SinglePost setNavTitle={setNavTitle}/> } />
              <Route
                path="activity"
                element={<Activity setNavTitle={setNavTitle} />}
              />
               <Route
                path="profile"
                element={<Profile setNavTitle={setNavTitle} />}
              /> 
              <Route
                path="community"
                element={<Community setNavTitle={setNavTitle} />}
              />
              <Route path="chat" element={<Chat setNavTitle={setNavTitle} />} />
              <Route
                path="profile"
                element={<Profile setNavTitle={setNavTitle} />}
              />
              <Route
                path="meditation"
                element={<Meditation setNavTitle={setNavTitle} />}
              /> 
      </Routes>
      </Body>
        </MainWrapper>
      </Container>
    </Router>
  );
};

export default App;
