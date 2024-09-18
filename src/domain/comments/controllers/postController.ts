import { Request, Response } from 'express';
import postService from '../services/postService';
export default {
    async getAllPosts(req: Request, res: Response) {
        try {
            const posts = await postService.getAllPosts();
            return res.status(200).json({
                status: 200, msg:
                    posts
            });
        } catch (error) {
            return res.status(400).json({
                status: 400, msg:
                    { error: "Erro ao listar posts" }
            });
        }
    },
    async createPost(req: Request, res: Response) {
        const { title, content } = req.body;
        try {
            const newPost = await postService.createPost(title, content);
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
    }
};