const express = require('express');
const router1 = express.Router();

router1.get('/', (req, res) => {
    res.json("Admin page GET")
})

router1.post('/', (req, res) => {
    console.log(req.body);
    res.json("Admin page POST" + req.body.username + req.headers.phu)
})

router1.put('/', (req, res) => {
    res.json("Admin page PUT")

})

router1.delete('/', (req, res) => {
    res.json("Admin page DELETE")

})

module.exports = router1