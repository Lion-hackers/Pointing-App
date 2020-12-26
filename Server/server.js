const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = express.Router();
const app = express();
const PORT = 4000;
// DB Config
let User = require('./users.model');

// Middlwares
app.use(bodyParser.json());
app.use(cors());
app.use('/users', userRoutes);

// connect to Mongo
mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once('open', function(){
    console.log('MongoDB database connection established successfully');
})

// userRoutes.route('/').get(function(req, res) {
    
//     User.find(function(err, users){
//         if(err){
//             console.log(err)
//         }else{
//             res.json(users)
//         }
//     })
// })

// userRoutes.route('/:id').get(function(req, res){
//     let id = req.params.id;
//     User.findById(id, function(err, user){
//         if(err){
//             console.log(err)
//         }else{
//             res.json(user)
//         }
//     })
// })

// userRoutes.route('/add').post(function(req, res){
//     let user = new User(req.body);
//     user.save()
//         .then((user) => {
//             res.status(200).json(user);
//         })
//         .catch((err) =>{
//             res.status(400).send(err)
//         })
// })

// @route  GET api/users
// @description Get all users
userRoutes.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
})

// @route  POST api/users
// @description Create a user
userRoutes.post('/add', (req, res) => {
    const newUser = new User(req.body)
     newUser.save().then(user => res.json(user))
})

// @route  DELETE api/users/:id
// @description Delete a user
userRoutes.delete('/:id', (req, res) => {
    User.findById(req.params.id).then(user => user.remove().then(user => res.json({deleted: true})))
    .catch(err => res.status(404).json({deleted: false}));
})

app.listen(PORT, function(){
    console.log("Server is running on port " + PORT);
})