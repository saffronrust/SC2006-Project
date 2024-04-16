import ComparisonResultBox from "../../Components/ComparisonResultsBox";

/**
 * This component is used to display the compare results page.
 * @returns CompareResults component
 */
function CompareResults() {
    return (
        <div className="mainbackground">
            <div className="translucentbox">
                <div className="compareresults">
                    <ComparisonResultBox />
                </div>
            </div>
        </div>
      )
}

export default CompareResults;