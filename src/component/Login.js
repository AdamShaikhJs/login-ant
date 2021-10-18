import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import axios from "axios";
import "../App.css";
const Login = () => {
  const [inp, setInp] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inp;

  const handleChange = (e) => {
    setInp({ ...inp, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    axios
      .post("https://reqres.in/api/login", inp)
      .then((response) => {
        alert("login successful");
        console.log("token", response.data.token);
        if (response.data.token)
          localStorage.setItem("token", response.data.token);
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item>
        <h1 className="titleForm">Welocome back</h1>
        <h4 className="titleForm1">Sub-title goes here</h4>
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input
          name="email"
          value={email}
          onChange={(e) => handleChange(e)}
          placeholder="email"
        />
      </Form.Item>

      <Form.Item
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input
          name="password"
          value={password}
          onChange={(e) => handleChange(e)}
          placeholder="password"
        />
      </Form.Item>

      <Form.Item>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button className="loginBtn" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
