const { createTaskService } = require("../services");

module.exports = async function createTaskController (req, res) {
    console.log('post done.')
    await createTaskService(req.body);
    return res.status(200).send('post done');
};