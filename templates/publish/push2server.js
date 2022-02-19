const config = require('../config');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const packageInfo = require('../package.json');
const shell = require('shelljs');
const auth = require('./auth');

const { server, ...restConfig } = config;

function createtOrUpdateWidget(formData, token) {
  return axios.post(`${server}/api/widget`, formData, {
    headers: {
      ...formData.getHeaders(),
      authorization: 'Bearer ' + token,
    },
  });
}

module.exports = async function () {
  const key = packageInfo.name.split('/')[1];
  const dto = {
    key: key,
    version: packageInfo.version,
    desc: packageInfo.description,
    repository: packageInfo.repository.url,
    package: `https://www.npmjs.com/package/@phoenixs-widets/${key}`,
    ...restConfig,
  };
  const formData = new FormData();
  Object.keys(dto).forEach((key) => {
    !(dto[key] == null) && formData.append(key, dto[key]);
  });

  if (fs.existsSync('cover.png')) {
    const coverFile = fs.createReadStream('cover.png');
    formData.append('cover', coverFile);
  } else {
    throw new Error('找不到组件封面图，请在根目录放置cover.png作为封面图');
  }

  console.log('Step1: 打包文件...');
  shell.exec('npm run build');
  console.log('Step1: 完成打包');

  const codeFile = fs.createReadStream('dist/index.js');
  formData.append('code', codeFile);

  console.log('Step2: 上传至服务器...');
  await createtOrUpdateWidget(formData, auth.token);
  console.log('Step2: 上传成功');
};
