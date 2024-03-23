import React, { useState } from "react";
// import Background from "../img/bgp.jpg"
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      {/* <img className="bgimg" src={Background} alt="" /> */}
    {/* <img src="" alt="" />       */}
      <div className="formWrapper">
        <span className="logo">Convo hub</span>
        <span className="title">Login
        <img src="{}" alt="" />
        </span>
        <form  onSubmit={handleSubmit}>
          <input className="box box1  " type="email" placeholder="email" />
          <input className="box box2" type="password" placeholder="password" />
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
