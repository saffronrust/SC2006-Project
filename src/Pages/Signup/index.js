import SignupBox from "../../Components/SignupBox";

/**
 * This component is used to display the signup page.
 * @returns Signup component
 */
function Signup() {
  return (
    <div className="loginbackground">
      <div className="translucentbox">
        <div className="signupbox">
          <SignupBox />
        </div>
      </div>
    </div>
  )
}

export default Signup;