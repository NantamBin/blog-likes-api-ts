import { v4 as uuidv4 } from 'uuid';
import { openDatabase, createTables } from '../../../db/database';

export default {
    async getAllPosts(){
        const db = await openDatabase();
        const posts = await db.all('SELECT * FROM posts');
        return posts;
    },
    async createPost(title: string, content: string){
        const id = uuidv4();
        const db = await openDatabase();
        await db.run('INSERT INTO posts (id, title, content, likes) VALUES (?, ?, ?, ?)', [id, title, content, 0]);

        return {id, title, content};
    },
    async getPost(id: string ){
        const db = await openDatabase();
        const post = await db.get('SELECT * FROM posts WHERE id = ?', id);
        return post;
    },
    async likePost(id: string): Promise<number> {
        // TODO: Abra a conexão com o banco de dados.
        // TODO: Atualize a tabela de posts, incrementando o número de likes.
        const db = await openDatabase();
        const post = await db.get('SELECT * FROM posts WHERE id = ?', id);
        await db.run('UPDATE posts SET likes = ? WHERE id = ?', [post.likes + 1, id]);
        const postAlterado = await db.get('SELECT * FROM posts WHERE id = ?', id);

        return postAlterado.likes;
    },
    async getPostLikes(id: string): Promise<number> {
        // TODO: Abra a conexão com o banco de dados.
        // TODO: Retorne o número de likes para o post especificado pelo ID.
        const db = await openDatabase();
        const post = await db.get('SELECT * FROM posts WHERE id = ?', id);
        return post.likes;
    }
    
};