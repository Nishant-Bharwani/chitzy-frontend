import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../components/shared/Input/Input";
import FuncButton from "../../components/shared/Button/FuncButton";
import { registerUser, sendOtp, verifyOtp } from "../../http";
import { addUser } from "../../store/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = ({ tabSelected }) => {
  const [step, setStep] = useState(1);
  const [usernameActive, setUsernameActive] = useState(false);
  const [imageUploadActive, setImageUploadActive] = useState(false);
  const [otpData, setOtpData] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPassErr, setConfrimPassErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUpInput, setSignupInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    username: "",
    profilePic: null,
  });

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

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

  const handleValidation = (evnt) => {
    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;
    if (passwordInputFieldName === "password") {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{8,}/;
      const passwordLength = passwordInputValue.length;
      const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
      const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
      const digitsPassword = digitsRegExp.test(passwordInputValue);
      const specialCharPassword = specialCharRegExp.test(passwordInputValue);
      const minLengthPassword = minLengthRegExp.test(passwordInputValue);
      let errMsg = "";
      if (passwordLength === 0) {
        errMsg = "Password is empty";
      } else if (!uppercasePassword) {
        errMsg = "At least one Uppercase";
      } else if (!lowercasePassword) {
        errMsg = "At least one Lowercase";
      } else if (!digitsPassword) {
        errMsg = "At least one digit";
      } else if (!specialCharPassword) {
        errMsg = "At least one Special Characters";
      } else if (!minLengthPassword) {
        errMsg = "At least minumum 8 characters";
      } else {
        errMsg = "";
      }
      setPassErr(errMsg);
    }
    if (
      passwordInputFieldName === "confirmPassword" ||
      (passwordInputFieldName === "password" && confirmPassword.length > 0)
    ) {
      if (confirmPassword !== signUpInput.password) {
        setConfrimPassErr("Confirm password is not matched");
      } else {
        setConfrimPassErr("");
      }
    }
  };

  const otpChangeHandler = (e) => {
    setOtpData(e.target.value);
  };

  const sendOtpHandler = async () => {
    try {
      if (passErr.trim().length === 0 && confirmPassErr.trim().length === 0) {
        await sendOtp({ email: signUpInput.email }).then((res) => {
          console.log(res.data);
          setOtpData(res.data);
          nextStep();
        });
      } else {
        setStep((prev) => prev);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOtpHandler = async () => {
    try {
      await verifyOtp(otpData)
        .then((res) => {
          if (res.status === 200) {
            setImageUploadActive(true);
            console.log(res.data);
            toast.success(res.data.message);
          } else {
            toast.failure(`Email Verification Failed!`, {
              theme: "dark",
            });
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSignupInput((prev) => {
      return {
        ...prev,
        profilePic: file,
      };
    });
  };

  const imageUploadHandler = () => {
    if (
      signUpInput.profilePic !== null &&
      signUpInput.profilePic !== "https://picsum.photos/200/300    "
    ) {
      toast.success("Image Successfully Uploaded");
      setUsernameActive(true);
    } else {
      toast.failure("Upload Again!");
      setUsernameActive(false);
    }
  };

  const signUpFormSubmitHandler = async (e) => {
    try {
      await registerUser(
        {
          name: signUpInput.name,
          email: signUpInput.email,
          phone: signUpInput.phone,
          password: signUpInput.password,
          username: signUpInput.username,
        },
        signUpInput.profilePic
      ).then((res) => {
        console.log(res.data.user);
        dispatch(addUser(res.data.user));
        navigate(`/${res.data.user._id}`);
      });
    } catch (error) {
      console.log(error);
    }

    // setSignupInput({
    //   name: "",
    //   email: "",
    //   phone: "",
    //   password: "",
    //   username: "",
    //   profilePic: null,
    // });
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
                onKeyUp={handleValidation}
                input={{
                  id: "password",
                  type: "password",
                  name: "password",
                  value: signUpInput.password,
                }}
              />
              <p className="text-danger">{passErr}</p>
              <Input
                id="confirmPassword"
                label="Confirm Password"
                onChange={confirmPasswordChangeHandler}
                onKeyUp={handleValidation}
                input={{
                  id: "confirmPassword",
                  type: "password",
                  name: "confirmPassword",
                  value: confirmPassword,
                }}
              />
              <p className="text-danger">{confirmPassErr}</p>
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
              <ul>
                <li>Password field should not be empty</li>
                <li>
                  Password must contain one uppercase and one lowercase letter
                </li>
                <li>
                  Must contain a special character like (#,$,&,_) or digit (0-9)
                </li>
                <li>The lenth must be minimum 8 characters.</li>
              </ul>
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
                  src={
                    signUpInput.profilePic !== null
                      ? URL.createObjectURL(signUpInput.profilePic)
                      : "https://picsum.photos/200/300"
                  }
                  alt="ProfileImage"
                />
                <input
                  type="file"
                  name="profilePic"
                  accept="image/*"
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
