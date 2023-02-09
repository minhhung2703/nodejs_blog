const express = require('express');
const morgan = require('morgan');
const app = express();

const AccountModel = require('./models/account')

// Hứng data
const bodyParser = require('body-parser');

// const router = require('./apiRouter.js');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/register', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    AccountModel.findOne({
        username: username
    })
        .then(data => {
            if (data) {
                res.json('User da ton tai')
            }
            else {
                return AccountModel.create({
                    username: username,
                    password: password
                })
            }
        })
        .then(data => {
            res.json("Tao tai khoan thanh cong")
        })
        .catch(err => {
            res.status(500).json("Tao tai khoan that bai")
        })
})

app.post('/login', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    AccountModel.findOne({
        username: username,
        password: password
    })
        .then(data => {
            if (data) {
                res.json("Tai khoan ton tai")
            }
            else {
                res.status(400).json("Tai khoan khong dung")
            }
        })
        .catch(err => {
            res.status(500).json("Loi server 500")
        })
})

app.get('/', (req, res) => {
    res.json('home');
})

//https logger
app.use(morgan('combined'))

// app.use('/admin/api/v1', router);

app.listen(3000, () => {
    console.log(`Server started on port`);
});