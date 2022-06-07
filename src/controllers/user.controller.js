const User = require("../models/user.model");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.get('/users/all', async (req, res, next) => {
	let users;
	try {
		users = await User.find()
	} catch (err) {
		console.log(err)
	}

	if (!users) {
		return res.status(404).send({ message: "Users not found" })
	}
	return res.status(200).send({ users })
})

router.post('/users/signup', async (req, res) => {
	try {
		let data = await User.findOne({ email: req.body.email }).lean().exec();

		if (data)
			return res
				.status(400)
				.send({ message: "User is already registerd with this mail" });
		// const salt = await bcrypt.genSaltSync(10);
        // const hashPassword = await req.body.password;
		//const hashPassword = bcrypt.hashSync();
		
		data = await User.create(req.body);

		//const token = newToken(data);
		res.send({ data }).status(200);
	} catch (error) {
		res.send(error.message).status(500);
	}
});

 //  router.post ("/users/signup",async (req, res) => {
// 	try {
// 		let data = await User.findOne({ email: req.body.email }).lean().exec();

// 		if (data)
// 			return res
// 				.status(400)
// 				.send({ message: "User is already registerd with this mail" });

// 		data = await User.create(req.body);

// 		//const token = newToken(data);
// 		res.send({ data }).status(200);
// 	} catch (error) {
// 		res.send(error.message).status(500);
// 	}
// });


router.post("/users/login", async (req, res) => {
	const { email, password } = req.body;
	let data;
	try {
		data = await User.findOne({ email })
	} catch (error) {
		console.log(err)
	}
	if (!data) {
		return res.send({ message: "pass or user not found" }).status(400)
	}

	// const correctPassword = bcrypt.compareSync(password, data.password);
	const correctPassword = password

	if (!correctPassword) {
		return res.send({ message: "wrong credentials" }).status(400)
	}

	return res.send({ message: "login success" ,user:data}).status(200)
})

module.exports = router;



