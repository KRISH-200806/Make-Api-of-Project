const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blogModel = require("../model/routes.model");

const getAlluser = async (req, res) => {
  const users = await blogModel.find();
  res.status(200).json(users);
};

const getuser = async (req, res) => {
  const user = await blogModel.findOne(req.params.id);
  console.log(user);
  if (user) {
    return res.status(400).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

const AdminUpdate = async (req, res) => {
  console.log(req.user._id);
  try {
    const post = await blogModel.findById({ _id: req.params.id });

    if (!post) {
      return res.status(400).json({ message: error.message });
    }
    const updatepost = await blogModel.findByIdAndUpdate(req.params.id, {
      $set: { ...req.body },
    });
    console.log(updatepost);
    res.status(200).json({ message: "post update succesfully", updatepost });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const Admindeletepost = async (req, res) => {
 
  try {
    const post = await blogModel.findById({ _id: req.params.id});
    console.log(post);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const deletedPost = await blogModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post deleted Succesfully", deletedPost });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  console.log(req.user);
  if (!req.body.title || !req.body.content) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  try {
    const post = await blogModel.create({ ...req.body, userId: req.user._id });
    console.log(req.body);
   return res.status(200).json({ post, message: "post create succesfully" });
  } catch (error) {
     res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPost,
  AdminUpdate,
  Admindeletepost,
  getAlluser,
  getuser,
};