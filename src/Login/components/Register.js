import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../styles/login.css";
import { useForm } from "../../utility/useForm";
export default function Register(props) {
  const [res, setRes] = useState();
  const [values, handleChange] = useForm({
    fname: "",
    lname: "",
    email: "",
    password1: "",
    password2: "",
  });

  useEffect(() => {
    console.log(res);
  }, [res]);

  async function postData(e) {
    e.preventDefault();
    if (values.password1 !== values.password2) {
      return console.log("password does not match");
    }
    const response = await fetch("http://localhost:5000/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: values.fname,
        lastname: values.lname,
        email: values.email,
        password: values.password1,
      }),
    });
    const data = await response.json();
    await setRes(data);
    //props.history.push("/profile");
    try {
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="login-wrapper">
      <h1 style={{ color: "white" }}>Register</h1>
      <form className="login-form" onSubmit={(e) => postData(e)}>
        <div className="form-card">
          <label htmlFor="email">First Name</label>
          <input
            type="text"
            name="fname"
            value={values.fname}
            onChange={handleChange}
          />
        </div>
        <div className="form-card">
          <label htmlFor="email">Last Name</label>
          <input
            type="text"
            name="lname"
            value={values.lname}
            onChange={handleChange}
          />
        </div>
        <div className="form-card">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-card">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password1"
            value={values.password1}
            onChange={handleChange}
          />
        </div>
        <div className="form-card">
          <label htmlFor="password">Re-enter Password</label>
          <input
            type="password"
            name="password2"
            value={values.password2}
            onChange={handleChange}
          />
        </div>
        <div className="button-wrapper">
          <button value="Submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
