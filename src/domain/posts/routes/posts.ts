import { Router } from 'express';
import postController from '../../posts/controllers/postController';
const { likePostById, getPostLikesById } = postController;

const postRouter = Router();
postRouter.get('/posts', postController.getAllPosts);
postRouter.get('/posts/:id', postController.getPost);
postRouter.post('/posts', postController.createPost);
// Rota para adicionar um like a uma postagem
postRouter.post('/:id/like', likePostById);
// Rota para obter o número de likes de uma postagem
postRouter.get('/:id/likes', getPostLikesById);
export default postRouter;