// const http = require("http");
// const hostname ="127.0.0.1";
// const port = 8000;

// const server = http.createServer((req,res)=>{
//     res.statusCode=200;
//     res.end("This is the page");

// });

// server.listen(port , hostname, ()=>{
//     console.log(`server running at http://${hostname}:${port}/`);
// });


const fs= require('fs')
// const data =fs.readFileSync('demo.txt', 'utf-8');

// console.log(data)

// non blocking statement

// console.log('fetching the data')

// const data = fs.readFile('demo.txt','utf-8',(err,data) => {
//     console.log('data is fetched')
//     console.log(data)
// });



// file create and update statement

const data = fs.writeFile('new.txt','new file',(err , data) =>
{
    console.log('file is created')
});

const sec = fs.writeFile('second.txt','new file',(err , data)=>
{
    console.log('file is created')
});

const third = fs.writeFile('third.txt','new file',(err , data)=>
{
    console.log('file is created')
});

// const fourth = fs.writeFile('fourth.txt','new file', (err , data)=>
// {
//     console.log('file is created')
// });

// file deleted statement

const fourth = fs.unlink('fourth.txt',(err , data) =>
{
    console.log('file is deleted')
});
