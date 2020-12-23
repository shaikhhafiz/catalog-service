var http = require('http');

//TODO Improve this code readability
checkToken = async function(token) {
  return new Promise((resolve, reject) => {
    var options = {
      host: 'localhost',
      port: 8084,
      path: '/oauth/check_token/?token=' + token,
      method: 'POST'
    };
  
    const req = http.request(options);
    req.end();

    req.on('response', (res) => {
      res.setEncoding('utf8');
      res.on('data', function (data) {
        if(res.statusCode == 200) {
          resolve({statusCode: res.statusCode});
        } else {
          resolve({statusCode: res.statusCode, statusMessage: JSON.parse(data).error})
        }
      });
      res.on('error', (error) => {
        reject(error)
      })
    });
  
    req.on('error', function(error) {
      reject(error);
    });
  });
}

module.exports = checkToken;