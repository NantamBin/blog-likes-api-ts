import { Router } from 'express';
import postController from '../controllers/postController';
const postRouter = Router();
postRouter.get('/posts', postController.getAllPosts);
postRouter.get('/posts/:id', postController.getPost);
postRouter.post('/users', postController.createPost);
export default postRouter;