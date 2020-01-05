const getPosts = (req,res)=>{
	res.json({
		posts: [
		{title:"First post"},{title:"SecondPost"}]
	});
};

exports = {
	getPosts
}