const { TaskModel } = require("../models");

module.exports = async function updateTaskController(id, data){
    const task = await TaskModel.findOneAndUpdate({ _id: id}, data);
}