import React from "react";

import "./content.css";
import LeftContent from "./leftContent/LeftContent";
import RightContent from "./rightContent/RightContent";

const Content = () => {
  return (
    <div className="content">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Content;
