import { Router } from "express";
import commentController from "../../controller/commnet/index.js";
import commentValidators from "../../validators/comment/index.js";

const commentRouter = Router();

commentRouter.post("/comment", commentValidators.create, commentController.create);

export default commentRouter;
