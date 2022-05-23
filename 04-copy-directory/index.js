const fs = require("fs"); //импорт fs
const path = require("path"); //импорт path
const fsPromises = fs.promises;

async function checkDirctory() {
    await fsPromises.rm(path.join(__dirname, "files-copy"), { recursive: true, force: true })
    await fsPromises.mkdir(path.join(__dirname, "files-copy"), { recursive: true })
  .then(function () {
    // создать папку
    console.log("Directory created successfully");
  })
  .catch(function () {
    console.log("failed to create directory");
  });
  const filesFolder = path.join(__dirname, "files");

fs.promises.readdir(filesFolder, { withFileTypes: true }).then((filenames) => {
  for (let filename of filenames) {
    if (filename.isFile()) {
      let filePath = path.join(__dirname, "files", filename.name);
      let fileCopyPath = path.join(__dirname, "files-copy", filename.name);

      fsPromises.copyFile(filePath, fileCopyPath)
        .then(function () {
          console.log("File Copied");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
});
}
checkDirctory();