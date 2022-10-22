const sharp = require('sharp');
const fs = require('fs');
const path = require('path');


const [directory, width, height] = process.argv.slice(2);

const directoryPath = path.join(__dirname, directory);
let outputDirectoryExists = fs.existsSync(`${directoryPath}/output`);

function resizeImages() {
  fs.readdir(directoryPath, (err, filePaths) => {
    filePaths.forEach((filePath) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    if(!filePath.endsWith('.jpg')) {
      return;
    }
    if (!outputDirectoryExists){
      fs.mkdirSync(`${directoryPath}/output`);
      outputDirectoryExists = true;
    }
    console.log("converting", directoryPath+filePath);

    sharp(directoryPath+filePath)
      .resize({
        width: Number(width),
        height: Number(height),
        fit: sharp.fit.cover,
        position: sharp.strategy.entropy
      })
      .toFile(`${directoryPath}/output/${filePath.replace('.jpg', '.png')}`);
    });
  })
}

resizeImages();