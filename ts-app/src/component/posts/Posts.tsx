import React, {useState} from 'react';
import usePosts from '../../apiHooks/usePosts';
import PostsCard from './card/PostCard';
import PostsFilter from './PostsFilter';
import PostsFilterType from './PostsFilterType';

import "./Posts.scss";

type PropsType = {};

const Posts: React.FC<PropsType> = () => {
    const [filter, setFilter] = useState<PostsFilterType>({
        page: 1,
        limit: 10,
    });

    const { data, loading, error } = usePosts(filter);

    return (
        <div className='posts-container'>

            <PostsFilter 
                count={data.count}
                filter={filter}
                setFilter={setFilter}
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