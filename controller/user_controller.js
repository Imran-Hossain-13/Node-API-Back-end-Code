const { Error } = require('mongoose');
const UserServices = require('../services/user_services');

exports.register = async(req, res, next)=>{
    try{
        const {email, password} = req.body;

        const successRes = await UserServices.userRegistration(email,password);

        res.json({status:true,msg:'User register successfully'});
    }catch(error){
        res.json({status:false,msg:'User register failed'});
        throw error;
    }
}

exports.login = async(req, res, next)=>{ //2
    try{
        const {email, password} = req.body;

        const user = await UserServices.checkEmail(email);
        if(!user){
            throw new Error("Email not found");
        }

        const isMatch = await user.comparePassword(password);
        if(isMatch == false){
            throw new Error("Password invalid");
        }

        let tokenData = {_id : user._id, email : user.email};
        const token = await UserServices.genarateToken(tokenData, 'Imon', '24h');

        res.status(200).json({status:true,token:token});
    
    }catch(error){
        res.json({status:false,msg:'User register failed'});
        throw error;
    }
}