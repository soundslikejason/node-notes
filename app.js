console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Jason'));
var filteredArray = _.uniq(['Jason', 1, 'Jason', 1, 2, 3, 4]);
console.log(filteredArray);

// var res = notes.addNote();
// console.log(res);
//
// console.log('Result', notes.add(3, 5));

// var user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);