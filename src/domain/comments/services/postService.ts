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
        await db.run('INSERT INTO posts (id, title, content) VALUES (?, ?, ?)', [id, title, content]);

        return {id, title, content};
    },
    async getPost(id: string ){
        const db = await openDatabase();
        const post = await db.get('SELECT * FROM posts WHERE id = ?', id);
        return post;
    }
};