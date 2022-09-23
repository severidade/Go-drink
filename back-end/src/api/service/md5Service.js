const md5 = require('md5');
const fs = require('fs')

fs.readFile('example.txt', function(err, buf) {
  console.log(md5(buf));
});