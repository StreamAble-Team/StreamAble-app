import React from "react";
import { Relations } from "../../Info";
import Chapters from "../Chapters";
import Characters from "../Characters";

const Switcher = ({ data, current }) => {
  if (current === 1) return <Chapters {...data} />;
  if (current === 2) return <Characters {...data} />;
  if (current === 3) return <Relations {...data} />;
};

export default Switcher;
