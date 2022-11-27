import React from "react";
import Episodes from "../Episodes";
import Characters from "../Characters";
import Relations from "../Relations";

const Switcher = ({ data, current }) => {
  if (current === 1) return <Episodes {...data} />;
  if (current === 2) return <Characters {...data} />;
  if (current === 3) return <Relations {...data} />;
};

export default Switcher;
