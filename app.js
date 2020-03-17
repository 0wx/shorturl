const express = require('express');
const app = express();
const mg = require('mongoose');
const dotenv = require("dotenv");
const go = require('./routes/go');
const post = require('./models/post')
require('dotenv').config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/go', go);
app.get('/home', (req, res) => {
    res.redirect('/')
})
mg.connect(process.env.host, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('connected yay!');
})
.catch(err => {
    console.log('err! ' + err.message)
})



app.get('/', (req, res) => {
    res.sendFile(__dirname +'/view/index.html');
})

app.get('/:data', async (req, res) => {
    
    post.findOne({id: req.params.data})
    .then(url => res.status(301).redirect(url.link))
    .catch(err => res.sendStatus(404) )
})


app.listen(3000);