import SearchBox from "../../Components/SearchBox";

/**
 * This component is used to display the search page.
 * @returns Search component
 */
function Search() {
    return (
        <div className="mainbackground">
            <div className="translucentbox">
                <div className="searchbox">
                    <SearchBox />
                </div>
            </div>
        </div>
    )
}

export default Search;