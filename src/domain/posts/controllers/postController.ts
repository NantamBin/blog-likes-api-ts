import { Request, Response } from 'express';
import postService from '../services/postService';
const { likePost, getPostLikes } = postService;

export default {
    async getAllPosts(req: Request, res: Response) {
        try {
            const posts = await postService.getAllPosts();
            if (posts) {
                return res.status(200).json({
                    status: 200,
                    msg: posts
                });
            } else {
                return res.status(404).json({
                    status: 404,
                    msg: { error: "Post não encontrado" }
                });
            }
        } catch (error) {
            return res.status(400).json({
                status: 400, msg:
                    { error: "Erro ao listar posts" }
            });
        }
    },
    async createPost(req: Request, res: Response) {
        const { title, content } = req.body;
        console.log("Dados recebidos:", { title, content });
        try {
            const newPost = await postService.createPost(title, content);
            if (newPost) {
                return res.status(200).json({
                    status: 200,
                    msg: newPost
                });
            } else {
                return res.status(404).json({
                    status: 404,
                    msg: { error: `Post não criado ${title} and ${content}` }
                });
            }
        } catch (error) {
            return res.status(400).json({
                status: 400, msg:
                    { error: `Erro ao criar post ${title} and ${content}` }
            });
        }
    },

    async getPost(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const post = await postService.getPost(id);
            if (post) {
                return res.status(200).json({
                    status: 200,
                    msg: post
                });
            } else {
                return res.status(404).json({
                    status: 404,
                    msg: { error: "Post não encontrada" }
                });
            }
        } catch (error) {
            return res.status(400).json({
                status: 400, msg:
                    { error: "Erro ao atualizar post" }
            });
        }
    },
    async likePostById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        // TODO: Chame a função do serviço para adicionar um like à postagem.
        // TODO: Após adicionar o like, chame a função do serviço para obter o número atualizado de likes.
        // TODO: Retorne o número de likes como resposta em formato JSON
        try {
            const post = await postService.likePost(id);
            if (post) {
                return res.status(200).json({
                    status: 200,
                    msg: post
                });
            } else {
                return res.status(404).json({
                    status: 404,
                    msg: { error: "Post não encontrado" }
                });
            }
        } catch (error) {
            return res.status(400).json({
                status: 400, msg:
                    { error: "Erro ao procurar post" }
            });
        }

    },
    async getPostLikesById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        // TODO: Chame a função do serviço para obter o número de likes da postagem.
        // TODO: Retorne o número de likes como resposta em formato JSON.
        try {
            const likes = await postService.getPostLikes(id);
            if (likes) {
                return res.status(200).json({
                    status: 200,
                    msg: likes
                });
            } else {
                return res.status(404).json({
                    status: 404,
                    msg: { error: "Post não encontrado" }
                });
            }
        } catch (error) {
            return res.status(400).json({
                status: 400, msg:
                    { error: "Erro ao procurar post" }
            });
        }
    }
};