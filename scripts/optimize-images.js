const sharp = require("sharp");
const path = require("path");
const glob = require("glob");

const getFileInfo = (filePath) => {
  const dirName = path.dirname(filePath);
  const fullFileName = filePath.split("/").slice(-1)[0];
  const fileExtension = fullFileName.split(".").slice(-1)[0];
  const fileName = fullFileName.slice(0, -fileExtension.length - 1);

  return { dirName, fullFileName, fileExtension, fileName };
};

glob(path.join(__dirname, "../images/skill-up/**/[0-9].jpg"), async (err, files) => {
  for (const filePath of files) {
    const { dirName, fullFileName, fileExtension, fileName } = getFileInfo(filePath);

    await sharp(filePath).toFile(path.join(dirName, fileName + ".webp"));

    await sharp(filePath)
      .resize(100, 100)
      .toFile(path.join(dirName, fileName + `-100x100.jpg`));

    await sharp(filePath)
      .resize(100, 100)
      .toFile(path.join(dirName, fileName + `-100x100.webp`));

    console.log(filePath);
  }

  console.log("Done");
});
