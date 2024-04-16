import ComparisonBox from "../../Components/ComparisonBox";

/**
 * This component is used to display the compare page.
 * @returns Compare component
 */
function Compare() {
    return (
        <div className="mainbackground">
            <div className="translucentbox">
                <div className="comparebox">
                    <ComparisonBox />
                </div>
            </div>
        </div>
    )
}

export default Compare;