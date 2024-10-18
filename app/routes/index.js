import express from 'express';
import postsRoutes from './posts/index.js';
const routes = express.Router();

routes.use('/posts', postsRoutes);
export default routes;
