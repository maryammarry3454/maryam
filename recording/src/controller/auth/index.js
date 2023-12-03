import userModel from "../../model/user/index.js";
import jwt from "jsonwebtoken";
import { hash, compare } from "bcrypt";

const userController = {
  create: async (req, res) => {
    try {
      const { userName, emailId, password } = req.body;
      // check -- new
      const checkEmail = await userModel.findOne({
        where: {
          emailId,
        },
      });
      if (checkEmail) {
        return res.json({ message: `user with this ${emailId} exists ` });
      }
      // ----   password hashed
      const hpassword = await hash(password, 10);
      // --- new
      const user = await userModel.create({
        userName,
        emailId,
        password: hpassword, // new
      });
      return res.status(201).json({ message: "user added", user });
    } catch (error) {
      return res.status(500).json({ message: "somethingh bad happen", error });
    }
  },
  
  login: async (req, res) => {
    const { emailId, password } = req.body;
    const user = await userModel.findOne({
      where: {
        emailId,
      },
    });
    if (!user) {
      return res.json(`user with this ${emailId} not exists`);
    }
    const comparepassword = await compare(password, user.password);
    if (!comparepassword) {
      return res.json("invalid password");
    }
    return res.json(`Logging successfuly`)
    // neww
    const token = jwt.sign(data)
  },

};
export default userController;
