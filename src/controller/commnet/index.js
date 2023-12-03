import commentModel from "../../model/comment/index.js";

const commentController = {
  create: async (req, res) => {
    try {
      const { auther, emailId, comment, postId } = req.body;
      const coment = await commentModel.create({
        auther,
        emailId,
        comment,
        postId:2
      });
      return res.status(201).json({ message: "comment added", coment });
    } catch (error) {
      return res.status(500).json({ message: "somethingh bad happen", error });
    }
  },
};
export default commentController;
