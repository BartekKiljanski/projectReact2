import React, { useState } from "react";
import "./currencyConverter.css";

export const CurrencyConverter = () => {
  const [result, setResult] = useState("");
  const [amount, setAmount] = useState("1");

  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PLN");
  const handleChangeFirstSelect = (event) => {
    setFrom(event.target.value);
  };
  const handleOnInputChange = (event) => {
    setAmount(event.target.value);
  };
  const handleChangeSecondSelect = (event) => {
    setTo(event.target.value);
  };
  const handleClick = () => {
    let url = `https://v6.exchangerate-api.com/v6/ba7fb2d450c362bc21a2a245/latest/${from}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        let exchangeRate = result.conversion_rates[to];
        const convertedResult = (amount * exchangeRate).toFixed(2);

        setResult(`${amount} ${from} = ${convertedResult} ${to}`);
      });
  };

  console.log(from);
  console.log(to);

  return (
    <form action="#">
      <div className="amount">
        <p>Wpisz kwotę</p>
        <input onChange={handleOnInputChange} type="text" value={amount} />
      </div>
      <div className="drop-list">
        <div className="from">
          <p>Z</p>
          <div className="select-box">
            <select onChange={handleChangeFirstSelect}>
              <option value="USD">USD</option>
              <option value="PLN">PLN</option>

              <option value="CHF">CHF</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>
        <div className="icon">
          <i className="fas fa-exchange-alt"></i>
        </div>
        <div className="to">
          <p>Na</p>
          <div className="select-box">
            <select onChange={handleChangeSecondSelect}>
              <option value="PLN">PLN</option>
              <option value="USD">USD</option>
              <option value="CHF">CHF</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>
      </div>
      <div className="exchange-rate">{result}</div>
      <button onClick={handleClick}>Sprawdz kurs</button>
    </form>
  );
};
export default CurrencyConverter;
