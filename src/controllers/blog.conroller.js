const express = require('express');
const router = express.Router();
const Blogs = require("../models/blog");
const User = require("../models/user.model")

router.get('/allblog',async(req, res) =>{
    let blogs ;
    try{
        blogs = await Blogs.find()
    }catch(err){
        console.log(err)
    }
    if(!blogs){
        return res.status(404).send({message:"not found"})
    }
    return res.send({blogs}).status(200)
});

router.post('/addblog',async(req, res) =>{
    const blog = await Blogs.create({
            title: req.body.title,
			description: req.body.description,
			image: req.body.image,
            user: req.body.user
    })

    let user = await User.findById(user);

    if(!user) return res.status(404).send({message:"not found"});
    return res.send(blog)
});

router.put("/updateblog/:id",async(req, res) =>{
    const {title, description} = req.body
    const blogId = req.params.id;
    const blog = await Blogs.findByIdAndUpdate(blogId,{
        title,
        description
    });

    if(!blog) return res.send({message: 'Not Found'}).status(500);

    return res.send({blog}).status(200)
});


router.get("/:id",async(req, res) =>{
    const blog = await Blogs.findById(req.params.id);

    if(!blog) return res.send({message: 'Not Found'});

    return res.send({blog}).status(200)
})
module.exports = router;