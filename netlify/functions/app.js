const fs = require('fs');
const exec = require("child_process").exec;

exports.handler = async (event, context) => {
  if (event.path === '/') {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello world!" }),
    };
  } else if (event.path === '/sub') {
    try {
      const data = fs.readFileSync('./tmp/sub.txt', 'utf8');
      return {
        statusCode: 200,
        body: data,
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Error reading sub.txt' }),
      };
    }
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'Not found' }),
    };
  }
};