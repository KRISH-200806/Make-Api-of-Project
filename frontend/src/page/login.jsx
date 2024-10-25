import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASEURL}/user/login`,
        { email, password },
        { withCredentials: true }
      );

      setSuccessMessage(response.data.message);
      toast.success(response.data.message);
      setLoading(false);
    } catch (err) {
      const errorResponse = err.response
        ? err.response.data.message
        : "An error occurred";
      setErrorMessage(errorResponse);
      toast.error(errorResponse);
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {errorMessage && <p className="error">{errorMessage}</p>}{" "}
        {successMessage && <p className="success">{successMessage}</p>}{" "}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="Button" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <div>
          <p style={{ paddingTop: "3px" }}>
            <a href="/signup" style={{ textDecoration: "none" }}>
              Signup
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
