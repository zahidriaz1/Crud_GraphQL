import mongoose from "mongoose";
import { string, number, date } from 'yup'

const userSchema = new mongoose.Schema({
    name: string().required("User name is required"),
    email: string().required("User must have an email address"),
    age: number().required("User age is required"),
    city: string(),
    country: string(),
    createdOn: date().default(() => {
        return new Date()
    })
})

const User = mongoose.model("GQL User", userSchema)
export default User