import likeModel from "../../model/like/index.js";

const likeController = {
  create: async (req, res) => {
    try {
      const { auther, emailId, like, postId } = req.body;
      const likes = await likeModel.create({
        auther,
        emailId,
        like,
        postId:2
      });
      return res.status(201).json({ message: "like added", likes });
    } catch (error) {
      return res.status(500).json({ message: "somethingh bad happen", error });
    }
  },
};
export default likeController;
