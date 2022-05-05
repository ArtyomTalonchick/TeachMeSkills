import React, { useEffect, useReducer } from 'react';
import { useSelector } from "../hooks/useSelector";
import { useActions } from '../hooks/useActions';
import PostsCard from './card/PostCard';
import PostsFilter from './PostsFilter';
import { initialState, PostsFilterReducer } from './PostsFilterReducer';

import "./PostsPage.scss";

type PropsType = {};

const PostsPage: React.FC<PropsType> = () => {
    const [state, dispatch] = useReducer(PostsFilterReducer, initialState);
    const { fetchPosts } = useActions();

    const data = useSelector(state  => state.posts.data);
    const count = useSelector(state  => state.posts.count);
    const loading = useSelector(state  => state.posts.loading);
    const error = useSelector(state  => state.posts.error);

    useEffect(() => {
        fetchPosts(state);
    }, [state])

    return (
        <div className='posts-container'>

            <PostsFilter 
                count={count}
                state={state}
                dispatch={dispatch}
            />

            <div className='cards'>
                {data.map((item) => <PostsCard key={item.id} data={item}/>)}
            </div>
            {loading && "Loading..."}
            {error}
        </div>
    )
}


export default PostsPage;