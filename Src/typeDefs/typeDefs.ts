import { gql } from "apollo-server-express";

const typeDefs =
    gql`

type User {
    id:ID
    name:String 
    email:String
    age: String 
    city: String
    country:String
    createdOn:String, 
    status : Boolean  
}
        type Query {
            hello:String
            getAllUsers(koib:Boolean):[User]
        }

         input userInput{
            name:String 
            email:String
            age: String 
            city: CITIES 
            country:String
        }
        enum CITIES {
            Lahore
            Karachi
        }
        type Mutation {
            createUser(user: userInput):String
            deletUser(id:String):String
            updateUser(id:String,user:userInput):String
        }
    `

    export default typeDefs
