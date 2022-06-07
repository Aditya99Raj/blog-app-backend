const express = require('express');
const blogRouter = express.Router();

const Blogs = require("../models/blog")
const getAllBlogs = require("../controllers/blog.conroller");
const addBlog = require("../controllers/blog.conroller")
blogRouter.get('/',getAllBlogs);
blogRouter.post('/',addBlog);

module.exports = blogRouter;