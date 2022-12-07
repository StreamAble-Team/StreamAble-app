import React from "react";
import Episodes from "../Episodes";
import Characters from "../Characters";
import Relations from "../Relations";

const Switcher = ({
  data,
  current,
  setQualities,
  setShowQualityModal,
  setDataToSend,
  anilistData,
}) => {
  if (current === 1)
    return (
      <Episodes
        {...data}
        setQualities={setQualities}
        setShowQualityModal={setShowQualityModal}
        setDataToSend={setDataToSend}
        anilistData={anilistData}
      />
    );
  if (current === 2) return <Characters {...data} />;
  if (current === 3) return <Relations {...data} />;
};

export default Switcher;
