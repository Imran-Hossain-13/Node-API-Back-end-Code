const db = require('../config/db');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;
const userSchema = new Schema({
    email : {
        type : String,
        lowercase : true,
        unique : true,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
});

userSchema.pre('save',async function(){
    try {
        var user = this;
        const salt = await(bcrypt,bcrypt.genSalt(10)); 
        const hashPass = await bcrypt.hash(user.password, salt); 

        user.password = hashPass;
    } catch (error) {
        throw error;
    }
});

userSchema.methods.comparePassword = async function(userPassword){ //4
    try {
        const isMatch = await bcrypt.compare(userPassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}

const UserModel = db.model('user',userSchema);

module.exports = UserModel;