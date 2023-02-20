import React from "react";
import { Button, Form } from "react-bootstrap";

export const RequestOTP = ({ handleOnChange, handleOnOtpRequest }) => {
  return (
    <div className="main password-reset ">
      <Form className="shadow-lg rounded" onSubmit={handleOnOtpRequest}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <h3 className="text-center">Forgot Password!</h3>
          <hr className="mb-5" />
          <p>
            {" "}
            Enter the email address associated with your account and we'll send
            you pin to reset your password.
          </p>

          <Form.Label> Email</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Request OTP
        </Button>
      </Form>
    </div>
  );
};
