const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/my_database')

const Schema = mongoose.Schema;

const Account = new Schema({
    username: String,
    password: String
}, {
    collection: 'Account'
})

const AccountModel = mongoose.model('accountModel', Account)
module.exports = AccountModel