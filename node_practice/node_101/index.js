const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log(req);
  if (req.url === '/') {
    const homePagePath = path.join(__dirname, 'public', 'home.html');
    fs.read(homePagePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html');
          res.write(`
                <html>
                    <body>
                        <h1>Page not found</h1>
                    </body>
                </html>
            `);
          res.end();
        } else {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/html');
          res.write(`
                <html>
                    <body>
                        <h1>A Server Error has occurred</h1>
                    </body>
                </html>
            `);
          res.end();
        }
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content, 'utf8');
      }
    });
  }

  if (req.url === '/write-message') {
    const writeMessagePagePath = path.join(__dirname, 'public', 'writeMessage.html');
    fs.read(writeMessagePagePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html');
          res.write(`
                <html>
                    <body>
                        <h1>Page not found</h1>
                    </body>
                </html>
            `);
          res.end();
        } else {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/html');
          res.write(`
                <html>
                    <body>
                        <h1>A Server Error has occurred</h1>
                    </body>
                </html>
            `);
          res.end();
        }
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content, 'utf8');
      }
    });
    if (req.url === '/write-message' && req.method === 'POST') {
      const body = [];

      req.on('data', (chunk) => {
        body.push(chunk);
      });

      req.on('end', () => {
        const message = Buffer.concat(body).toString();

        fs.writeFile('message.txt', message, (err) => {
          if (err) throw err;
          res.statusCode = 302;
          res.setHeader('Location', '/');
          return res.end();
        });
      });
    }

    if (req.url === '/read-message') {
      fs.readFile('message.txt', (err, data) => {
        if (err) throw err;
        const messages = data.toString().split('\n').filter(Boolean);

        let html = '<html><body><ul>';
        for (const message of messages) {
          html += `<li>${message}</li>`;
        }
        html += '</ul></body></html>';

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html);
        res.end();
      });
    }
  }
});

server.listen(8000);
