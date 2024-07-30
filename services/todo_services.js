const ToDoModel = require('../model/todo_model');

class ToDoServices{
    static async createToDo(userId, title, description){
        const createToDo = new ToDoModel({userId, title, description});
        return await createToDo.save();
    }

    static async getToDoData(userId){
        const todoData = await ToDoModel.find({userId});
        return todoData;
    }

    static async updateTodoData(dataId, title, description){
        const updateTodoData = await ToDoModel.updateOne(
            {_id : dataId},
            {$set:{
                title : title,
                description : description
            }}
        );
        return updateTodoData;
    }

    static async deleteToDoData(dataId){
        const deleteTodoData = await ToDoModel.findOneAndDelete({_id : dataId});
        return deleteTodoData;
    }
}

module.exports = ToDoServices;