import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { registerWithEmailAndPassword, signInWithGoogle } from "../../Controllers/Database";
import { Button, Input } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import "./index.css";

function SignupBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
    navigate("/");
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <div className="register">
      <div className="register__container">
        <Title level={1}>Welcome To SimplyStay!</Title>
        <Title level={4}>Sign up using your email or Google account</Title>
        <Input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <Input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <Input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button
          className="register__btn"
          type="primary"
          size="large"
          onClick={register}>
          Register
        </Button>
        <br />
        <Button
          className="register__btn register__google"
          type="primary"
          size="large"
          onClick={signInWithGoogle}
        >
          Register with Google
        </Button>

        <div>
          {/* <Text>Already have an account? </Text><Link to="/login">Login</Link> */}
          <Text>Already have an account? </Text><Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignupBox;