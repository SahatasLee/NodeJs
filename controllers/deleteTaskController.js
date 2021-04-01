const { query } = require('express');
const { deleteTaskService } = require('../services');

module.exports = async function deleteTaskController(req, res){
    // console.log('id : ' + req.params['id']);
    await deleteTaskService(req.params['id']);
    return res.status(200).send('delete done');
}