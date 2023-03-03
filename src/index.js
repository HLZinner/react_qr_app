import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import { deviceType, osName } from "react-device-detect";
import getUserId from "./util/getUserId";

const CLIENTKEY = "6231015274454d144c508849";

let id = getUserId();

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: CLIENTKEY,

    context: {
      kind: "multi",

      user: {
        key: id,
        accountName: "Hooli",
        planType: "Enterprise"
      },

      account: {
        name: "Hooli",
        isTrial: false,
        isBeta: true,
        planType: "Enterprise",
        signupDate: 1670605200
      },

      device: {
        device: deviceType,
        operatingSystem: osName
      }
    },
});

  ReactDOM.render(
    <LDProvider>
      <App />
    </LDProvider>,
    document.getElementById("root")
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
