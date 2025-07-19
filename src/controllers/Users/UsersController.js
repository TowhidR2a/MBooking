const UserOTPService = require('../../services/user/UserOTPService')
const VerifyLoginService = require('../../services/user/VerifyLoginService')
const UserModel = require("../../models/Users/UsersModel")
exports.UserOTP=async (req,res)=>{
    let result=await UserOTPService(req,UserModel)
    return res.status(200).json(result)
}

exports.VerifyLogin=async (req,res)=>{
    let result=await VerifyLoginService(req,UserModel)
    if(result['status']==="success"){
        //Cookie Set
        let cookieOption={expires: new Date(Date.now()+48*60*60*1000),httpOnly: false};
        //Set Cookie With Response
        res.cookie('token',result['token'],cookieOption)
        return res.status(200).json(result)

    }else{
        return res.status(200).json(result)
    }
}