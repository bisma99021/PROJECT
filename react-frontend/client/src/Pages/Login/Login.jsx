import React from "react";
import { useFormik } from "formik";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import Robot from "./robot.png"
import * as Yup from "yup";
import axios from "axios";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: Yup.object({
        email: Yup.string()
          .required("Email is required!")
          .email("Invalid email format!")
          .max(50, "Email is too long!"),
        password: Yup.string()
          .required("Password is required!")
          .min(6, "Password is too short!")
          .max(28, "Password is too long!"),
      }),
      onSubmit: async (values, action) => {
        try {
          const response = await axios.post("http://localhost:4000/login", values);
          if (response.data.success) {
            // Redirect to the dashboard on successful login
            navigate("/dashboard");
          } else {
            // Handle unsuccessful login (incorrect credentials)
            alert("Invalid email or password. Please try again.");
          }
        } catch (error) {
          console.error("Error:", error);
        }
        action.resetForm();
      },
    });

  const handleSignupClick = () => {
    // Navigate to the signup page when the "Don't Have an Account?" link is clicked
    navigate("/SignUp");
  };

  return (
    <>
        <div className="SLcontainer">
          <div className="SLmodal">
            <div className="SLmodal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome Back<br></br><br></br><br></br></h1>
                <form onSubmit={handleSubmit}>
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
                  </div><br></br>
                  <div className="modal-buttons">
                    <p className="sign-up">
                       {/* Use Link to navigate to the signup page */}
                    <Link to="/SignUp"><a href="#">Dont Have an account? </a></Link>
                    </p>
                    <button className="input-button" type="submit"> 
                      Login
                    </button>
                  </div>
                </form>
                
              </div>
              <div className="modal-right">
                <img
                  src={Robot}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Login;
