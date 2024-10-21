import mongoose from "mongoose";
import { isBooleanObject } from "util/types";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    email:{
        type:String,
        required:[true,'Email is required']
    },
    emailValidated:{
        type:Boolean,
        default:false
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
    img:{
        type:String,    
    },
    role:{
        type:[String],
        default: ['USER_ROLE'],
        enum: ['ADMIN_ROLE','USER_ROLE']    
    },
});

userSchema.set('toJSON', {
    virtuals:true,
    versionKey:false,
    transform: function(doc,ret,options){
        delete ret._id
    }
})

export const UserModel = mongoose.model('User',userSchema);