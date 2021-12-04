var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'flip3.engr.oregonstate.edu',
  user            : 'cs361_hopwoodb',
  password        : '3924',
  database        : 'cs361_hopwoodb'
});
module.exports.pool = pool;