import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { toast } from "react-toastify";


function Signup() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");
  const [role, setrole] = useState("");
  const [location, setlocation] = useState("");
  const [DateOFBirth, setDateOFBirth] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `${process.env.REACT_APP_BASEURL}/user/signup`,
        { username, email, password, DateOFBirth, conpassword, role, location },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success(res.data.message || "user create SuccessFully");
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <form id="signupForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={conpassword}
            onChange={(e) => setconpassword(e.target.value)}
          />
          <div className="error" id="passwordError">
            Passwords do not match!
          </div>
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            value={DateOFBirth}
            onChange={(e) => setDateOFBirth(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setrole(e.target.value)}
          >
            <option value="Admin">Admin</option>
            <option value="user">user</option>
          </select>
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
          />
        </div>

        <button type="submit">Sign Up</button>
        <div>
          <p style={{ paddingTop: "3px" }}>
            <a href="/login" style={{ textDecoration: "none" }}>
              Login
            </a>
          </p>
        </div>
        <div className="success" id="successMessage"></div>
      </form>
    </div>
  );
}

export default Signup;
