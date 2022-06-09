const express = require('express');
const connect = require("./configs/db")
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const blogController =require("./controllers/blog.conroller")
const authController = require("./controllers/user.controller")


app.use("/api",blogController);
app.use("/api",authController);
const port = process.env.PORT || 3000;
app.get("/", (req, res) => res.send("Working Fine"));

app.listen(port,async()=>{
    await connect();
    console.log("listening at port 3004");
})
