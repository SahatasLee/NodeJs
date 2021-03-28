const { getTaskService } = require("../services");

module.exports = async function getTaskController(req, res){
    const result = await getTaskService(req.query.isFinished);
    console.log(result);
    return res.send(result);
}