import { schema } from 'normalizr';

export const post = new schema.Entity('posts');
export const arrayOfPosts = new schema.Array(post);

export const comment = new schema.Entity('comments');
export const arrayOfComments = new schema.Array(comment);


export const category = new schema.Entity('categories');
export const arrayOfCategories = new schema.Array(category);
