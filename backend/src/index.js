const config = require('../src/config/config');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
//instanciando server http
const server = require('http').Server(app);
//adicionando protocolo socket io no server
const io = require('socket.io')(server);

mongoose.connect(config.mongodb.connection,{
    useNewUrlParser:true,    
});

app.use((req,res,next)=>{
    req.io = io;
    next();
});

app.use(cors());
//Adicionando caminho para acesso as imagens
app.use('/files',express.static(path.resolve(__dirname,'..','uploads','resized')));
//Adicionando arquivo de rotas
app.use(require('./routes'));

server.listen(3333);



