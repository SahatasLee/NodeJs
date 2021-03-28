const { TaskModel } = require("../models");

module.exports = async function getTaskService (isFinished) {
    const tasks = await TaskModel.find({isFinished: isFinished});
    return tasks;
}