import ResetBox from "../../Components/ResetBox";

/**
 * This component is used to display the password reset page.
 * @returns Reset component
 */
function Reset() {
  return (
    <div className="loginbackground">
      <div className="translucentbox">
        <div className="resetbox">
          <ResetBox />
        </div>
      </div>
    </div>
  )
}

export default Reset;