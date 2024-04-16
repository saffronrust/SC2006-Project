import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../firebase";
import { sendPasswordReset } from "../../Utility/Database";
import { Button, Form, Input } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";

/**
 * This component is used to display the reset password form.
 * The user can reset their password by entering their email address.
 * An email will be sent to that address with instructions on how to reset the password.
 * @returns ResetBox component
 */
function ResetBox() {
  const [email, setEmail] = useState("");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/useraccount");
  }, [user, navigate]);

  return (
    <div className="reset">
      <div className="reset__container">
      <Title
        level={1}
      >
        Forgot Your Password?
      </Title>
      <Title
        level={4}
      >
        No worries! Enter your email below to reset!
      </Title>
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
      </Form>
        <Button
          className="reset__btn"
          onClick={() => sendPasswordReset(email)}
          type="primary"
          size="large"
        >
          Send password reset email
        </Button>
        <div>
          <Text>
            Don't have an account? </Text>
          <Link
            to="/signup"
          >
            <Text>
              Sign Up
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResetBox;