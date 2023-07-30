import React, { useState } from "react";
import "./login.css";
import homeLogo from "../../img/homeLogo.png";
import close from "../../img/close.png";
import { useFormik } from "formik";
import { loginSchema } from "./loginSchema";
import { Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState([]);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        console.log(values);
        setFormData([values]);
        action.resetForm();
      },
    });

  return (
    <div className="loginContainer ">
      <Link to="/home">
        <img className="close" src={close} alt="" />
      </Link>
      <div className="info">
        <img src={homeLogo} alt="" />
        <h4>Login Your Id</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="email" className="edit2">
            Email Id :{" "}
            <input
              className="input-p"
              type="email"
              placeholder="
        Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-error showErrors2">{errors.email}</p>
            ) : null}
          </label>
          <label htmlFor="password">
            Password :{" "}
            <input
              className="input-p"
              type="text"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form-error showErrors3">{errors.password}</p>
            ) : null}
          </label>
          <button type="submit" className="btn-l">
            Login
          </button>
        </div>
        <div className="formData">
          {formData.map((e, i) => {
            return (
              <div key={i}>
                <h4 className="showFormData">
                  Email : <p style={{ fontWeight: "normal" }}>{e.email}</p>
                </h4>
                <h4 className="showFormData">
                  Password :{" "}
                  <p style={{ fontWeight: "normal" }}>{e.password}</p>
                </h4>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default Login;
