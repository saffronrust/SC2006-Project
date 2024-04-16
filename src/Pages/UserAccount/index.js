import UserAccountBox from "../../Components/UserAccountBox";

/**
 * This component is used to display the user account page.
 * @returns UserAccount component
 */
function UserAccount() {
    return (
        <div className="loginbackground">
            <div className="translucentbox">
                <div className="useraccount">
                    <UserAccountBox />
                </div>
            </div>
        </div>
    )
}

export default UserAccount;