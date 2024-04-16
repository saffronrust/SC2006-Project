import LoginBox from "../../Components/LoginBox";

/**
 * This component is used to display the login page.
 * @returns Login component
 */
function Login() {
  return (
    <div className="loginbackground">
      <div className="translucentbox">
        <div className="loginbox">
          <LoginBox />
        </div>
      </div>
    </div>
  )
}

export default Login;