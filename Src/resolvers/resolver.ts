import mongoose from "mongoose"
import User from "../models/user.models"
import { ObjectId } from "mongodb"

const resolvers = {
    Query:{
        hello:()=>{
            return "Hello to first querry"
        },
        getAllUsers :async()=>{
            try{
                const userFromDb = await User.find();
                return userFromDb
            }catch(e){
                    console.log("Error while getting all users from the database",e)
                return "Error while getting data from db"

            }
          
        }
    },
    Mutation:{
        
        createUser:async(parent:any, args:any, context:any , info:any)=>{
            try{
            
                const {name, email, age, city, country}= args.user
                await new User ({name, email, age, city, country}).save()
                return "User Created Successfully"
            }catch(e){
                console.log("Error while creating user", e)
                return "Error while creating user"
            }
        },




        deletUser:async(parent:any, args:any, context:any, info:any)=>{
            try{
                const {id}= args
                const isValidId = ObjectId.isValid(id)
                if(!isValidId){
                    return "Provided id is not a valid id"
                }
                 await User.findByIdAndDelete(id)
                return  "User deleted Successfully"
            }catch(e){
                
                console.log("Error while deleting user",e)
                return "Error while deleting user"

            }
          
        },
        updateUser:async(parent:any, args:any, context:any, info:any)=>{
            try{
                const { id } = args;
                const isValidId = ObjectId.isValid(id)
                if(!isValidId){
                    return "Provided id is not a valid id"
                }
                const {name, email, age, city, country}= args.user    
                await User.findByIdAndUpdate(id,{
                    name, email, age, city, country
                })
                return "Updated user"
            }catch(e){
                console.log("Error while updating user",e)
                return "Error while updating user"

            }
        }
    }
}
export default resolvers