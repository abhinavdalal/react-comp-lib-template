const { readdirSync } = require('fs');
const path = require('path');

const getFolderPaths = (source) => {
  const foldersAtSource = readdirSync(
    path.resolve(__dirname, source), { withFileTypes: true },
  )
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
  const folderPaths = {};
  foldersAtSource.forEach(((f) => {
    folderPaths[f] = `./${source}/${f}/index.tsx`;
  }));
  return folderPaths;
};

const components = getFolderPaths('src/components');

module.exports = {
  components,
};
