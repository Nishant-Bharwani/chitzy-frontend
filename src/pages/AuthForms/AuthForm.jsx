import React from "react";
import { Tab, Tabs } from "@mui/material";
import Login from "./Login";
import Signup from "./Signup";
import styles from "./Authform.module.css";

const AuthForm = () => {
  const [value, setValue] = React.useState(1);

  return (
    <div className={`${styles.authformWrapper}`}>
      <Tabs
        value={value}
        textColor="primary"
        indicatorColor="primary"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Tab label="Login" className={`${value === 0 && styles.activeTab}`} />
        <Tab label="Signup" className={`${value === 1 && styles.activeTab}`} />
      </Tabs>
      <div className="formContainer">
        {value === 0 && <Login tabSelected={value} />}
        {value === 1 && <Signup tabSelected={value} />}
      </div>
    </div>
  );
};

export default AuthForm;
