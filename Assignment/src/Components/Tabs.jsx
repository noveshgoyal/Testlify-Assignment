import React from "react";
import NavSelect from "./NavSelect";

const Tabs = () => {
  const projects = [
    { label: "Project 1", value: "Proj1" },
    { label: "Project 2", value: "Proj2" },
    { label: "Project 3", value: "Proj3" },
  ];

  return (
    <div className="tabs-cont">
      <button className="nav-btn">Your work</button>
      <button className="nav-btn">People</button>
      <NavSelect label={"Projects"} options={projects} />
      <NavSelect label={"Filter"} options={projects} />
      <NavSelect label={"Dashboards"} options={projects} />
      <NavSelect label={"Apps"} options={projects} />
      <button className="primary-btn">Create</button>
    </div>
  );
};

export default Tabs;
