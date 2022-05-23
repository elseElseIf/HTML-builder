const fs = require("fs"); //импорт fs
const path = require("path"); //импорт path

const stream = fs.createReadStream(path.join(__dirname,"text.txt"), 'utf8');
stream.on('data', function(chunk) { 
    data = chunk; 
    }).on('end', function() { 
    console.log(data); 
 }); 
