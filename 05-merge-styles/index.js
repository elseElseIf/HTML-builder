const fs = require("fs"); //импорт fs
const path = require("path"); //импорт path
const styles = path.join(__dirname,"styles");
let resultArray = [];
const outputFile = fs.createWriteStream("05-merge-styles/project-dist/bundle.css");

fs.promises.readdir(styles,{withFileTypes: true})
    .then(filenames => {
    for(let filename of filenames) {
        let filePath = path.join(__dirname,"styles",filename.name);
        if(filename.isFile() && path.parse(filePath).ext == ".css"){
            fs.readFile(
                path.join(__dirname,"styles",filename.name),
                "utf-8",
                (err,data) => {
                    if(err) throw err;
                    resultArray.push(data);
                    outputFile.write(data.toString());
                }
            )  
        }
    }
})