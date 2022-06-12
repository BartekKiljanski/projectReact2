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
      <div class="amount">
        <p>Wpisz kwotę</p>
        <input onChange={handleOnInputChange} type="text" value={amount} />
      </div>
      <div class="drop-list">
        <div class="from">
          <p>Z</p>
          <div class="select-box">
            <select onChange={handleChangeFirstSelect}>
              <option value="USD">USD</option>
              <option value="PLN">PLN</option>

              <option value="CHF">CHF</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>
        <div class="icon">
          <i class="fas fa-exchange-alt"></i>
        </div>
        <div class="to">
          <p>Na</p>
          <div class="select-box">
            <select onChange={handleChangeSecondSelect}>
              <option value="PLN">PLN</option>
              <option value="USD">USD</option>
              <option value="CHF">CHF</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>
      </div>
      <div class="exchange-rate">{result}</div>
      <button onClick={handleClick}>Sprawdz kurs</button>
    </form>
  );
};
export default CurrencyConverter;
