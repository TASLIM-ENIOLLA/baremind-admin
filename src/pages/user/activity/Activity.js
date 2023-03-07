import { useEffect } from "react";
import Charts from "../../../components/activity/Chart";
import Goal from "../../../components/activity/Goal";
import QuickActions from "../../../components/activity/QuickActions";
import Calendar from "../../../components/Calender";
import { BodyLeft, BodyRight, SectionTitle } from "../../../styled/Main";
import "./activity.css";
import BigCalender from "./../../../components/activity/BigCalender";

const Activity = ({ setNavTitle }) => {
  useEffect(() => {
    setNavTitle("Activity");
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <BodyLeft>
        {/* ================== */}
        <SectionTitle>
          <span>Quick Actions</span>
        </SectionTitle>
        <QuickActions />
        {/* ================== */}

        {/* ================== */}
        <SectionTitle>
          <span>Events</span>
        </SectionTitle>
        <BigCalender />
        {/* ================== */}
      </BodyLeft>
      <BodyRight>
        {/* ================== */}
        <SectionTitle>
          <span>Calender</span>
        </SectionTitle>
        <Calendar />
        {/* ================== */}

        {/* ================== */}
        <SectionTitle>
          <span>Today's Result</span>
        </SectionTitle>
        <Charts />
        {/* ================== */}

        {/* ================== */}
        <SectionTitle>
          <span>Your Goals</span>
        </SectionTitle>
        <Goal />
        {/* ================== */}
      </BodyRight>
    </>
  );
};

export default Activity;
