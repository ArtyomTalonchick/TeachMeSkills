import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useSelector';
import PostCard from '../postsPage/card/PostCard';

import "./MyPostsPage.scss";

type PropsType = {};

const MyPostsPage: React.FC<PropsType> = () => {
    const { fetchMyPosts } = useActions();

    const data = useSelector(state => state.posts.data);
    const loading = useSelector(state => state.posts.loading);
    const error = useSelector(state => state.posts.error);

    useEffect(() => {
        fetchMyPosts();
    }, []);

    return (
        <div className='posts-container'>
            <div data-testid="cards" className='cards'>
                {data.map((item) => <PostCard key={item.id} data={item}/>)}
            </div>
            {loading && "Loading..."}
            {error}
        </div>
    )
}


export default MyPostsPage;