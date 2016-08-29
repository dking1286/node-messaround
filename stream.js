const express = require('express');
const stream = require('stream');

const app = express();

app.listen(3000);

app.use(consoleLogRequest);

app.get('/', (req, res, next) => {
  const message = new stream.Readable();
  message.push('Hello world!');
  message.push(null);

  message.pipe(res);
});

app.post('/', (req, res, next) => {
  req.pipe(res);
});


function consoleLogRequest(req, res, next) {
  const message = new stream.Readable();
  message.push(req.method);
  message.push(req.url);
  message.push('\n');
  message.push(null); // Note: Don't forget to push null...this shows that the streaming message is done!

  message.pipe(process.stdout);
  next();
}
