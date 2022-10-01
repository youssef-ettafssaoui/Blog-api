import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register Page</h1>
      <form>
        <input type="text" placeholder="username" required />
        <input type="email" placeholder="email" required />
        <input type="password" placeholder="password" required />
        <button>Register Now !</button>
        <p>This is an Error !</p>
        <span>
          Do you have an account ? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
