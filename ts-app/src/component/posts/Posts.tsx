import React, {useReducer } from 'react';
import usePosts from '../../apiHooks/usePosts';
import PostsCard from './card/PostCard';
import PostsFilter from './PostsFilter';
import { initialState, PostsFilterReducer } from './PostsFilterReducer';

import "./Posts.scss";

type PropsType = {};

const Posts: React.FC<PropsType> = () => {
    const [state, dispatch] = useReducer(PostsFilterReducer, initialState);

    const { data, loading, error } = usePosts(state);

    return (
        <div className='posts-container'>

            <PostsFilter 
                count={data.count}
                state={state}
                dispatch={dispatch}
            />

            <div className='cards'>
                {data.results.map((item) => <PostsCard key={item.id} data={item}/>)}
            </div>
            {loading && "Loading..."}
            {error && "Error ("}
        </div>
    )
}


export default Posts;