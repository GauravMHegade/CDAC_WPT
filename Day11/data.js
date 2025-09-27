// 1) in http server pass data as query parameter
//   and use that data to display on HTML Page 
//   fName=ABC&lName=XYZ
// 	o/p Hello <fName>

const http = require('http');
const url = require('url');
const server = http.createServer( function(req, res){


 const parsedUrl = url.parse(req.url, true);
 const fName = parsedUrl.query;


 res.writeHead(200, { 'Content-Type': 'text/html' });

 if (fName) {
  res.end(`<h1>Hello ${fName}</h1>`);
 } else {
  res.end('<h1>Please provide an fName query parameter (e.g., /?fName=ABC)</h1>');
 }
});

server.listen(8080, () => {
 console.log(`Server start`);
});