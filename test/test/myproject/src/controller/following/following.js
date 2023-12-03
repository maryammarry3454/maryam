const FollowingController={

    CreateFollowing:(req,res)=>{
        try{

            // const {userid,username,age,phoneno}=req.body;
            res.json({
                message:"hello this is following.."
            })


        }catch(error){
            return res.status(500).json({
                Message:"The error occur while adding new following.."
            })
        }
    }

}


export default FollowingController;