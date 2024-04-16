import HousingLoanCalcBox from "../../Components/HousingLoanCalcBox";

/**
 * This component is used to display the housing loan calculator page.
 * @returns Calculator component
 */
function Calculator() {
  return (
    <div className="mainbackground">
      <div className="translucentbox">
        <HousingLoanCalcBox />
      </div>
    </div>
  );
}

export default Calculator;
