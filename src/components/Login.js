import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

function Login() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    navigate('/');
  };

    const [user, setUser] = useState({});
    // const {state} = useLocation();
  
    const loginUser = (values) => {
      let response = {};
      //do some authentication and server response
      if(values.email === "ghate.s@northeastern.edu") {
        response = {
          name : "Shreya",
          email : values.email,
          authenticated : true
        }
      } else {
        response = {
          authenticated : false
        }
      }
      
      return response;
    }

  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          alert(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
        }) => (
          <div className="login">
            <div className="form">
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
    // <div className="login">
    //   <div className="form">
    //     <form noValidate onSubmit={handleSubmit}>
    //       <span>Login</span>

    //       <input
    //         type="email"
    //         name="email"
    //         placeholder="Enter email id / username"
    //         className="form-control inp_text"
    //         id="email"
    //       />

    //       <input
    //         type="password"
    //         name="password"
    //         placeholder="Enter password"
    //         className="form-control"
    //       />

    //       <button type="submit">Login</button>
    //     </form>
    //   </div>
    // </div>
  );
}

export default Login;
