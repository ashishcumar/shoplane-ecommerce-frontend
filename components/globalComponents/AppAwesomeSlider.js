import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

function AppAwesomeSlider({ children }) {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={4000}
      // organicArrows={true}
      // organicArrowColor={"black"}
      bullets={true}
      organicArrowThickness={"6px"}
      loaderBarHeight={"0px"}
      loaderBarColor={"transparent"}
    >
      {children}
    </AutoplaySlider>
  );
}

export default AppAwesomeSlider;
