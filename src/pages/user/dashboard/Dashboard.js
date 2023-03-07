import { useEffect } from "react";
import DashboardHead from "../../../components/dashboard/left/DashboardHead";
import QuickActions from "../../../components/dashboard/left/QuickActions";
import Suggestion from "../../../components/dashboard/left/Suggestion";
import Calender from "../../../components/Calender";
import {
  BodyLeft,
  BodyRight,
  SectionLink,
  SectionTitle,
} from "../../../styled/Main";
import "./dash.css";
import Schedule from "./../../../components/dashboard/right/Schedule";

const Dashboard = ({ setNavTitle }) => {
  useEffect(() => {
    setNavTitle("Dashboard");

    // eslint-disable-next-line
  }, []);
  return (
    <>
      <BodyLeft>
        <DashboardHead />

        {/* ========= */}
        <SectionTitle>
          <span>Today's Suggestion</span>
          <SectionLink>Get Started</SectionLink>
        </SectionTitle>
        <Suggestion />
        {/* ========== */}

        {/* ========= */}
        <SectionTitle>
          <span>Quick Actions</span>
        </SectionTitle>
        <QuickActions />
        {/* ========== */}
      </BodyLeft>

      {/* ============Right============ */}
      <BodyRight>
        {/* ========= */}
        <SectionTitle>
          <span>Calender</span>
        </SectionTitle>
        <Calender />
        {/* ========== */}

        {/* ========= */}
        <SectionTitle>
          <span>Schedule</span>
        </SectionTitle>
        <Schedule />
        {/* ========== */}
      </BodyRight>
    </>
  );
};

export default Dashboard;
