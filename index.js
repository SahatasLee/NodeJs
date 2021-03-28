const express = require('express');
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');
const { connect } = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);

mongoose.connect("mongodb://localhost:27017/todona").then(() => {
    console.log('Database connected at port 27017.');
});

// app.get('/', (req, res) => {
//     res.send('Hello world. Test2');
// });

// app.get('/students', (req, res) => {
//     res.json(students);
// });

// app.get('/students/:id', (req, res) => {
//     res.json(students.find((students) => students.id === req.params.id));
// });

// app.post('/students', (req, res) => {
//     students.push(req.body);
//     res.status(201); // created
//     res.json(req.body);
// })

// app.put('/students/:id', (req, res) => {
//     const updateIndex = students.findIndex((students) => students.id === req.params.id);
//     res.json(Object.assign(students[updateIndex], req.body));
// });

// app.delete('/students/:id', (req,res)=>{
//     const delIndex = students.findIndex(
//         (students) => students.id === req.params.id
//     );
//     students.splice(delIndex, 1);
//     res.send(204);
// });

app.listen(1000, () => {
    console.log('Start server at port 1000.');
});

// localhost:1000 --> Web Server 
// localhost:27017 --> MongoDB database