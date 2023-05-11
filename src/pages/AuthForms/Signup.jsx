import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Input from "../../components/shared/Input/Input";
import Button from "../../components/shared/Button/Button";

const Signup = ({ tabSelected }) => {
  const [signUpInput, setSignupInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const inputChangeHandler = (e) => {
    setSignupInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const signUpFormSubmitHandler = (e) => {
    e.preventDefault();
    console.log(signUpInput);

    setSignupInput({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div
      //   style={{ background: tabSelected === 1 && "#b39ddb" }}
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

      <div className="d-flex justify-center gap-3 align-items-center">
        <form className="w-50" onSubmit={signUpFormSubmitHandler}>
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
            onChange={inputChangeHandler}
            input={{
              id: "confirmPassword",
              type: "password",
              name: "confirmPassword",
              value: signUpInput.confirmPassword,
            }}
          />
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
        <div
          className="w-50 p-3 border rounded-1"
          style={{
            backgroundColor: "ButtonShadow", color:"GrayText",
          }}
        >
          Username Example: john123 or john_123 .
          <ul>
            <li>Should start with a lowercase letter from (a-z)</li>
            <li>Must be between 4 to 14 characters long</li>
            <li>Must end with a letter (a-z) or number (0-9)</li>
            <li>Must not contain a sequence of two or more underscores (_)</li>
            <li>
              Can contain lowercase letters from (a-z), digits or underscores
            </li>
            <li>
              Please do not keep an explicit or inappropriate name/username. It
              may lead to suspension of your account.
            </li>
          </ul>
          Note: Choose wisely your username, for you will not be able to change
          it later.
        </div>
      </div>
    </div>
  );
};

export default Signup;
