import { Router } from 'express';
import commentController from '../../comments/controllers/commentController';
const { likeCommentById, getCommentLikesById } = commentController;

const commentRouter = Router();
commentRouter.get('/posts/:id/comments', commentController.getAllComments);
commentRouter.post('/posts/:id/comments', commentController.createComment);
// Rota para adicionar um like a um comentário
commentRouter.post('/:id/like', likeCommentById);
// Rota para obter o número de likes de um comentário
commentRouter.get('/:id/likes', getCommentLikesById);
export default commentRouter;