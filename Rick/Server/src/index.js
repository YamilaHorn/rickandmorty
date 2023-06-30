const PORT = 3001
const server = require ('./app')
const { conn } = require('./DB_connection');

conn.sync({force: true})
    server.listen(PORT, () => console.log (`Listening on port: ${PORT}`))



// const http = require("http");
// const characters = require("./utils/data");
// const { getCharById } = require("./Controllers/getCharById");


// http.createServer((req, res)=> {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if (req.url.includes("/rickandmorty/character")){
        
//         const id = req.url.split("/").at(-1);
        
//         getCharById(res, Number(id));
//     }




// }).listen(3001, "localhost")