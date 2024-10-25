const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");
const fs = require ("fs")
const path = require ("path")
const signup = async (req, res) => {
  const {
    username,
    email,
    password,
    confirmpassword,
    DateOFBirth,
    location,
    role,
  } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        return res.status(500).json({ message: "Error hashing password" });
      }

      const user = new userModel({
        username,
        email,
        password: hash,
        DateOFBirth,
        confirmpassword: hash,
        location,
        role,
      });

      try {
        await user.save();
        res.status(200).json({ message: "User created successfully" });
      } catch (saveError) {
        res.status(400).json({
          message: "Error saving user to database",
          error: saveError.message,
        });
      }
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "An error occurred", error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        return res.status(500).json({ message: "Error comparing passwords" });
      }
      if (!result) {
        return res.status(400).json({ error: "Invalid password" });
      }
      const { password, ...rest } = user._doc;

      var token = jwt.sign({ userdata: rest }, "bjhjbiuv");

      if (!token) {
        return res.status(500).json({ error: "Error generating token" });
      }

      const logMessage = `User: ${user.username}, Role: ${user.role}\n`;
      fs.appendFile(
        path.join(__dirname, "../logs/log.txt"),
        logMessage,
        (err) => {
          if (err) throw err;
        }
      );

      return res
        .cookie("Access_Token", token)
        .status(200)
        .json({ message: "login successfully" });

    });
  } catch (error) {
    res.status(400).json({ error: error.massage });
  }
};

const logout = (req, res) => {
  res
    .clearCookie("Access_Token")
    .status(200)
    .json({ message: "Logout successfully" });
};

module.exports = {
  signup,
  login,
  logout,
};
