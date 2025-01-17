const fs = require('fs');
const path = require('path');

async function initConfig() {
  try {
    const e2eConfigTemplate = fs.readFileSync(path.join(__dirname, '../templates/e2eConfig.js'), 'utf-8').toString();
    fs.writeFileSync(path.join(process.cwd(), '/e2e.config.js'), e2eConfigTemplate, 'ascii');


    const loginFile = fs.readFileSync(path.join(__dirname, '../templates/loginInfoTemplate.js'), 'utf-8').toString();
    fs.writeFileSync(path.join(process.cwd(), '/loginInfo.js'), loginFile, 'ascii');

    const templateFile = fs.readFileSync(path.join(__dirname, '../templates/template.js'), 'utf-8').toString();
    fs.writeFileSync(path.join(process.cwd(), '/template.js'), templateFile, 'ascii');
  } catch (error) {
    throw error;
  }
}

module.exports = {
  initConfig,
};
