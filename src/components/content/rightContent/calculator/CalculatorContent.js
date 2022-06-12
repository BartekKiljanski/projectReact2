import React from "react";
import "./calculatorContent.css";
import CurrencyConverter from "./CurrencyConverter";
import HeaderCalculator from "./HeaderCalculator";

const CalculatorContent = () => {
  return (
    <div class="wrapper">
      <HeaderCalculator />
      <CurrencyConverter />
    </div>
  );
};

export default CalculatorContent;
