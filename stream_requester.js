const request = require('request');

new Promise((resolve, reject) => {
  request.get({
    uri: 'http://localhost:3000',
  }, (error, response, body) => {
    if (error) return reject(error);

    console.log(body);
    resolve();
  });
}).then(() => {
  request.post({
    uri: 'http://localhost:3000/',
    body: 'hello'
  }, (error, response, body) => {
    console.log(body);
  });
});
