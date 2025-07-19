const CreateToken = require('../../utility/CreateToken')


const VerifyLoginService = async (req,UserModel)=>{
        try{
            let email = req.params.email;
            let otp = req.params.otp;
            let total = await UserModel.find({email:email, otp:otp}).countDocuments();
            if(total===1){
                //User ID Read
                let user_id = await UserModel.find({email:email, otp:otp}).select('_id')
                //User Token Create
                let token = await CreateToken(email,user_id[0]['_id'].toString())
                //OTP Code Update to ZERO (0)
                await UserModel.updateOne({email:email},{$set:{otp:"0"}});
                return {status:"success", message:"Valid OTP", token:token, total:total}

            }else{
                return {status:"fail", message:"Invalid OTP"}
            }
        }
        catch(e){
            return {status:"fail", message:e}
        }
}
module.exports=VerifyLoginService;