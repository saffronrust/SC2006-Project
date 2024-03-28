import {
    Form,
    InputNumber,
    Select,
    Button,
    Radio
  } from 'antd';
import React, { useState } from "react";

const CalculatorTest = () => {
    const [age, setAge] = useState("");
    const [married, setMarried] = useState("");
    const [grossMonthly, setGrossMonthly] = useState("");
    const [lumpsum, setLumpsum] = useState("");
    const [disposable, setDisposable] = useState(0);
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

    const handleMarried = (event) => {
        setMarried(event.target.value);
    };

    const debbu = ()=>{
      // console.log(married, age, grossMonthly,cpf, check, saving);
      console.log(age);
      console.log(married);
      console.log(grossMonthly);
      console.log(lumpsum);
      console.log(disposable);
      console.log(cpf);
      console.log(saving);
    }

  function paymentcpf() {
    if (
      (married == 1 && age >= 21 && grossMonthly <= 14000) ||
      (age >= 35 && married == 0 && grossMonthly <= 7000)
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
      (married == 1 && age >= 21 && grossMonthly <= 14000) ||
      (age >= 35 && married == 0 && grossMonthly <= 7000)
    ) {
      if (saving >= 0.15 * grossMonthly * 12 * 5) {
        setPayCash("you have enough downpayment for BTO using cash!");
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
      (married == 1 && age >= 21 && grossMonthly <= 14000) ||
      (age >= 35 && married == 0 && grossMonthly <= 7000)
    ) {
      setRenovate(6 * grossMonthly);
      return renovate;
    } else setRenovate(0);
    return renovate;
  }

  function recommend() {
    if (age >= 65 || disposable < 0) {
      setRecommendation("you are not allowed to bto!!!");
      setStepupGrant(0);
      setEnhancesSingle(0);
      setEnhanceCouple(0);
    } else if (
      (married == 1 && age >= 21 && 1 <= grossMonthly <= 14000 && check != 0) ||
      (age >= 35 && married == 0 && 1 <= grossMonthly <= 7000 && check != 0)
    ) {
      paymentcash();
      paymentcpf();
      setRecommendation(
        "Congrats!!You are eligible to bto!! Refer to renovation guide for tips!"
      );
      setEligibility(true);
      return recommendation;
    } else {
      setRecommendation("you are not allowed to bto!!!");
      setStepupGrant(0);
      setEnhancesSingle(0);
      setEnhanceCouple(0);
    }
  }

  function calculateLoanAmount() {
    setCheck(grossMonthly);
    setDisposable(grossMonthly - lumpsum);
    return disposable;
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
    setMonthlyPayment(
      calculateStepupgrant(grossMonthly) +
        calculatecoupleGrant(grossMonthly) +
        grossMonthly * 12 * 5
    );
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
    if (age >= 35 && married == 0 && grossMonthly <= 7000) {
      Estimationsingle(grossMonthly, disposable);
      return monthlyPayment + saving + cpf;
    } else if (
      age >= 21 &&
      age < 65 &&
      ((married) == 1) &&
      grossMonthly <= 14000
    ) {
      Estimationcouple(grossMonthly, disposable);
      return monthlyPayment + saving + cpf;
    } else setMonthlyPayment(0);
    return monthlyPayment;
  }
    
    return (
      <div>
        <div>
          <h1>
            BTO Information Calculator{" "}
          </h1>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Item
                label="Age"
                name="age"
                value={age}
                rules={[
                    {
                      type: 'integer',
                      min: 21,
                      max: 100,
                      message: 'Please input a valid age.',
                    },
                  ]}
                  onChange = {(e) => setAge(e.target.value)}
            >
            <InputNumber
            style={{ width: 150 }}
            placeholder='Age'
            />
            </Form.Item>

            <Form.Item
            label="Married"
            name="married"
            value= {married}
            >
                <Radio.Group name="maritalstatus" defaultValue={1}>
                    <Radio value={1} onChange={handleMarried} check={married==1}>Yes</Radio>
                    <Radio value={0} onChange={handleMarried} check={married==0}>No</Radio>
                </Radio.Group>
            </Form.Item>
            
            <Form.Item
                label="Gross Monthly Income"
                name="monthly income"
                value={grossMonthly}
                rules={[
                    {
                      type: 'integer',
                      min: 0,
                      message: 'Please input a valid amount.',
                    },
                  ]}
                  onChange = {(e) => setGrossMonthly(e.target.value)}
                  // onKeyUp={calculateLoanAmount}
            >
            <InputNumber
            style={{ width: 150 }}
            placeholder='Enter amount here'
            />
            </Form.Item>

            <Form.Item
                label="Monthly Expenses"
                name="monthly expenses"
                value={lumpsum}
                rules={[
                    {
                      type: 'integer',
                      min: 0,
                      message: 'Please input a valid amount.',
                    },
                  ]}
                  onChange = {(e) => setLumpsum(e.target.value)}
                  onKeyUp={calculateLoanAmount}
            >
            <InputNumber
            style={{ width: 150 }}
            placeholder='Enter amount here'
            />
            </Form.Item>

            <Form.Item
                label="Disposable Income"
                name="Disposable Income"
                value={disposable}
                rules={[
                    {
                      type: 'integer',
                      min: 0,
                      message: 'Please input a valid amount.',
                    },
                  ]}
                onChange = {(e) => setLumpsum(e.target.value)}
            >
            <InputNumber
            style={{ width: 150 }}
            placeholder='Enter amount here'
            // readOnly='true'
            />
            </Form.Item>

            <Form.Item
                label="CPF"
                name="CPF"
                value={cpf}
                rules={[
                    {
                      type: 'integer',
                      min: 0,
                      message: 'Please input a valid amount.',
                    },
                  ]}
                  onChange = {(e) => setCPF(e.target.value)}
            >
            <InputNumber
            style={{ width: 150 }}
            placeholder='Enter amount here'
            />
            </Form.Item>

            <Form.Item
                label="Savings"
                name="savings"
                value={saving}
                rules={[
                    {
                      type: 'integer',
                      min: 0,
                      message: 'Please input a valid amount.',
                    },
                  ]}
                onChange = {(e) => setSaving(e.target.value)}
            >
            <InputNumber
            style={{ width: 150 }}
            placeholder='Enter amount here'
            />
            </Form.Item>

            <Button type="primary"
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

            <div>
              <h2> {recommendation}</h2>
              {eligibility && (
                <h3>
                  Estimated Buying Power:
                  <h4>
                    $ {parseFloat(monthlyPayment.toFixed(2))}
                  </h4>
                </h3>
              )}
              {eligibility && (
                <h3>
                  Downpayment required(15%):
                  <h4>
                    ${" "}
                    {parseFloat(monthlyPayment * (0.15).toFixed(2))}
                  </h4>
                </h3>
              )}

              {eligibility && (
                <h3>
                  Downpayment Option 1 Cashpayment:
                  <h4>
                    ${paycash}
                  </h4>
                </h3>
              )}
              {eligibility && (
                <h3>
                  Downpayment Option 2 CPF:
                  <h4>
                    ${paycpf}
                  </h4>
                </h3>
              )}
            </div>
            {eligibility && (
              <div>
                <div>
                  <h1>
                    Grants
                  </h1>
                  <h3>
                    Step-Up CPF Housing Grant: <h4>{stepupGrant}</h4>
                  </h3>
                  <h3>
                    EHG Grant: <h4>{enhanceCouple + enhancesSingle}</h4>
                  </h3>
                  <h3>
                    Total Grant:{" "}
                    <h4>{enhanceCouple + enhancesSingle + stepupGrant}</h4>
                  </h3>
                </div>
                <h3>
                  <h4>
                    Recommended Renovation Cost:
                    $
                    {renovate}
                  </h4>
                </h3>
              </div>
            )}
            {/*
            <OutputBox>
              <OutputInfo> {recommendation}</OutputInfo>
              {eligibility && (
                <OutputInfo>
                  Estimated Buying Power:
                  <h4>
                    <FaDollarSign /> {parseFloat(monthlyPayment.toFixed(2))}
                  </h4>
                </OutputInfo>
              )}
              {eligibility && (
                <OutputInfo>
                  Downpayment required(15%):
                  <h4>
                    <FaDollarSign />{" "}
                    {parseFloat(monthlyPayment * (0.15).toFixed(2))}
                  </h4>
                </OutputInfo>
              )}

              {eligibility && (
                <OptionBox>
                  Downpayment Option 1 Cashpayment:
                  <h4>
                    <FaDollarSign />
                    {paycash}
                  </h4>
                </OptionBox>
              )}
              {eligibility && (
                <OptionBox>
                  Downpayment Option 2 CPF:
                  <h4>
                    <FaDollarSign />
                    {paycpf}
                  </h4>
                </OptionBox>
              )}
            </OutputBox>
            {eligibility && (
              <GrantContainer>
                <InfoWrapper>
                  <InfoTitle>
                    <FaDollarSign />
                    Grants
                  </InfoTitle>
                  <InfoBox>
                    Step-Up CPF Housing Grant: <h4>{stepupgrant}</h4>
                  </InfoBox>
                  <InfoBox>
                    EHG Grant: <h4>{enhanceCouple + enhancesSingle}</h4>
                  </InfoBox>
                  <InfoBox>
                    Total Grant:{" "}
                    <h4>{enhanceCouple + enhancesSingle + stepupgrant}</h4>
                  </InfoBox>
                </InfoWrapper>
                <RecommendedBox>
                  <h4>
                    Recommended Renovation Cost:
                    <FaDollarSign />
                    {renovate}
                  </h4>
                </RecommendedBox>
              </GrantContainer>
            )}
          </Form>

          <ButtonContainer>
            <FormButton
              type="submit"
              // Percentage conversion
              onClick={() => {
                calculategrants();
                recommend();
                rec_recommend();
              }}
              className="btn btn-primary btn-lg w-100 center "
            >
              Calculate
            </FormButton>
            <StyledLink to={"/Mortgage"}>
              <Mortgagebutton>Mortgage</Mortgagebutton>
            </StyledLink>
          </ButtonContainer> */}
        </Form>
      </div>
    </div>
    );
}
 
export default CalculatorTest;