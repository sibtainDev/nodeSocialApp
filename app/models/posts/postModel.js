import mongoose from "mongoose";


const postSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  isPublic: {
    type: Boolean,
    default: false,
  }
})
export default mongoose.model("Post", postSchema);
