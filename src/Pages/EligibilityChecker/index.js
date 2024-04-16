import EligibilityBox from "../../Components/EligibiltyBox";

/**
 * This component is used to display the eligibility checker page.
 * @returns EligilityChecker component
 */
function EligilityChecker() {
  return (
    <div className="mainbackground">
      <div className="translucentbox">
        <EligibilityBox />
      </div>
    </div>
  );
}

export default EligilityChecker;
