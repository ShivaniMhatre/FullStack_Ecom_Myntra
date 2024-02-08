import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../Styles/Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { MyntraContext } from "./Context/MyContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import api from "./Config/APIConfig";

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const route = useNavigate();
  const { login, state } = useContext(MyntraContext);

  const handleLoginInput = (e) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    alert('hi')
    e.preventDefault();
    const { email, password } = loginInput;

    if (email && password) {
      try {
        const response = await api.post("/login", {
          loginInput,
        });

        if (response?.data?.success) {
          const user = response?.data?.userData;
          const token = response?.data?.token;

          login(user, token);

          toast.success(response.data.message);
          setLoginInput({
            email: "",
            password: "",
          });

          setTimeout(() => {
            route("/");
          }, 1000);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("please fill all the fields");
    }
  };

  useEffect(() => {
    if (state?.currentuser?.name) {
      route("/");
    }
  }, [state]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={700}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Navbar />
      <div id="login-body">
        <div id="login-form">
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/9d70554f-0a7d-49f1-a063-4c32800a9bfd1675792560640-offer-banner-400-600x240-code-_-MYNTRA300.jpg"
              alt=""
            />
          </div>

          <div id="login-middle">
            <div id="login-title">
              <h4>Login</h4>
              <p>or</p>
              <h4>Signup</h4>
            </div>

            {/* <!-- Login form --> */}

            <form onSubmit={handleLoginSubmit}>
              <input
                type="email"
                placeholder="Your Email"
                id="login_email_myntra"
                name="email"
                value={loginInput.email}
                onChange={handleLoginInput}
              />
              <input
                type="password"
                placeholder="Your Password"
                id="login_password_myntra"
                name="password"
                value={loginInput.password}
                onChange={handleLoginInput}
              />

              <div className="btn">
                <button type="submit" value="Login">
                  Login
                </button>
              </div>

              <div id="terms-conditions">
                <p>
                  By Continuing, I agree to the
                  <span>
                    Terms of Use
                    <span>&</span> Privacy Policy
                  </span>
                </p>
              </div>

              <div className="form-end">
                <p>
                  Have trouble logging in ? <span>Get help</span>
                </p>
              </div>

              <div className="form-end">
                <p>
                  New User ?
                  <span>
                    <NavLink to="/register"> Register Here </NavLink>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
