import SearchResultsBox from "../../Components/SearchResultsBox";

/**
 * This component is used to display the search results page.
 * @returns SearchResults component
 */
function SearchResults() {
    return (
        <div className="mainbackground">
            <div className="translucentbox">
                <div className="favbox">
                    <SearchResultsBox />
                </div>
            </div>
        </div>
    )
}

export default SearchResults;