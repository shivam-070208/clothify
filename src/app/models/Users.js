import mongoose, { Types } from "mongoose";

const user = new mongoose.Schema({
    name:{Types:String},
    email:{Types:String},
    feedback:{Types:String}
})


const UserModel =  mongoose.model('users',user)

export default UserModel;