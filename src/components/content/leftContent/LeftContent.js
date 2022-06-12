import React from "react";

import "./leftContent.css";
import LeftContentDescription from "./LeftContentDescription";
import LeftContentHeader from "./LeftContentHeader";

const LeftContent = () => {
  return (
    <div className="left-content">
      <LeftContentHeader />
      <LeftContentDescription />
    </div>
  );
};

export default LeftContent;
