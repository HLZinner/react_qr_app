import "./App.css";
import React, { useState, useEffect } from "react";
import { useFlags } from "launchdarkly-react-client-sdk";
import QRCode from "./components/qrCode";
import HeaderLDLogo from "./components/headerLogo";
import Toggle from "./components/toggle";
import LDLogo from "./components/ldLogo";

function App() {
  const [headerStyle, setHeaderStyle] = useState("gray-app-header");
  const { reactBackgroundColor } = useFlags();

  useEffect(() => {
    setHeaderStyle("gray-app-header");
    const updateBackGroundColor = () => {
      // Sets the className to "purple-app-header", "blue-app-header", etc.
      const headerStyle = reactBackgroundColor + "-app-header";
      setHeaderStyle(headerStyle);

      return reactBackgroundColor;
    };
    updateBackGroundColor();
  }, [reactBackgroundColor]);

  return (
    <div className={headerStyle}>
      <div className="black-header">
        <HeaderLDLogo />
      </div>
      
      <div className={headerStyle}>
        <QRCode />
        <LDLogo />
        <br />
        <Toggle />
      </div>
    </div>
  );
}

export default App;
