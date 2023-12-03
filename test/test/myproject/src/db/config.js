import { Sequelize } from "sequelize";

const sequelize =new Sequelize("Test","postgres","shahzaib12",{
    host:"localhost",
    Post:"5432",
    dialect:"postgres",
    logging:false,
})

export const DBConnection=async()=>{

    try{
       await sequelize.authenticate();
       console.log("DB is Connected Successfully...")

    }catch(err){
        console.log("DB is Not Connected")
    }
    
}

export default sequelize;