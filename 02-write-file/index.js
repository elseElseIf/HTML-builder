const fs = require("fs"); //импорт fs
const path = require("path"); //импорт path
const outputFile = fs.createWriteStream("02-write-file/hello.txt"); //создание файла в папке задания

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

    console.log("Hi. How are you ?");

    rl.on('line', (input) => {
        if(input === "exit"){
            console.log("Thank you, by!");
            process.exit();  
        }
        outputFile.write(`${input} ${ "\n"}`);
    });
    rl.on('SIGINT', () => {
        console.log("Thank you, by!");
        rl.pause();
    });