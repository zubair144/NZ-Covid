var fs = require('fs');
var file = __dirname + '\\files\\mega.json';

console.log(file);

fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    // console.log(JSON.parse(data))
    console.log('Error: ' + err);
    return;
  }

  data = JSON.parse(data);
// console.log(data.nzbnpubsec.entity)
// data.nzbnpubsec.entity.forEach(function(user){ 
//     console.log(user);
//   })

});