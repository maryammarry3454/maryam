// import LikeModel from "../../model/like/like.js";
import LikeModel from "../../model/like/like.js";
import PostModel from "../../model/post/post.js";
import UserModel from "../../model/user/user.js";
import CommentModel from "../../model/comment/comment.js";
const UserController={

    CreateUser:async(req,res)=>{
        try{

            const {userid,username,age,phoneno}=req.body;
            const data= await UserModel.create({
                userid,
                username,
                age,
                phoneno

            })
         
            return res.json({
                message:"Data is Inserted...",
                data,
            })


        }catch(error){
            return res.status(500).json({
                Message:"The error occur while adding new user..."
            })
        }
    },
    SearchUser:async(req,res)=>{
        try{ 
            const {search}=req.params;
            const data=await UserModel.findAll({
                where:{
                    userid:search
                },
                include:[
                
                    PostModel,
                    LikeModel,
                    CommentModel,
                   
                ]
          
                
               
                
            })

            return res.json({
                data,
            })



        }catch(error){
            return res.status(500).json({
                message:"there is something wrong"
            })
        }
    },
    UpdateUser:async(req,res)=>{
        try{
            const {userid,username,age,phoneno}=req.body;
            const data=await UserModel.findOne({
                where:{
                    userid,
                }
            })
            data.username=username,
            data.age=age,
            data.phoneno=phoneno
            const newdata= await data.save()
            return res.json({
                Message:"Data Updated...",
                newdata,
            })
        }
        catch(error){

            res.json({
                Message:error,
            })


        }
    },
    RemoveUser:async(req,res)=>{

        try{ 
            const {del}=req.params;
            const data=await UserModel.findOne({
                where:{
                    userid:del,
                }
               
                
            })
            await data.destroy()

            return res.json({
                message:"This Entry is Deleted...",
               
            })



        }catch(error){
            return res.status(500).json({
                message:error
            })
        }


    },
    DisplayUser:async(req,res)=>{

        try{
            const data= await UserModel.findAll()
            res.json({
                data
            })


        }catch(error){
            return res.status(500).json({
                message:error
            })
        }

    }

}


export default UserController;