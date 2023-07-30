import React, { useState } from "react";
import "./signup.css";
import homeLogo from "../../img/homeLogo.png";
import close from "../../img/close.png";
import { useFormik } from "formik";
import { signupSchema } from "../Schema";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
  address: "",
};

const Signup = () => {
  const [formData, setFormData] = useState([]);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        console.log(values);
        setFormData([values]);
        action.resetForm();
      },
    });
  console.log(errors);

  return (
    <div className="signup-container">
      <Link to="/home">
        <img className="close" src={close} alt="" />
      </Link>
      <div className="info">
        <img src={homeLogo} alt="" />
        <h4>Create your account</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="name" className="edit">
            Full Name :{" "}
            <input
              className="input-p"
              type="text"
              placeholder="
        Enter your name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="form-error showErrors1">{errors.name}</p>
            ) : null}
          </label>
          <label htmlFor="email">
            Email Id :{" "}
            <input
              className="input-p"
              type="text"
              placeholder="Enter your Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-error showErrors2">{errors.email}</p>
            ) : null}
          </label>
          <label htmlFor="password" className="edit">
            Password :{" "}
            <input
              className="input-p"
              type="text"
              placeholder="
        Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form-error showErrors3">{errors.password}</p>
            ) : null}
          </label>
          <label
            htmlFor="phoneno"
            style={{ position: "relative", right: "-8px" }}
          >
            Phone :{" "}
            <input
              className="input-p"
              type="number"
              placeholder="Phone number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phone && touched.phone ? (
              <p className="form-error showErrors4">{errors.phone}</p>
            ) : null}
          </label>
          <label htmlFor="address">
            Address :{" "}
            <input
              className="input-p"
              type="text"
              placeholder="Enter your address"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          <button type="submit" className="btn-l">
            Sign Up
          </button>
        </div>
        <div className="formData">
          {formData.map((e, i) => {
            return (
              <div key={i}>
                <h4 className="showFormData">
                  Name : <p style={{ fontWeight: "normal" }}>{e.name}</p>
                </h4>
                <h4 className="showFormData">
                  Email : <p style={{ fontWeight: "normal" }}>{e.email}</p>
                </h4>
                <h4 className="showFormData">
                  Password :<p style={{ fontWeight: "normal" }}>{e.password}</p>
                </h4>
                <h4 className="showFormData">
                  Phone : <p style={{ fontWeight: "normal" }}>{e.phone}</p>
                </h4>
                <h4 className="showFormData">
                  Address-<p style={{ fontWeight: "normal" }}>{e.address}</p>
                </h4>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default Signup;
