import React from "react";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { RequestOTP } from "../../components/request-otp/RequestOTP";
import { PassWordResetForm } from "../../components/reset-password/PasswordResetForm.js/PasswordResetForm";

const ResetPassword = () => {
  const handleOnChange = (e) => {
    const { value } = e.target;
  };

  const handleOnOtpRequest = (e) => {
    e.preventDefault();
  };

  const handleOnPasswordReset = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header />

      <div className="main password-reset ">
        <RequestOTP
          handleOnChange={handleOnChange}
          handleOnOtpRequest={handleOnOtpRequest}
        />
        <PassWordResetForm handleOnPasswordReset={handleOnPasswordReset} />
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
