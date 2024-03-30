import { Form, InputNumber, Button, Radio } from "antd";
import React, { useState } from "react";

const CalculatorTest = () => {
  const [age, setAge] = useState("");
  const [married, setMarried] = useState(1);
  const [grossMonthly, setGrossMonthly] = useState("");
  const [lumpsum, setLumpsum] = useState("");
  const [disposable, setDisposable] = useState(0);
  const [saving, setSaving] = useState("");
  const [cpf, setCPF] = useState("");
  const [enhancesSingle, setEnhancesSingle] = useState(0);
  const [enhanceCouple, setEnhanceCouple] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [stepupGrant, setStepupGrant] = useState(0);
  const [recommendation, setRecommendation] = useState("");
  const [renovate, setRenovate] = useState(0);
  const [check, setCheck] = useState(0);
  const [paycpf, setPayCPF] = useState(0);
  const [paycash, setPayCash] = useState(0);
  const [eligibility, setEligibility] = useState(false);

  const handleMarried = (event) => {
    setMarried(event.target.value);
  };

  const debbu = () => {
    // console.log(married, age, grossMonthly,cpf, check, saving);
    console.log(age);
    console.log(married);
    console.log(grossMonthly);
    console.log(lumpsum);
    console.log(disposable);
    console.log(cpf);
    console.log(saving);
    console.log(monthlyPayment);
  };

  function paymentcpf() {
    if (
      (married === 1 && age >= 21 && grossMonthly <= 14000) ||
      (age >= 35 && married === 0 && grossMonthly <= 7000)
    ) {
      if (cpf >= 0.15 * grossMonthly * 12 * 5) {
        setPayCPF("Sufficient CPF");
        return paycpf;
      } else {
        setPayCPF(0.15 * grossMonthly * 12 * 5 - cpf);
        return paycpf;
      }
    } else setPayCPF(0);
    return paycpf;
  }

  function paymentcash() {
    if (
      (married === 1 && age >= 21 && grossMonthly <= 14000) ||
      (age >= 35 && married === 0 && grossMonthly <= 7000)
    ) {
      if (saving >= 0.15 * grossMonthly * 12 * 5) {
        setPayCash("You have enough downpayment for BTO using cash!");
        return paycash;
      } else {
        setPayCash(0.15 * grossMonthly * 12 * 5 - saving);
        return paycash;
      }
    } else setPayCash(0);
    return paycash;
  }

  function rec_recommend() {
    if (
      (married === 1 && age >= 21 && grossMonthly <= 14000) ||
      (age >= 35 && married === 0 && grossMonthly <= 7000)
    ) {
      setRenovate(6 * grossMonthly);
      return renovate;
    } else setRenovate(0);
    return renovate;
  }

  function recommend() {
    if (age >= 65 || disposable < 0) {
      setRecommendation("Sorry, you are ineligible to bto...");
      setStepupGrant(0);
      setEnhancesSingle(0);
      setEnhanceCouple(0);
    } else if (
      (married === 1 &&
        age >= 21 &&
        1 <= grossMonthly <= 14000 &&
        check !== 0) ||
      (age >= 35 && married === 0 && 1 <= grossMonthly <= 7000 && check !== 0)
    ) {
      paymentcash();
      paymentcpf();
      setRecommendation("Congratulations, you are eligible to apply for BTO!");
      setEligibility(true);
      return recommendation;
    } else {
      setRecommendation("Sorry, you are ineligible to apply for BTO...");
      setStepupGrant(0);
      setEnhancesSingle(0);
      setEnhanceCouple(0);
      setEligibility(false);
    }
  }

  function calculateLoanAmount() {
    setCheck(grossMonthly);
    // setDisposable(grossMonthly - lumpsum);
    // return disposable;
  }

  function Estimationsingle() {
    setMonthlyPayment(
      calculateStepupgrant(grossMonthly) +
        calculateSingleGrant(grossMonthly) +
        grossMonthly * 12 * 5
    );

    return monthlyPayment;
  }

  function Estimationcouple() {
    let estBuyPower =
      calculateStepupgrant(grossMonthly) +
      calculatecoupleGrant(grossMonthly) +
      grossMonthly * 12 * 5;
    setMonthlyPayment(estBuyPower);
    return monthlyPayment;
  }

  function calculateStepupgrant() {
    if (grossMonthly <= 7000) {
      setStepupGrant(15000);
      return stepupGrant;
    } else setStepupGrant(0);
    return stepupGrant;
  }

  function calculatecoupleGrant() {
    if (grossMonthly <= 1500) {
      setEnhanceCouple(80000);
      return enhanceCouple;
    } else if ((grossMonthly > 1500) & (grossMonthly <= 2000)) {
      setEnhanceCouple(75000);
      return enhanceCouple;
    } else if ((grossMonthly > 2000) & (grossMonthly <= 2500)) {
      setEnhanceCouple(70000);
      return enhanceCouple;
    } else if ((grossMonthly > 2500) & (grossMonthly <= 3000)) {
      setEnhanceCouple(65000);
      return enhanceCouple;
    } else if ((grossMonthly > 3000) & (grossMonthly <= 3500)) {
      setEnhanceCouple(60000);
      return enhanceCouple;
    } else if ((grossMonthly > 3500) & (grossMonthly <= 4000)) {
      setEnhanceCouple(55000);
      return enhanceCouple;
    } else if ((grossMonthly > 4000) & (grossMonthly <= 4500)) {
      setEnhanceCouple(50000);
      return enhanceCouple;
    } else if ((grossMonthly > 4500) & (grossMonthly <= 5000)) {
      setEnhanceCouple(45000);
      return enhanceCouple;
    } else if ((grossMonthly > 5000) & (grossMonthly <= 5500)) {
      setEnhanceCouple(40000);
      // return enhanceCouple;
    } else if ((grossMonthly > 5500) & (grossMonthly <= 6000)) {
      setEnhanceCouple(35000);
      // return enhanceCouple;
    } else if ((grossMonthly > 6000) & (grossMonthly <= 6500)) {
      setEnhanceCouple(30000);
      return enhanceCouple;
    } else if ((grossMonthly > 6500) & (grossMonthly <= 7000)) {
      setEnhanceCouple(25000);
      return enhanceCouple;
    } else if ((grossMonthly > 7000) & (grossMonthly <= 7500)) {
      setEnhanceCouple(20000);
      return enhanceCouple;
    } else if ((grossMonthly > 7500) & (grossMonthly <= 8000)) {
      setEnhanceCouple(15000);
      return enhanceCouple;
    } else if ((grossMonthly > 8000) & (grossMonthly <= 8500)) {
      setEnhanceCouple(10000);
      return enhanceCouple;
    } else if ((grossMonthly > 8500) & (grossMonthly <= 9000)) {
      setEnhanceCouple(5000);
      return enhanceCouple;
    } else {
      setEnhanceCouple(0);
      return enhanceCouple;
    }
  }

  function calculateSingleGrant() {
    if (grossMonthly <= 750) {
      setEnhancesSingle(40000);
      return enhancesSingle;
    } else if ((grossMonthly > 750) & (grossMonthly <= 1000)) {
      setEnhancesSingle(37500);
      return enhancesSingle;
    } else if ((grossMonthly > 1000) & (grossMonthly <= 1250)) {
      setEnhancesSingle(35000);
      return enhancesSingle;
    } else if ((grossMonthly > 1250) & (grossMonthly <= 1500)) {
      setEnhancesSingle(32500);
      return enhancesSingle;
    } else if ((grossMonthly > 1500) & (grossMonthly <= 1750)) {
      setEnhancesSingle(30000);
      return enhancesSingle;
    } else if ((grossMonthly > 1750) & (grossMonthly <= 2000)) {
      setEnhancesSingle(27500);
      return enhancesSingle;
    } else if ((grossMonthly > 2000) & (grossMonthly <= 2250)) {
      setEnhancesSingle(25000);
      return enhancesSingle;
    } else if ((grossMonthly > 2250) & (grossMonthly <= 2500)) {
      setEnhancesSingle(22500);
      return enhancesSingle;
    } else if ((grossMonthly > 2500) & (grossMonthly <= 2750)) {
      setEnhancesSingle(20000);
      return enhancesSingle;
    } else if ((grossMonthly > 2750) & (grossMonthly <= 3000)) {
      setEnhancesSingle(17500);
      return enhancesSingle;
    } else if ((grossMonthly > 3000) & (grossMonthly <= 3250)) {
      setEnhancesSingle(15000);
      return enhancesSingle;
    } else if ((grossMonthly > 3250) & (grossMonthly <= 3500)) {
      setEnhancesSingle(12500);
      return enhancesSingle;
    } else if ((grossMonthly > 3500) & (grossMonthly <= 3750)) {
      setEnhancesSingle(10000);
      return enhancesSingle;
    } else if ((grossMonthly > 3750) & (grossMonthly <= 4000)) {
      setEnhancesSingle(7500);
      return enhancesSingle;
    } else if ((grossMonthly > 4000) & (grossMonthly <= 4250)) {
      setEnhancesSingle(5000);
      return enhancesSingle;
    } else if ((grossMonthly > 4250) & (grossMonthly <= 4500)) {
      setEnhancesSingle(2500);
      return enhancesSingle;
    } else {
      setEnhancesSingle(0);
      return enhancesSingle;
    }
  }

  function calculategrants() {
    if (age >= 35 && married === 0 && grossMonthly <= 7000) {
      Estimationsingle(grossMonthly, disposable);
      return monthlyPayment + saving + cpf;
    } else if (
      age >= 21 &&
      age < 65 &&
      married === 1 &&
      grossMonthly <= 14000
    ) {
      Estimationcouple(grossMonthly, disposable);
      return monthlyPayment + saving + cpf;
    } else setMonthlyPayment(0);
    return monthlyPayment;
  }

  return (
    <div className="calculatorPage">
      <div className="calculatorForm">
        <h1>Check your BTO Eligibility</h1>
        <Form
          onSubmit={(e) => e.preventDefault()}
          name="basic"
          labelCol={{
            span: 12,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            label="Age"
            name="age"
            value={age}
            rules={[
              {
                type: "integer",
                min: 21,
                max: 100,
                message: "Please input a valid age.",
              },
            ]}
            onChange={(e) => setAge(e.target.value)}
          >
            <InputNumber style={{ width: 150 }} placeholder="Age" />
          </Form.Item>

          <Form.Item label="Married" name="married" value={married}>
            <Radio.Group name="maritalstatus" defaultValue={1}>
              <Radio value={1} onChange={handleMarried} check={married === 1}>
                Yes
              </Radio>
              <Radio value={0} onChange={handleMarried} check={married === 0}>
                No
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Gross Monthly Income"
            name="monthly income"
            value={grossMonthly}
            rules={[
              {
                type: "integer",
                min: 0,
                message: "Please input a valid amount.",
              },
            ]}
            onChange={(e) => setGrossMonthly(e.target.value)}
            onKeyUp={calculateLoanAmount}
          >
            <InputNumber
              style={{ width: 150 }}
              placeholder="Enter amount here"
            />
          </Form.Item>

          <Form.Item
            label="Monthly Expenses"
            name="monthly expenses"
            value={lumpsum}
            rules={[
              {
                type: "integer",
                min: 0,
                message: "Please input a valid amount.",
              },
            ]}
            onChange={(e) => setLumpsum(e.target.value)}
            onKeyUp={calculateLoanAmount}
          >
            <InputNumber
              style={{ width: 150 }}
              placeholder="Enter amount here"
            />
          </Form.Item>

          <Form.Item
            label="Disposable Income"
            name="Disposable Income"
            value={disposable}
            rules={[
              {
                type: "integer",
                min: 0,
                message: "Please input a valid amount.",
              },
            ]}
            onChange={(e) => setDisposable(e.target.value)}
          >
            <InputNumber
              style={{ width: 150 }}
              placeholder="Enter amount here"
              // readOnly='true'
            />
          </Form.Item>

          <Form.Item
            label="CPF"
            name="CPF"
            value={cpf}
            rules={[
              {
                type: "integer",
                min: 0,
                message: "Please input a valid amount.",
              },
            ]}
            onChange={(e) => setCPF(e.target.value)}
          >
            <InputNumber
              style={{ width: 150 }}
              placeholder="Enter amount here"
            />
          </Form.Item>

          <Form.Item
            label="Savings"
            name="savings"
            value={saving}
            rules={[
              {
                type: "integer",
                min: 0,
                message: "Please input a valid amount.",
              },
            ]}
            onChange={(e) => setSaving(e.target.value)}
          >
            <InputNumber
              style={{ width: 150 }}
              placeholder="Enter amount here"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
            <Button
              type="primary"
              // icon={<SearchOutlined />}
              htmlType="submit"
              onClick={() => {
                calculategrants();
                recommend();
                rec_recommend();
                debbu();
              }}
            >
              Calculate
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="calculatorResult">
        <h2> {recommendation}</h2>
        {eligibility && (
          <>
            <h3>Estimated Buying Power:</h3>
            <p className="resultInfo">
              $ {parseFloat(monthlyPayment.toFixed(2))}
            </p>
          </>
        )}
        {eligibility && (
          <>
            <h3>Downpayment required(15%):</h3>
            <p className="resultInfo">
              $ {parseFloat(monthlyPayment * (0.15).toFixed(2))}
            </p>
          </>
        )}

        {eligibility && (
          <>
            <h3>Option 1. Downpayment using Cash ($):</h3>
            <p className="resultInfo">{paycash}</p>
          </>
        )}
        {eligibility && (
          <>
            <h3>Option 2. Downpayment using CPF ($):</h3>
            <p className="resultInfo">{paycpf}</p>
          </>
        )}
      </div>
      {eligibility && (
        <div>
          <div>
            <h1>Grants</h1>
            <h3>Step-Up CPF Housing Grant ($):</h3>{" "}
            <p className="resultInfo">{stepupGrant}</p>
            <h3>EHG Grant ($):</h3>{" "}
            <p className="resultInfo">{enhanceCouple + enhancesSingle}</p>
            <h3>Total Grant ($):</h3>{" "}
            <p className="resultInfo">
              {enhanceCouple + enhancesSingle + stepupGrant}
            </p>
          </div>
          <h3>Recommended Renovation Cost ($):</h3>
          <p className="resultInfo"> ${renovate}</p>
        </div>
      )}
    </div>
  );
};

export default CalculatorTest;
