const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/K5-Nodemy');

const Schema = mongoose.Schema;

const account = new Schema({
    username: String,
    password: String,
    age: Number,
    salary: Number,
    bank: {
        type: String,
        ref: 'bankModel'
    },
    listCourse: {
        course: {
            type: String,
            ref: 'courseModel'
        }
    }
}, {
    collection: 'Account'
})
const course = new Schema({
    id: String,
    subject: String,
    teacher: {
        type: String,
        ref: 'accountModel'
    },
    lesson: [],
    address: {}
}, {
    collection: 'course'
})

const bank = new Schema({
    seri: {
        type: String,
        ref: 'bank'
    },
    bank: String
}, {
    collection: 'bank'
})

const AccountModel = mongoose.model('accountModel', account)
const CourseModel = mongoose.model('courseModel', course)
const Bank = mongoose.model('bankModel', bank)

AccountModel.find({
    username: 'student2'
})

    .populate('bank')
    // Cach 1
    // .populate({
    //     path: 'course',
    //     populate: { path: 'teacher' }
    // })
    //cach 2
    .populate('listCourse.course')
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })

CourseModel.find({

})



// Bai 2,3,4,5
// const AccountModel = mongoose.model('Account', account);

// tim nguoi >20 va salary >1000
// AccountModel.find({
//     age: { $gt: 20 },
//     salary: { $gt: 1000 }
// })
//     .sort('age')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })


// tim nguoi >20 hoac salary >1000
// AccountModel.find({
//     $or: [{ age: { $gt: 20 } }, { salary: { $gt: 1000 } }]
// })
//     .sort('age')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })


// AccountModel.find({
//     salary: { $in: [3000, 5000] }
// })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     }) 