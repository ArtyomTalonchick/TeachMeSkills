import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useSelector';
import Image from '../image/Image';

import "./PostPage.scss";

const PostPage: React.FC = () => {
    const { id } = useParams();

    const data = useSelector(state => state.post.data);
    const loading = useSelector(state => state.post.loading);
    const error = useSelector(state => state.post.error);

    const { fetchPost } = useActions();

    useEffect(() => {
        fetchPost(id);
    }, [id]);


    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    } else if (error) {
        return (
            <div>
                Error...
            </div>
        )
    }

    if (!data) {
        return null;
    }
    
    return (
        <div className='post-card-container'>

            <Image src={data.image}/>

            <div className='title'>
                {data.title}
            </div>
            <div className='text'>
                {data.text}                
            </div>
            <div className='date'>
                {data.date}
            </div>
        </div>
    )

}

export default PostPage;