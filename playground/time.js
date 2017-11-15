var moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

var createdAt = 1000000000000;
var date = moment(createdAt);
console.log(date.format('MMM Do, YYYY'));
