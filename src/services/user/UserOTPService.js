const SendEmailUtility = require("../../utility/SendEmailUtility")

const UserOTPService = async (req,UserModel)=>{
    try{
        let Email = req.params.email;
        let code = Math.floor(100000+Math.random()*900000);
        let EmailText = `Your Verification Code is ${code}`;
        let EmailSubject = `Email Verification`
        await SendEmailUtility(Email,EmailText,EmailSubject)

        await UserModel.updateOne({email:Email},{$set:{otp:code}}, {upsert:true});
        return {status:"success", message:"6 Digit OTP has been send"}
    }
    catch(e){
        return {status:"fail", message:"Something went wrong", error:e.message}
    }
}
module.exports=UserOTPService;