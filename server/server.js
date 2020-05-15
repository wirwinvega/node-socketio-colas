const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.post("/user/login", (req, res) => {
    return res.json({
        "server": "heroku",
        "code": "200",
        "msg": "Success",
        "data": {
            "id": 14,
            "name": "Irving",
            "phone": "1234567890",
            "facebook": 0,
            "email": "irving@bitfx.mx",
            "payment_method": {
                "id": 1,
                "name": "Efectivo"
            }
        }
    });
});

// IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');





server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});