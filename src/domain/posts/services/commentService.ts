import { v4 as uuidv4 } from 'uuid';
import { openDatabase, createTables } from '../../../db/database';

export default {
    async getAllComments(id: string){
        const db = await openDatabase();
        const comments = await db.all('SELECT * FROM comments WHERE postId = ?', id);
        return comments;
    },
    async createPost(id: string, content: string){
        const commentId = uuidv4();
        const db = await openDatabase();
        const post = await db.get('SELECT * FROM posts WHERE id = ?', id);
        
        if (post) {
            await db.run('INSERT INTO comments (id, postId, content) VALUES (?, ?, ?)', [commentId, id, content]);
            return { commentId, postId: id, content };
        } else {
            throw new Error("Erro")
        }
    },
};