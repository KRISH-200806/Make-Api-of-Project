const express = require("express");
const { getAlluser, getuser, AdminUpdate, Admindeletepost, createPost } = require("../controller/blog.controller");
const isAuth = require("../middleware/isAuth");
const CheckRole = require("../middleware/role");
const BlogRouter = express.Router();


BlogRouter.get("/",isAuth, getAlluser);
BlogRouter.get("/getuser",isAuth, getuser);
BlogRouter.post("/create", isAuth, createPost);
BlogRouter.patch("/update/:id/:userId",isAuth, CheckRole,AdminUpdate);
BlogRouter.delete("/dalete/:id/:userId", isAuth, CheckRole, Admindeletepost);

module.exports = BlogRouter;