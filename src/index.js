const express = require('express');
const connect = require("./configs/db")
const app = express();
app.use(express.json());

const blogController =require("./controllers/blog.conroller")
const authController = require("./controllers/user.controller")


app.use("/api",blogController);
app.use("/api",authController);

app.listen(3004,async()=>{
    await connect();
    console.log("listening at port 3004");
})