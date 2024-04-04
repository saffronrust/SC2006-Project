import { Form, InputNumber, Button, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { Typography } from "antd";

const CalculatorBox = () => {
  const [age, setAge] = useState("");
  const [married, setMarried] = useState(true);
  const [grossMonthly, setGrossMonthly] = useState("");
  const [lumpsum, setLumpsum] = useState("");
  const [saving, setSaving] = useState("");
  const [cpf, setCPF] = useState("");
  const [enhancesSingle, setEnhancesSingle] = useState(0);
  const [enhanceCouple, setEnhanceCouple] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [stepupGrant, setStepupGrant] = useState(0);
  const [recommendation, setRecommendation] = useState("");
  const [renovate, setRenovate] = useState(0);
  const [check, setCheck] = useState(0);
  const [paycpf, setPayCPF] = useState(0);
  const [paycash, setPayCash] = useState(0);
  const [eligibility, setEligibility] = useState(false);

  useEffect(() => {
    calculategrants();
  }, [enhancesSingle, enhanceCouple, stepupGrant]);

  const handleMarried = (event) => {
    setMarried(event.target.value);
  };

  const debbu = () => {
    // console.log(married, age, grossMonthly,cpf, check, saving);
    console.log(age);
    console.log(married);
    console.log(grossMonthly);
    console.log(lumpsum);
    console.log(cpf);
    console.log(saving);
    console.log(monthlyPayment);
  };

  function paymentcpf() {
    if (
      (married === true && age >= 21 && grossMonthly <= 14000) ||
      (age >= 35 && married === false && grossMonthly <= 7000)
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
      (married === true && age >= 21 && grossMonthly <= 14000) ||
      (age >= 35 && married === false && grossMonthly <= 7000)
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
      (married === true && age >= 21 && grossMonthly <= 14000) ||
      (age >= 35 && married === false && grossMonthly <= 7000)
    ) {
      setRenovate(6 * grossMonthly);
      return renovate;
    } else setRenovate(0);
    return renovate;
  }

  function recommend() {
    if (married === true && grossMonthly > 14000) {
      setRecommendation(
        "You are ineligible to apply for BTO because you have exceeded the income ceiling of $14000"
      );
      setStepupGrant(0);
      setEnhancesSingle(0);
      setEnhanceCouple(0);
      setEligibility(false);
    } else if (age >= 35 && married === false && grossMonthly > 7000) {
      setRecommendation(
        "You are ineligible to apply for BTO because you have exceeded the income ceiling of $7000"
      );
      setStepupGrant(0);
      setEnhancesSingle(0);
      setEnhanceCouple(0);
      setEligibility(false);
    } else if (
      (married === true &&
        age >= 21 &&
        1 <= grossMonthly <= 14000 &&
        check !== 0) ||
      (age >= 35 &&
        married === false &&
        1 <= grossMonthly <= 7000 &&
        check !== 0)
    ) {
      paymentcash();
      paymentcpf();
      setRecommendation("Congratulations, you are eligible to apply for BTO!");
      setEligibility(true);
      return recommendation;
    } else if (age < 35 && married === false) {
      setRecommendation(
        "You are ineligible to apply for BTO as a single below 35 years old"
      );
      setStepupGrant(0);
      setEnhancesSingle(0);
      setEnhanceCouple(0);
      setEligibility(false);
    }
  }

  function calculateLoanAmount() {
    setCheck(grossMonthly);
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
      return enhanceCouple;
    } else if ((grossMonthly > 5500) & (grossMonthly <= 6000)) {
      setEnhanceCouple(35000);
      return enhanceCouple;
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
    if (age >= 35 && married === false && grossMonthly <= 7000) {
      Estimationsingle(grossMonthly);
      return monthlyPayment + saving + cpf;
    } else if (
      age >= 21 &&
      age < 65 &&
      married === true &&
      grossMonthly <= 14000
    ) {
      Estimationcouple(grossMonthly);
      return monthlyPayment + saving + cpf;
    } else setMonthlyPayment(0);
    return monthlyPayment;
  }

  return (
    <div className="calculatorPage">
      <div className="calculatorForm">
        <Typography.Title level={2}>
          Check Your BTO Eligibility
        </Typography.Title>
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
                required: true,
              },
            ]}
            onChange={(e) => setAge(e.target.value)}
          >
            <InputNumber style={{ width: 150 }} placeholder="Age" />
          </Form.Item>

          <Form.Item
            label="Applying with partner"
            name="married"
            value={married}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Radio.Group
              name="maritalstatus"
              //defaultValue={1}
            >
              <Radio
                value={true}
                onChange={handleMarried}
                check={married === true}
              >
                Yes
              </Radio>
              <Radio
                value={false}
                onChange={handleMarried}
                check={married === false}
              >
                No
              </Radio>
            </Radio.Group>
          </Form.Item>

          {married && (
            <Form.Item
              label="Combined Income:"
              name="monthly income"
              value={grossMonthly}
              rules={[
                {
                  type: "integer",
                  min: 0,
                  message: "Please input a valid amount.",
                  required: true,
                },
              ]}
              onChange={(e) => setGrossMonthly(e.target.value)}
              onKeyUp={calculateLoanAmount}
            >
              <InputNumber
                style={{ width: 150 }}
                placeholder="Monthly amount"
              />
            </Form.Item>
          )}
          {!married && (
            <Form.Item
              label="Gross Income"
              name="monthly income"
              value={grossMonthly}
              rules={[
                {
                  type: "integer",
                  min: 0,
                  message: "Please input a valid amount.",
                  required: true,
                },
              ]}
              onChange={(e) => setGrossMonthly(e.target.value)}
              onKeyUp={calculateLoanAmount}
            >
              <InputNumber
                style={{ width: 150 }}
                placeholder="Monthly amount"
              />
            </Form.Item>
          )}

          <Form.Item
            label="Monthly Expenses"
            name="monthly expenses"
            value={lumpsum}
            rules={[
              {
                type: "integer",
                min: 0,
                message: "Please input a valid amount.",
                required: true,
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
            label="CPF"
            name="CPF"
            value={cpf}
            rules={[
              {
                type: "integer",
                min: 0,
                message: "Please input a valid amount.",
                required: true,
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
                required: true,
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
      <div className="calcBg">
        <h3>{recommendation}</h3>

        {eligibility && (
          <div className="calculatorResult">
            <h3 className="resultTitle">Estimated Buying Power:</h3>
            <p className="resultInfo">
              $ {parseFloat(monthlyPayment.toFixed(2))}
            </p>
          </div>
        )}
        {eligibility && (
          <div className="calculatorResult">
            <h3 className="resultTitle">Downpayment required(15%):</h3>
            <p className="resultInfo">
              $ {parseFloat(monthlyPayment * (0.15).toFixed(2))}
            </p>
          </div>
        )}
        {eligibility && (
          <div className="calculatorResult">
            <h3 className="resultTitle">
              Option 1. Downpayment using Cash ($):
            </h3>
            <p className="resultInfo">{paycash}</p>
          </div>
        )}
        {eligibility && (
          <div className="calculatorResult">
            <h3 className="resultTitle">
              Option 2. Downpayment using CPF ($):
            </h3>
            <p className="resultInfo">{paycpf}</p>
          </div>
        )}
      </div>
      {eligibility && (
        <div className="calculatorGrant">
          <Typography.Title level={3}>Grants</Typography.Title>
          <h3 className="resultTitle">Step-Up CPF Housing Grant ($):</h3>
          <p className="resultInfo">{stepupGrant}</p>
          <h3 className="resultTitle">EHG Grant ($):</h3>
          <p className="resultInfo">{enhanceCouple + enhancesSingle}</p>
          <h3 className="resultTitle">Total Grant ($):</h3>
          <p className="resultInfo">
            {enhanceCouple + enhancesSingle + stepupGrant}
          </p>
          <h3 className="resultTitle">Recommended Renovation Cost ($):</h3>
          <p className="resultInfo"> ${renovate}</p>
        </div>
      )}
    </div>
  );
};

export default CalculatorBox;
