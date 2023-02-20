import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const PassWordResetForm = ({ handleOnPasswordReset }) => {
  const [formDt, setFormDt] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormDt({
      ...formDt,
      [name]: value,
    });
  };
  const inputes = [
    {
      label: "OTP",
      type: "number",
      name: "otp",
      placeholder: "12345",
      required: true,
    },

    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Smith@email.com",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "********",
      required: true,
    },
    {
      label: "Confirm Password",
      type: "password",
      name: "confirmPassword",
      placeholder: "********",
      required: true,
    },
  ];
  return (
    <div className="main password-reset ">
      <Form
        className="shadow-lg rounded"
        onSubmit={() => handleOnPasswordReset(formDt)}
      >
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <h3 className="text-center">Reset your Password!</h3>
          <hr className="mb-5" />

          <Form.Label> OTP</Form.Label>
          <Form.Control type="pin" placeholder="Enter OTP" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
