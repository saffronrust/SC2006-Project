import React from 'react';
import { useState } from "react";


const CalculatorBox = () => {
    const [income, setIncome] = useState("");
    const [cash, setCash] = useState("");
    const [cpf, setCPF] = useState("");
    

    const onButtonClick = () => {
        console.log ('income = ',income);
        console.log ('cash = ',cash);
        console.log ('cpf = ',cpf);
    }


    return (
    <div className={"topContainer"}>
      <br />
      <br />
      <div className={"headingContainer"}>
        <div>Input your Monthly Income</div>
      </div>
      <div className={"inputContainer"}>
        <input
          value={income}
          placeholder="Monthly Income"
          onChange={(ev) => setIncome(ev.target.value)}
          className={"inputBox"}
        />
      </div>
      <br />
      <div className={"headingContainer"}>
        <div>Input your Disposable* Cash Savings</div>
      </div>
      <div className={"inputContainer"}>
        <input
          value={cash}
          placeholder="Cash Savings"
          onChange={(ev) => setCash(ev.target.value)}
          className={"inputBox"}
        />
      </div>
      <br />
      <div className={"headingContainer"}>
        <div>Input your Disposable* CPF Savings</div>
      </div>
      <div className={"inputContainer"}>
        <input
          value={cpf}
          placeholder="CPF Savings"
          onChange={(ev) => setCPF(ev.target.value)}
          className={"inputBox"}
        />
      </div>
      <br />
      <div className={"infoContainer"}>
        <div>*amount you would like to use for the flat purchase</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Calculate"}
        />
      </div>
    </div>
  );
};
export default CalculatorBox;