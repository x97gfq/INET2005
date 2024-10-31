const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todoDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Schema and Model
const taskSchema = new mongoose.Schema({
    description: String
});

const Task = mongoose.model('Task', taskSchema);

// Prepopulate with sample data
const sampleTasks = [
    { description: 'Buy groceries' },
    { description: 'Walk the dog' },
    { description: 'Do laundry' }
];

Task.insertMany(sampleTasks)
      .then(function () {
        console.log("Sample tasks added successfully.");
      })
      .catch(function (err) {
        console.log(err);
      });

// Routes
app.get('/', (req, res) => {
    
    Task.find({ })
    .then(tasks => {
      console.log(tasks);
      res.render('index', { tasks: tasks });
    })
    .catch(err => {
      console.error(err);
    });    
});

app.post('/add', (req, res) => {
    const newTask = new Task({
        description: req.body.description
    });
    newTask.save();
    res.redirect('/');
});

app.post('/delete', (req, res) => {
    const taskId = req.body.taskId;
    Task.findByIdAndRemove(taskId, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

// Start the server
app.listen(3001, () => {
    console.log('Server is running on port 3000');
});
