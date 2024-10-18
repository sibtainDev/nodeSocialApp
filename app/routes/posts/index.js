import {allPosts, createPost} from "../../controllers/posts/index.js";
import express from "express";

const router = express.Router();

router.get("/", allPosts);
router.post("/", createPost);
export default router;
