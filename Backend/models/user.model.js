import { Schema } from "mongoose";

const useSchema = new Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'First name must be atleast 3 characters long']
        },
        lastname:{
            type:String,
            minlength:[3,'Last name must be atleast 3 characters long']
        },
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'Email must be atleast 5 characters long']
    },
    password:{
        type:Number,
        required:true,

    },
    socketId:{
        type:String
    }

},{timestamps:true})