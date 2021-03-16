const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('Hello world');
});

app.listen(1000, () =>{
    console.log('Start server at port 1000.');
});