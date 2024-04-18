import { useState } from "react";

const LoginForm = () => {
  const [value, setValue] = useState();

  return (
    <>
      <div className="Form-container">
        <h2>Log In </h2>
        <div className="Form-inputs">
          <label className="inputTitle">Username</label>
          <input
            type="text"
            className="inputData"
            placeholder="Enter Username"
          ></input>
          <br />
          <label className="inputTitle">Password</label>
          <input
            type="password"
            className="inputData"
            placeholder="Enter Password"
          ></input>
          <br />
          <button type="submit">Login Now </button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
