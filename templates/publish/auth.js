const axios = require('axios');
const fs = require('fs');

var options = {
  method: 'POST',
  url: 'https://dev-xkvd6qcw.us.auth0.com/oauth/token',
  data: {
    grant_type: 'password',
    username: 'phoenix@gmail.com',
    password: 'Ias7Pamajac7',
    audience: 'https://localhost',
    scope: 'common',
    client_id: 'zBy79fxOQGFPVSlDlKkZgzXUuEgCoRQW',
    client_secret: '-0DQTZpgBT1ukWq8Fx_RueDhH_WEsKUJ6xNziFobQ62D9Jd_xD5QNPZXYbEvTCCu',
  },
};

function Auth() {
  this.token = fs.readFileSync('publish/token.txt').toString();
  this.getToken = () => {
    return axios
      .request(options)
      .then(function (response) {
        const t = response.data?.access_token;
        t && (this.token = t);
        return t;
      })
      .catch(function (error) {
        console.error(error.response.status, error.response.data);
      });
  };
}

const auth = new Auth();

module.exports = auth;
