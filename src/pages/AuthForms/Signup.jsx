import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Input from "../../components/shared/Input/Input";
import FuncButton from "../../components/shared/Button/FuncButton";
import { registerUser, sendOtp, verifyOtp } from "../../http";

const Signup = ({ tabSelected }) => {
  const [step, setStep] = useState(1);
  const [usernameActive, setUsernameActive] = useState(false);
  const [imageUploadActive, setImageUploadActive] = useState(false);
  const [otpData, setOtpData] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const [signUpInput, setSignupInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    username: "",
    profilePic: "",
  });

  const inputChangeHandler = (e) => {
    setSignupInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const confirmPasswordChangeHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const otpChangeHandler = (e) => {
    setOtpData(e.target.value);
  };

  const sendOtpHandler = () => {
    try {
      sendOtp({ email: signUpInput.email }).then((res) => {
        console.log(res.data);
        setOtpData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
    nextStep();
  };

  const verifyOtpHandler = () => {
    try {
      verifyOtp(otpData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
    console.log("OTP Verified!");
    setImageUploadActive(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setSignupInput((prev) => {
      return {
        ...prev,
        profilePic: url,
      };
    });
  };

  const imageUploadHandler = () => {
    console.log("Image Successfully Uploaded");
    setUsernameActive(true);
  };

  const signUpFormSubmitHandler = (e) => {
    console.log(signUpInput);
    try {
      registerUser(signUpInput).then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
    console.log("Register API successfully integrated");
    setSignupInput({
      name: "",
      email: "",
      phone: "",
      password: "",
      username: "",
      profilePic: "",
    });
  };

  const signupFormData = (key) => {
    switch (key) {
      case 1:
        return (
          <div className="d-flex justify-center gap-3 align-items-center">
            <div className="w-50">
              <Input
                id="name"
                label="Name"
                onChange={inputChangeHandler}
                input={{
                  id: "name",
                  type: "text",
                  name: "name",
                  value: signUpInput.name,
                }}
              />
              <Input
                id="email"
                label="Email"
                onChange={inputChangeHandler}
                input={{
                  id: "email",
                  type: "email",
                  name: "email",
                  value: signUpInput.email,
                }}
              />
              <Input
                id="phone"
                label="Phone Number"
                onChange={inputChangeHandler}
                input={{
                  id: "phone",
                  type: "number",
                  name: "phone",
                  value: signUpInput.phone,
                }}
              />
              <Input
                id="password"
                label="Password"
                onChange={inputChangeHandler}
                input={{
                  id: "password",
                  type: "password",
                  name: "password",
                  value: signUpInput.password,
                }}
              />
              <Input
                id="confirmPassword"
                label="Confirm Password"
                onChange={confirmPasswordChangeHandler}
                input={{
                  id: "confirmPassword",
                  type: "password",
                  name: "confirmPassword",
                  value: confirmPassword,
                }}
              />
              <FuncButton
                disableStatus={true}
                onClick={sendOtpHandler}
                label="Verify Email"
              />
            </div>
            <div
              className="w-50 p-3 border rounded-1"
              style={{
                backgroundColor: "ButtonShadow",
                color: "GrayText",
              }}
            >
              Username Example: john123 or john_123 .
              <ul>
                <li>Should start with a lowercase letter from (a-z)</li>
                <li>Must be between 4 to 14 characters long</li>
                <li>Must end with a letter (a-z) or number (0-9)</li>
                <li>
                  Must not contain a sequence of two or more underscores (_)
                </li>
                <li>
                  Can contain lowercase letters from (a-z), digits or
                  underscores
                </li>
                <li>
                  Please do not keep an explicit or inappropriate name/username.
                  It may lead to suspension of your account.
                </li>
              </ul>
              Note: Choose wisely your username, for you will not be able to
              change it later.
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="d-flex justify-center gap-3 align-items-center">
              <div className="w-50">
                <div>
                  <Input
                    id="otp"
                    label="Enter OTP"
                    onChange={otpChangeHandler}
                    input={{
                      id: "otp",
                      type: "number",
                      name: "otp",
                      value: otpData.otp,
                    }}
                  />
                  <FuncButton
                    disableStatus={true}
                    onClick={verifyOtpHandler}
                    label="Verify"
                  />
                </div>
                <Input
                  id="username"
                  label="Username"
                  onChange={inputChangeHandler}
                  input={{
                    id: "username",
                    type: "text",
                    name: "username",
                    value: signUpInput.username,
                    disabled: usernameActive ? "" : "disabled",
                  }}
                />
              </div>
              <div>
                <img
                  width="100px"
                  height="100px"
                  style={{ borderRadius: "100%" }}
                  src={signUpInput.profilePic}
                  alt="ProfileImage"
                />
                <input
                  type="file"
                  name="profilePic"
                  onChange={handleFileChange}
                />
                <FuncButton
                  disableStatus={imageUploadActive}
                  onClick={imageUploadHandler}
                  label="Upload Image"
                />
              </div>
            </div>
            <FuncButton
              onClick={signUpFormSubmitHandler}
              disableStatus={usernameActive}
              label="Register"
            />
          </div>
        );
      default:
        return <div></div>;
    }
  };

  return (
    <div
      //style={{ background: tabSelected === 1 && "#b39ddb" }}
      style={{ border: "1px solid #6210CC" }}
      className="p-5 m-auto"
    >
      <h3>Create an account</h3>
      <p>Use your social media credentials</p>
      <div className="socialMediaCredentialsWrapper d-flex justify-center gap-3">
        <div className="border border-2 p-2">
          <Icon icon="flat-color-icons:google" width={30} />
        </div>
        <div className="border border-2 p-2 cursor-pointer">
          <Icon icon="logos:facebook" width={30} />
        </div>
      </div>

      <p className="mt-2">--------- OR --------</p>
      {signupFormData(step)}
    </div>
  );
};

export default Signup;
