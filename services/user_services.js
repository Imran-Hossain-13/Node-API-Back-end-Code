const UserModel = require('../model/user_model');
const jwt = require('jsonwebtoken');

class UserServices{
    static async userRegistration(email, password){
        try{
            const createUser = new UserModel({email, password});
            return await createUser.save();
        }catch(error){
            throw error;
        }
    }

    static async checkEmail(email){ //3
        try {
            return await UserModel.findOne({email});
        } catch (error) {
            throw error;
        }
    }

    static async genarateToken(tokenData, secretKey, jwt_expire){ //3
        return jwt.sign(tokenData, secretKey, {expiresIn:jwt_expire});
    }
}

module.exports = UserServices;