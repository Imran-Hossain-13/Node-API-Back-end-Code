const app = require('./app');
const db = require('./config/db');
const userModel = require('./model/user_model');
const todoModel = require('./model/todo_model');

const port = 3000;

app.get('/',(req,res)=>{ });

app.listen(port, ()=>{
    console.log(`Server listening on Port http://localhost:${port}`)
});