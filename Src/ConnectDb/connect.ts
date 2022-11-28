import mongoose from "mongoose";
require('dotenv').config();
const ConnectDb =async ()=>{

    const dbUri:string = process.env.DBURI!;

    try {
    await mongoose
      .connect(dbUri);
    console.info("Database connected");
  } catch (error) {
    console.error("db error", error);
    process.exit(1);
  }

}
export default ConnectDb