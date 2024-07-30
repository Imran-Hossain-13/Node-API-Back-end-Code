const mongoose = require("mongoose");

const connection = mongoose.createConnection('mongodb://localhost:27017/test').on('open',()=>{
    console.log('MongoDB conected');
}).on('error',()=>{
    console.log('MongoDB failed');
});

module.connection = connection;
module.exports = connection;