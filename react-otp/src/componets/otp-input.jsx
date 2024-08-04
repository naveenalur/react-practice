import React, { useState, useRef, useEffect } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    if (combinedOtp.length == length) {
      onOtpSubmit(combinedOtp);
    }

    if (value && index < length - 1 && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleOnClick = (index) => {};
  const handleOnKey = (index, event) => {};

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            ref={(input) => (inputRef.current[index] = input)}
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleOnClick(index)}
            onKeyDown={(e) => handleOnKey(index, e)}
            className="otpInput"
          ></input>
        );
      })}
    </div>
  );
};

export default OtpInput;
