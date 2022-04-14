import React from 'react';
import usePosts from './usePosts';
import PostsCard from './card/PostCard';

import "./Posts.scss";

type PropsType = {};


const Posts: React.FC<PropsType> = () => {
    const { posts, loading, error } = usePosts();

    return (
        <div className='posts-container'>
            {posts.map((item) => <PostsCard key={item.id} data={item}/>)}
            {loading && "Loading..."}
            {error && "Error ("}
        </div>
    )
}


export default Posts;