import { Request, Response } from 'express';
import commentService from '../services/commentService';
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
    }
};