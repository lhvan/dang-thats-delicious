const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {

  // res.send('Hey! It works! a');
  res.render('hello', {
    name: "adfasdf",
    age: 30,
    dog: req.query.dog_name,
    title: 'I love food'
  });
});

module.exports = router;
