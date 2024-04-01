import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { signInWithGoogle, logInWithEmailAndPassword } from "../../Controllers/Database";
import { Button, Form, Input } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import "./index.css";

function LoginBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/useraccount");
  }, [user, loading]);

  return (
    <div className="login">
      <div className="login__container">
      <Title level={1}>Log In To SimplyStay!</Title>
      <Title level={4}>Welcome back! Login to your account</Title>
      <Form
        labelCol={{
          span: 8,
        }}
      >
        <Form.Item
          label="E-mail Address"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        </Form>
        <Button
          className="login__btn"
          type="primary"
          size="large"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </Button>
          <Link to="/reset"><Text>Forgot Password</Text></Link>
          <br/>
        <Button
            className="login__btn login__google"
            type="primary"
            size="large"
            onClick={signInWithGoogle}
        >
            Login with Google
        </Button>
        <br/>
        <div>
          <Text>
            Don't have an account? </Text><Link to="/signup">
            <Text>
                Sign Up
            </Text>
          </Link> now!
        </div>
      </div>
    </div>
  );
}

export default LoginBox;