const { updateTaskService } = require('../services');

module.exports = async function updateTaskController(req,res){
    await updateTaskService(req.query._id, req.body);
    return res.sendStatus(200);
}