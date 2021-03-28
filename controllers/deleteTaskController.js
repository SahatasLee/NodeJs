const { query } = require('express');
const { deleteTaskService } = require('../services');

module.exports = async function deleteTaskController(req, res){
    await deleteTaskService(req.query.id);
    return res.status(200).send('delete done');
}