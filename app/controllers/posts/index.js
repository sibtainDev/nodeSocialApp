import Post from '../../models/posts/postModel.js';

export const allPosts = async (req, res) => {
  const posts = await Post.find({})
  return res.status(200).json({success: true, posts: posts});
}


export const createPost = async (req, res) => {
  try{
    console.log(req.body);
    const post = new Post({
      ...req.body,
    })
    await post.save();
    return res.status(201).json({success: true, post: post});
  }
  catch(err){
    return res.status(400).json({error: err});
  }
}
