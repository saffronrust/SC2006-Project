import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithGoogle } from "../../Controllers/Database";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "antd";
import "./index.css";

function LoginBox() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      navigate("/useraccount");
    }
  }, [user, loading]);
  return (
    <div className="login">
        <Button
        type = "primary"
        size = "large"
        className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </Button>
      </div>
  );
}
export default LoginBox;
