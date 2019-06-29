const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/uploader')
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');


const routes = new express.Router();
const upload = multer(uploadConfig);
//adicionando rota para store
routes.post('/posts',upload.single('image'), PostController.store);
//adicionando rota para retornar os posts
routes.get('/posts',PostController.index);
//adicionando rota para likes
routes.post('/posts/:id/like',LikeController.store);

module.exports=routes;