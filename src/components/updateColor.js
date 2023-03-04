import { withLDConsumer } from "launchdarkly-react-client-sdk";
import React from "react";

const updateBackGroundColor = ({ flags, ldClient /*, ...otherProps */ }) => {
  let showColorFeature = ldClient.variation("reactBackgroundColor");

  return showColorFeature;
};

export default withLDConsumer()(updateBackGroundColor);
