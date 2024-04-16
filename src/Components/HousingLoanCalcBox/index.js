/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Form, InputNumber, Button } from "antd";
import React, { useEffect, useState } from "react";
import { Typography } from "antd";

/**
 * This component is used to calculate the housing loan based on the user's input.
 * The user will be able to input the house price, loan amount, annual interest rate, and loan tenure.
 * The user will be shown the maximum loan amount, monthly installment, total amount repaid, total interest paid, and loan-to-value ratio.
 * @returns HousingLoanCalcBox component
 */
const HousingLoanCalcBox = () => {
  const [housePrice, setHousePrice] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [downpayment, setDownpayment] = useState(0);
  const [monthlyInterestRate, setMonthlyInterestRate] = useState(0);
  const [loanTenure, setLoanTenure] = useState(0);
  const [monthlyInstallment, setmonthlyInstallment] = useState(0);
  const [maxLoanAmount, setMaxLoanAmount] = useState(0);
  const [totalRepaid, setTotalRepaid] = useState(0);
  const [totalInterestPaid, setTotalInterestPaid] = useState(0);
  const [displayResult, setDisplayResult] = useState(false);

  useEffect(() => {
    calculateEverything();
  }, [monthlyInstallment, totalRepaid]);

  function calculateEverything() {
    // calculateMonthlyInstallment();
    // calculateTotalRepaid();
    // calculateTotalInterestPaid();
    let M =
      (loanAmount *
        (monthlyInterestRate * (1 + monthlyInterestRate) ** loanTenure)) /
      ((1 + monthlyInterestRate) ** loanTenure - 1);
    setmonthlyInstallment(M);
    setTotalRepaid(monthlyInstallment * loanTenure);
    setTotalInterestPaid(totalRepaid - loanAmount);
  }

  return (
    <div className="calculatorPage">
      <div>
        <Typography.Title level={2}>
          Calculate your Housing Loan
        </Typography.Title>
        <Form
          name="houseLoanCalc"
          labelCol={{
            span: 12,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          onFinish={() => {
            calculateEverything();
            setDisplayResult(true);
          }}
        >
          <Form.Item
            label="House Price"
            name="housePrice"
            // value={age}
            rules={[
              {
                type: "integer",
                min: 100000,
                max: 999999,
                message: "Please input a valid price.",
                required: true,
              },
            ]}
            onChange={(e) => {
              setHousePrice(e.target.value);
              setMaxLoanAmount(0.75 * e.target.value);
            }}
          >
            <InputNumber
              style={{ width: 150 }}
              placeholder="Enter price here"
            />
          </Form.Item>
          <Form.Item
            label="Loan amount"
            name="loan amount"
            rules={[
              {
                type: "integer",
                min: 1,
                max: 999999,
                //   max: 0.75 * housePrice,
                message: "Please input a valid amount.",
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || value <= 0.75 * getFieldValue("housePrice")) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "Loan amount cannot exceed 75% of house price"
                  );
                },
              }),
            ]}
            onChange={(e) => {
              setLoanAmount(e.target.value);
              setDownpayment(housePrice - loanAmount);
            }}
          >
            <InputNumber
              style={{ width: 150 }}
              placeholder="Enter amount here"
            />
          </Form.Item>

          <Form.Item
            label="Annual Interest Rate (%)"
            name="AnnualInterestRate"
            rules={[
              {
                type: "number",
                min: 0.1,
                max: 10,
                message: "Please input a valid interest rate.",
                required: true,
              },
            ]}
            onChange={(e) => setMonthlyInterestRate(e.target.value / 1200)}
          >
            <InputNumber
              style={{
                width: 150
              }}
              placeholder="Enter rate here"
            />
          </Form.Item>

          <Form.Item
            label="Loan Tenure (Years)"
            name="loantenure"
            rules={[
              {
                type: "integer",
                min: 1,
                max: 25,
                message: "Please input a valid loan tenure.",
                required: true,
              },
              (getFieldValue) => ({
                validator(_, value) {
                  if (!value || value <= 25) return Promise.resolve();
                  return Promise.reject(
                    "Loan tenure cannot exceed 25 years, assuming HDB loan"
                  );
                },
              }),
            ]}
            onChange={(e) => setLoanTenure(e.target.value * 12)}
          >
            <InputNumber
              style={{ width: 150 }}
              placeholder="Enter loan tenure"
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Calculate
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div>
        {displayResult && (
          <div className="loancalculatorResult">
            <Typography.Title level={2}>Housing Loan Details</Typography.Title>
            <h3 className="resultTitle">Maximum loan amount (75%): </h3>
            <p className="resultInfo">
              $
              {Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
                parseFloat(maxLoanAmount.toFixed(0))
              )}
            </p>
            <h3 className="resultTitle">Monthly Installment: </h3>
            <p className="resultInfo">
              $
              {Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
                parseFloat(monthlyInstallment.toFixed(0))
              )}
            </p>
            <h3 className="resultTitle">Total Amount Repaid: </h3>
            <p className="resultInfo">
              $
              {Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
                parseFloat(totalRepaid.toFixed(0))
              )}
            </p>
            <h3 className="resultTitle">Total Interest Paid:</h3>
            <p className="resultInfo">
              $
              {Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
                parseFloat(totalInterestPaid.toFixed(0))
              )}
            </p>
            <h3 className="resultTitle">Loan-To-Value:</h3>
            <p className="resultInfo">
              {Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
                parseFloat(((loanAmount / housePrice) * 100).toFixed(1))
              )}
              %
            </p>
            <br />
            <p className="resultInfo">
              Calculations provided are an estimate due to varying factors
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HousingLoanCalcBox;
