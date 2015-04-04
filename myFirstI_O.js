var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var buffString = buffer.toString();

var buffArray = buffString.split("\n");

console.log(buffArray.length - 1);