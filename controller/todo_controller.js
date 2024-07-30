const ToDoServices = require('../services/todo_services');

exports.createTodo = async(req, res, next)=>{
    try {
        const {userId,title, description} = req.body;

        const successRes = await ToDoServices.createToDo(userId,title, description);

        res.json({status:true,msg: successRes});
    } catch (error) {
        res.json({status:false,msg:'Data add failed'});
        throw error;
    }
        
}

exports.getUserTodoList = async(req, res, next)=>{
    try {
        const {userId} = req.body;

        const successRes = await ToDoServices.getToDoData(userId);

        res.json({status:true,data: successRes});
    } catch (error) {
        res.json({status:false,msg:'Data add failed'});
        throw error;
    }
        
}

exports.updateTodoData = async(req, res, next)=>{
    try {
        const {dataId, title, description} = req.body;

        const successRes = await ToDoServices.updateTodoData(dataId, title, description);

        res.json({status:true,response: successRes});
    } catch (error) {
        res.json({status:false,msg: 'Data update failed'});
        // throw error;
    }
        
}

exports.deleteTodoData = async(req, res, next)=>{
    try {
        const {dataId} = req.body;

        const successRes = await ToDoServices.deleteToDoData(dataId);

        res.json({status:true,response: successRes});
    } catch (error) {
        res.json({status:false,msg: 'Data delete failed'});
        // throw error;
    }
        
}