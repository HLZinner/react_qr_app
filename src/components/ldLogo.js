import React from "react";
import { withLDConsumer } from "launchdarkly-react-client-sdk";
import osmo from "./../images/osmo_black.png";
import rocketship from "./../images/rocketship_dark.png";

const ldLogoChange = ({ flags, ldClient /*, ...otherProps */ }) => {
  let showFeature = ldClient.variation("reactChildLogo");
  
  return showFeature ? (
  <div>
    <img src={osmo} className="LD-logo" alt="osmo" />
  </div>
  ) : (
  <div>
    <img src={rocketship} className="LD-logo" alt="rocketship" />
  </div>
  );
};

export default withLDConsumer()(ldLogoChange);

