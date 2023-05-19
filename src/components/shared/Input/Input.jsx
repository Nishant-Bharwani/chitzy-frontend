import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label className="mb-2" htmlFor={props.id}>
        {props.label}:
      </label>
      <input
        onKeyUp={props.onKeyUp}
        onChange={props.onChange}
        className="p-1"
        ref={ref}
        {...props.input}
      />
    </div>
  );
});

export default Input;
