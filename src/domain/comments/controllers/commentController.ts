import { Request, Response } from 'express';
import commentService from '../services/commentService';
const { likeComment, getCommentLikes } = commentService;


export default {
    async getAllComments(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const comments = await commentService.getAllComments(id);
            return res.status(200).json({
                status: 200, msg:
                    comments
            });
        } catch (error) {
            return res.status(400).json({
                status: 400, msg:
                    { error: "Erro ao listar posts" }
            });
        }
    },
    async createComment(req: Request, res: Response) {
        const { id } = req.params;
        const { content } = req.body;

        try {
            const newPost = await commentService.createPost(id, content);
            return res.status(201).json({
                status: 201, msg:
                    newPost
            });
        } catch (error) {
            return res.status(400).json({
                status: 400, msg:
                    { error: "Erro ao criar post" }
            });
        }
    },
    async likeCommentById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        // TODO: Chame a função do serviço para adicionar um like ao comentário.
        // TODO: Após adicionar o like, chame a função do serviço para obter o número atualizado de likes.
        // TODO: Retorne o número de likes como resposta em formato JSON.
        try {
            const likes = await commentService.likeComment(id);
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
    },

    async getCommentLikesById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        // TODO: Chame a função do serviço para obter o número de likes do comentário.
        // TODO: Retorne o número de likes como resposta em formato JSON.

        try {
            const likes = await commentService.getCommentLikes(id);
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