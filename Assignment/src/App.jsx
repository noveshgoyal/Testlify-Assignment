import { useState } from "react";
import "./App.css";
import "./Styles.css";
import Tabs from "./Components/Tabs";
import Navbar from "./Components/Navbar";
import SideNavbar from "./Components/SideNavbar";
import MainCont from "./Components/MainCont";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <MainCont />
    </>
  );
}

export default App;
