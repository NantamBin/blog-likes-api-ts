import { v4 as uuidv4 } from 'uuid';
import { openDatabase, createTables } from '../../../db/database';

export default {
    async getAllComments(id: string) {
        const db = await openDatabase();
        const comments = await db.all('SELECT * FROM comments WHERE postId = ?', id);
        return comments;
    },
    async createPost(id: string, content: string) {
        const commentId = uuidv4();
        const db = await openDatabase();
        const post = await db.get('SELECT * FROM posts WHERE id = ?', id);

        if (post) {
            await db.run('INSERT INTO comments (id, postId, content, likes) VALUES (?, ?, ?, ?)', [commentId, id, content, 0]);
            return { commentId, postId: id, content };
        } else {
            throw new Error("Erro")
        }
    },
    async likeComment(id: string): Promise<number> {
        // TODO: Abra a conexão com o banco de dados.
        // TODO: Atualize a tabela de comentários, incrementando o número de likes.
        const db = await openDatabase();
        const post = await db.get('SELECT * FROM posts WHERE id = ?', id);
        await db.run('UPDATE posts SET likes = ? WHERE id = ?', [post.likes + 1, id]);
        const postAlterado = await db.get('SELECT * FROM posts WHERE id = ?', id);

        return postAlterado.likes;
    },
    async getCommentLikes(id: string): Promise<number> {
        // TODO: Abra a conexão com o banco de dados.
        // TODO: Retorne o número de likes para o comentário especificado pelo ID.
        const db = await openDatabase();
        const post = await db.get('SELECT * FROM posts WHERE id = ?', id);
        return post.likes;
    }
};