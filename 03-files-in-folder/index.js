const fs = require("fs"); //импорт fs
const path = require("path"); //импорт path
const secretFolder = path.join(__dirname,"secret-folder");

fs.promises.readdir(secretFolder,{withFileTypes: true})
    .then(filenames => {
    for(let filename of filenames) {
        if(filename.isFile()){
            let filePath = path.join(__dirname,"secret-folder",filename.name);
            
            fs.stat(filePath, (err, stats) => {
                if (err) throw err;
                let sizeFile = stats.size / 1024 + "kb";
                console.log(path.parse(filePath).name + " - " + path.parse(filePath).ext.slice(1) + " - " + `${sizeFile}`);
              });
        }
    }
})