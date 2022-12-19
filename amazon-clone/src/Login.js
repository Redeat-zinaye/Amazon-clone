import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) navigate("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(auth)
        if (userCredential) {
          navigate("/");
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          />
        </Link>
        <div className="login__container">
          <h1>Sign-in</h1>

          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              onClick={signIn}
              className="login__signInButton"
            >
              Sign In
            </button>
          </form>

          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>

          {/* <button onClick={register} className="login__registerButton">
            Create your Amazon Account
          </button> */}
        </div>

        <div className="footer">
          <div className="footer__new">
            <h5>
              <span>New to Amazon?</span>
            </h5>
          </div>
          <button onClick={register} className="login__registerButton"> 
            Creat your Amazon account
          </button>

          <div className="inner-divider">

          </div>

          <div className="footer__link">
            <ul>
              <li>
                {" "}
                <a target="_blank"  href="https://www.amazon.ca/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=918816">
                Conditions of Use 
                </a>{" "}
              </li>
              <li>
                {" "}
                <a target="_blank"  href="https://www.amazon.ca/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=918814">
                  Privacy Notice
                  </a>{" "}
              </li>
              <li>
                {" "}
                <a target="_blank"  href="https://www.amazon.ca/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=918814" >
                  Help
                </a>{" "}
              </li>
            </ul>
          </div>

          <div className="mini-note">
            <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
