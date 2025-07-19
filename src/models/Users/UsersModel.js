const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
        email:{type:String,unique:true,required:true},
        name:{type:String,required:true},
        mobile:{type:String,unique:true},
        photo:{type:String},
        language:{type:String,enum:["English", "Vietnamese"],default:"English"},
        otp:{type:String,default:"0"},
        createdDate:{type:Date,default:Date.now()}
    },
    {versionKey:false}
)
const UsersModel = mongoose.model('users',UserSchema);
module.exports=UsersModel