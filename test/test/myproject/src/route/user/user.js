import { Router } from "express";
import UserController from "../../controller/user/user.js";
const UserRouter=Router();
UserRouter.post('/add',UserController.CreateUser);
UserRouter.post('/search/:search',UserController.SearchUser);
UserRouter.put('/update',UserController.UpdateUser);
UserRouter.delete('/delete/:del',UserController.RemoveUser);
UserRouter.get('/display',UserController.DisplayUser);



export default UserRouter;