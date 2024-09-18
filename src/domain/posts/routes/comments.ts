import { Router } from 'express';
import commentController from '../controllers/commentController';
const commentRouter = Router();
commentRouter.get('/posts/:id/comments', commentController.getAllComments);
commentRouter.post('/posts/:id/comments', commentController.createComment);
export default commentRouter;