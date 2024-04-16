import FavouriteBox from '../../Components/FavouriteBox'

/**
 * This component is used to display the favourites page.
 * @returns Favorites component
 */
function Favourites() {
    return (
        <div className="mainbackground">
            <div className="translucentbox">
                <div className='favbox'>
                    <FavouriteBox />
                </div>
            </div>
        </div>
    )
    
}

export default Favourites;