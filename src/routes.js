const express = require('express');
const multer = require('multer');
const PostController = require('./controllers/post_controller');
const LikeController = require('./controllers/like_controller');
const uploadConfig = require('./config/upload');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);
routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;