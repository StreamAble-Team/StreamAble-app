import React from "react";
import Chapters from "../Chapters";
// import Characters from "../Characters";
// import Relations from "../Relations";

const Switcher = ({ data, current }) => {
  if (current === 1) return <Chapters {...data} />;
  // if (current === 2) return <Characters {...data} />;
  // if (current === 3) return <Relations {...data} />;
};

export default Switcher;
