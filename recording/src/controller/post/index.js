import postModel from "../../model/post/index.js";

const postController = {
  create: async (req, res) => {
    try {
      const { auther, emailId, content, userId } = req.body;
      const post = await postModel.create({
        auther,
        emailId,
        content,
        userId:1
      });
      return res.status(201).json({ message: "post added", post });
    } catch (error) {
      return res.status(500).json({ message: "somethingh bad happen", error });
    }
  },
};
export default postController;
