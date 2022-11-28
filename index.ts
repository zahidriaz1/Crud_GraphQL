import express from "express";
require('dotenv').config();
import {  ApolloServer } from "apollo-server-express";
import ConnectDb from './Src/ConnectDb/connect';
import typeDefs from "./Src/typeDefs/typeDefs"
import resolvers from './Src/resolvers/resolver'

const app = express();

app.use(express.json());

const StartServer= async()=>{
    await ConnectDb()
    const apolloServer= new ApolloServer({
        typeDefs,
        resolvers
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({app:app})
    app.listen(3001,()=>{
        console.log("Server is running on 3001")
    })
}
StartServer()

