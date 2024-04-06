import EligibilityBox from "../../Components/EligibiltyBox";
import HousingLoanCalcBox from "../../Components/HousingLoanCalcBox";

function Calculator() {
  return (
    <div className="mainbackground">
      <div className="translucentbox">
        {/* <EligibilityBox /> */}
        <HousingLoanCalcBox />
      </div>
    </div>
  );
}

export default Calculator;
