import React from "react";
import { useFormik } from "formik";
import Robot from "./robot.png";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const initialValues = {
  name: "",
  phoneNumber: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Registration = () => {
  const navigate = useNavigate();
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phoneNumber: Yup.string().required("Phone Number is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (formValues) => {
      fetch("http://localhost:4000/addUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            resetForm();
            navigate("/Login");
          } else {
            if (data.error === 'Email already exists') {
              alert('Email already exists. Please use a different email.');
            } else {
              alert('An error occurred. Please try again later.');
            }
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  });

  return (
    <>
      <div className="SLcontainer">
        <div className="SLmodal">
          <div className="SLmodal-container">
            <div className="modal-left">
              <h1 className="modal-title">
                Welcome!<br />
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="input-block">
                  <label htmlFor="name" className="input-label">
                    Name
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name ? (
                    <p className="form-error">{errors.name}</p>
                  ) : null}
                </div>
                <div className="input-block">
                  <label htmlFor="phoneNumber" className="input-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    autoComplete="off"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <p className="form-error">{errors.phoneNumber}</p>
                  ) : null}
                </div>
                <div className="input-block">
                  <label htmlFor="email" className="input-label">
                    Email
                  </label>
                  <input
                    type="email"
                    autoComplete="off"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className="form-error">{errors.email}</p>
                  ) : null}
                </div>
                <div className="input-block">
                  <label htmlFor="password" className="input-label">
                    Password
                  </label>
                  <input
                    type="password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password ? (
                    <p className="form-error">{errors.password}</p>
                  ) : null}
                </div>
                <div className="input-block">
                  <label htmlFor="confirm_password" className="input-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    autoComplete="off"
                    name="confirm_password"
                    id="confirm_password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.confirm_password && touched.confirm_password ? (
                    <p className="form-error">{errors.confirm_password}</p>
                  ) : null}
                </div>
                <div className="modal-buttons">
                  <p className="sign-up">
                    <Link to="/Login">
                      <a href="#">Already have an account? </a>
                    </Link>
                  </p>
                  <button className="input-button" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-right">
              <img src={Robot} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
