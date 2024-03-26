import { FundTwoTone } from '@ant-design/icons';
import React from 'react';
import { useState } from "react";


const CalculatorBox = () => {
    const [age, setAge] = useState(35);
    const [married, setmarried] = useState(1);
    const [income, setIncome] = useState(null);
    const [lumpsum, setlumpsum] = useState("");
    const [cash, setCash] = useState("");
    const [cpf, setCPF] = useState("");
    const [housePrice, setHousePrice] = useState("");
    

    const onButtonClick = () => {
        // console.log ('income = ',income);
        // console.log ('cash = ',cash);
        // console.log ('cpf = ',cpf);
        // console.log('house price = ', housePrice);
    }

    return (
    <div className={"topContainer"}>
      <br />
      <br />
      <div className={"headingContainer"}>Input your House Price</div>
      <input
          value={housePrice}
          placeholder="Price"
          onChange={(ev) => setHousePrice(ev.target.value)}
          className={"inputBox"}
        />
      <br />
      <div className={"headingContainer"}>Input your Monthly Income</div>
      <input
          value={income}
          placeholder="Monthly Income"
          onChange={(ev) => setIncome(ev.target.value)}
          className={"inputBox"}
        />
      <br />
      <div className={"headingContainer"}>Input your Disposable* Cash Savings</div>
      <input
          value={cash}
          placeholder="Cash Savings"
          onChange={(ev) => setCash(ev.target.value)}
          className={"inputBox"}
        />
      <br />
      <div className={"headingContainer"}>Input your Disposable* CPF Savings</div>
      <input
          value={cpf}
          placeholder="CPF Savings"
          onChange={(ev) => setCPF(ev.target.value)}
          className={"inputBox"}
        />
      <br />
      <div className={"infoContainer"}>*amount you would like to use for the flat purchase</div>
      <br />
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Calculate"}
        />
    </div>
  );
};
export default CalculatorBox;