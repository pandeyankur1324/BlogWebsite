import "./Forms.css";
import { useState } from "react";

const SignupForm = () => {
  const [formdata, setformdata] = useState({
    name: "",
    username: "",
    password: "",
  });

  const postData = async function (formdata) {
    const response = await fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });
    console.log(response);
    return response;
  };

  const onInputChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const submitteddata = (e) => {
    e.preventDefault();
    postData(formdata)
      .then(() => {
        console.log("Sign Up Successfull");
      })
      .catch((err) => {
        console.log("cant sign up", err);
      });
  };
  return (
    <>
      <div className="Form-container">
        <h2>Sign Up</h2>
        <div className="Form-inputs">
          <label className="inputTitle">Name</label>
          <input
            type="text"
            className="inputData"
            name="name"
            placeholder="Enter your Name"
            onChange={onInputChange}
          ></input>
          <br />
          <label className="inputTitle">Username</label>
          <input
            type="text"
            className="inputData"
            placeholder="Enter your Username"
            name="username"
            onChange={onInputChange}
          ></input>
          <br />
          <label className="inputTitle">Password</label>
          <input
            type="password"
            name="password"
            className="inputData"
            placeholder="Enter Password"
            onChange={onInputChange}
          ></input>
          <br />
          <button type="submit" onClick={submitteddata}>
            SignUp Now{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
