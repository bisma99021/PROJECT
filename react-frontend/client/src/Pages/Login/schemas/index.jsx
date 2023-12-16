import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  number: Yup.string()
    .matches(/^(\+\d{12}|\d{11})$/, 'Please enter a valid phone number')
    .required("Please enter your number"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});


export const loginSchema = Yup.object({
  email: Yup.string()
    .required("Email is required!")
    .email("Invalid email format!")
    .max(50, "Email is too long!"),
  password: Yup.string()
    .required("Password is required!")
    .min(6, "Password is too short!")
    .max(28, "Password is too long!"),
});