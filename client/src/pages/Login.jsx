import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login Page</h1>
      <form>
        <input type="text" placeholder="username" required />
        <input type="password" placeholder="password" required />
        <button>Login Now !</button>
        <p>This is an Error !</p>
        <span>
          Don't you have an account ? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
