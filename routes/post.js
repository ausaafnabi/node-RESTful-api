const express = require('express')
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
	title:{
		type: String,
		required: "Title is required",
		minlength: 4,
		maxlength: 150
	},
	body:{

		type: String,
		required: "Title is required",
		minlength: 4,
		maxlength: 2000	
	}
})

const Post = mongoose.model("Post",postSchema);

const postController = require("../controllers/post")
//const Post = require('../models/post')
const router = express.Router()

const createPost = (req,res)=>{
	const post = new Post(req.body)
	console.log("CREATING POST:: ",post);
}

router.get('/', getPosts = (req,res)=>{
	res.json({
		posts: [
		{title:"First post"},{title:"SecondPost"}]
	});
});

router.post("/post",createPost);


module.exports=	router;
