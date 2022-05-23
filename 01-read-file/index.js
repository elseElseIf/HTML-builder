const fs = require("fs"); //импорт fs
const path = require("path"); //импорт path

fs.readFile(
    path.join(__dirname, "text.txt"),
    "utf-8",
    (err,data) => {
        if(err) throw err;
        console.log(data);
    }
)