import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Input from "../../components/shared/Input/Input";
import FuncButton from "../../components/shared/Button/FuncButton";
import { login } from "../../http";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../store/store";

const Login = ({ tabSelected }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState({
    usernameOrEmail: "",
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

  const loginFormSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await login(loginInput).then((res) => {
        console.log(res);
        dispatch(addUser(res.data));
        navigate(`/${res.data._id}`);
      });
    } catch (error) {
      console.log(error);
    }
    setLoginInput({
      usernameOrEmail: "",
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
      <div>
        <Input
          id="email"
          label="Username or Email"
          onChange={inputChangeHandler}
          input={{
            id: "email",
            type: "email",
            name: "usernameOrEmail",
            value: loginInput.usernameOrEmail,
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
        <FuncButton
          onClick={loginFormSubmitHandler}
          label="Login"
          disableStatus={true}
        />
      </div>
    </div>
  );
};

export default Login;
