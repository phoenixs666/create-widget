const push2npm = require('./push2npm');
const push2server = require('./push2server');
const auth = require('./auth');
const fs = require('fs');

async function publish() {
  try {
    /** 推送到组件服务器 */
    await push2server();
    /** 推送到npm服务器 */
    await push2npm();
  } catch (e) {
    const status = e.response.status;
    if (status === 401) {
      console.log('Step2: token无效，重新获取token');
      const token = await auth.getToken();
      fs.writeFileSync('publish/token.txt', token);
      console.log('Step2: 已存储token，请重新发布');
    } else console.log('Error: ' + e.response?.data?.message || e?.message);
  }
}

publish();
