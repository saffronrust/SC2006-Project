import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { registerWithEmailAndPassword, signInWithGoogle } from "../../Utility/Database";
import { Button, Form, Input } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { message } from "antd";

function SignupBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name || !email || !password) {
      message.error("Please fill in all the fields!", 1.5)
      return;
    }
    if (!email.includes("@")) {
      message.error("Invalid email address!", 1.5)
      return;
    }
    if (password.length < 8) {
      message.error("Password must be at least 8 characters long!", 1.5)
      return;
    }
    registerWithEmailAndPassword(name, email, password);
    navigate("/");
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  return (
    <div className="register">
      <div className="register__container">
        <Title
          level={1}
        >
          Welcome To SimplyStay!
        </Title>
        <Title 
          level={4}
        >
          Sign up using your email or Google account
        </Title>
        <Form
          labelCol={{
            span: 8,
          }}
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Appleseed"
            />
          </Form.Item>
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
              placeholder="example@gmail.com"
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
          className="register__btn"
          type="primary"
          size="large"
          onClick={register}
        >
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
          <Text>Already have an account? </Text>
          <Link
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupBox;