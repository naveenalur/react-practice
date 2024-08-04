import React, { useState } from "react";

import OtpInput from "./otp-input.jsx";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);

  function handlePhoneNumber(event) {
    setPhoneNumber(event.target.value);
  }
  function handlePhoneNumberSubmit(event) {
    event.preventDefault();
    const reg = new RegExp(/[^0-9]/g);
    if (phoneNumber.length > 10 || reg.test(phoneNumber)) {
      alert("Enter the proper number");
    }

    setShowOtpField(true);
  }

  function onOtpSubmit(otp) {
    console.log("login sucess", otp);
  }
  return (
    <div>
      {!showOtpField ? (
        <form onSubmit={handlePhoneNumberSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter your phonenumber"
          ></input>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter Otp sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit}></OtpInput>
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
