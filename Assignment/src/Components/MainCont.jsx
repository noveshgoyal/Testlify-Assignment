import React from "react";
import SideNavbar from "./SideNavbar";
import Header from "./Header";
import Top1 from "./Top1";
import TrackingGrid from "./TrackingGrid";

const MainCont = () => {
  return (
    <div className="frame2" style={{ height: "100%" }}>
      <SideNavbar />
      <div style={{ width: "100%" }}>
        <Header />
        <Top1 />
        <TrackingGrid />
      </div>
    </div>
  );
};

export default MainCont;
