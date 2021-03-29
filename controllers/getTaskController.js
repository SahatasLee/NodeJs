const { getTaskService } = require("../services");

module.exports = async function getTaskController(req, res){
    // console.log(req.query)
    const result = await getTaskService(req.query.isFinished);
    console.log(result);
    return res.send(result);
}