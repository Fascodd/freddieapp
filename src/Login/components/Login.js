import React, { useState, useEffect } from "react";
import "../styles/login.css";
import { useForm } from "../../utility/useForm";
export default function Login(props) {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    console.log(msg);
  }, [msg]);
  const [values, handleChange] = useForm({ email: "", password: "" });
  async function postData(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      const data = await response.json();
      await setMsg(data);
      await props.history.push(`/profile/${data.client_id}`, {
        data,
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="login-wrapper">
      <h1 style={{ color: "white" }}>Login</h1>
      <form className="login-form" onSubmit={(e) => postData(e)}>
        <div className="form-card">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-card">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
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
