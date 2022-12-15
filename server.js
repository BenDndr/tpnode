require('dotenv').config()
const pug = require("pug");
const http = require("http");
const dotenv = require('dotenv')


const students = [
    { name : "Sonia", birth : "2019-14-05"},
    { name : "Antoine", birth : "2000-12-05"},
    { name : "Alice", birth : "1990-14-09"},
    { name : "Sophie", birth : "2001-10-02"},
    { name : "Bernard", birth : "1980-21-08"}
];

const hostname = process.env.APP_LOCALHOST
const port = process.env.APP_PORT

const compileTemplate = pug.compileFile("view/home.pug", {pretty:true});
console.log(compileTemplate());

const server = http.createServer((req, res) => {
    const url = req.url.replace("/", "");
  
    if (url === "") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); 
      res.end(compileTemplate({students}));
    }
  
});
  
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});