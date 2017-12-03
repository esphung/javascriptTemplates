// SYNCHRONUS
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('file', 'utf8'));


// ASYNCHRONOUS
var fs = require('fs');

fs.writeFile('test.json', JSON.stringify({ a:1, b:2, c:3 }, null, 4));
/* test.json:
{
     "a": 1,
     "b": 2,
     "c": 3,
}
*/