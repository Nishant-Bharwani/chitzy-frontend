import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Input from "../../components/shared/Input/Input";

const Login = ({ tabSelected }) => {
  const [loginInput, setLoginInput] = useState({
    emailOrMobile: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    setLoginInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const loginFormSubmitHandler = (e) => {
    e.preventDefault();
    console.log(loginInput);
    setLoginInput({
      emailOrMobile: "",
      password: "",
    });
  };

  return (
    <div
      //   style={{ background: tabSelected === 0 && "#b39ddb"}}
      style={{ border: "1px solid #6210CC" }}
      className="p-5 m-auto"
    >
      <h3>Already have an account</h3>
      <p>Use your social media credentials</p>
      <div className="socialMediaCredentialsWrapper d-flex justify-center gap-3">
        <div className="border border-2 p-2">
          <Icon icon="flat-color-icons:google" width={30} />
        </div>
        <div className="border border-2 p-2">
          <Icon icon="logos:facebook" width={30} />
        </div>
      </div>
      <p className="mt-2">-------- OR --------</p>
      <form onSubmit={loginFormSubmitHandler}>
        <Input
          id="email"
          label="Email or Mobile"
          onChange={inputChangeHandler}
          input={{
            id: "email",
            type: "email",
            name: "emailOrMobile",
            value: loginInput.emailOrMobile,
            required: true,
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
            value: loginInput.password,
            required: true,
          }}
        />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
