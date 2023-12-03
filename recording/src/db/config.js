import { Sequelize } from "sequelize";

// new 
const dbenv = process.env;

const sequelize = new Sequelize(maryamproject, dbenv.DB_user,dbenv.DB_password ,{
  host: "localhost",
  port: 5000,
  dialect: "postgres",
  logging: false,
});

export const connectdb = async () => {
  try {
    await sequelize.authenticate();
    console.log("connection established");
  } catch (error) {
    console.log("connection not established", error);
  }
};

export default sequelize;
