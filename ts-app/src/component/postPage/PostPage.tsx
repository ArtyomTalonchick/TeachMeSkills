import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PostType from '../../types/postType';
import Image from '../image/Image';

import "./PostPage.scss";

const URL = "https://studapi.teachmeskills.by/blog/posts/";

const PostPage: React.FC = () => {
    const [post, setPost] = useState<PostType>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { id } = useParams();
    const x = useLocation();
    console.log(x);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setLoading(true);
        setTimeout(() => {
            fetch(`${URL}${id}`)
                .then((response) => response.json())
                .then((data) => {
                    const post = data as PostType;
                    setPost(post);
                })
                .catch(() => {
                    setError(true);
                })
                .finally(() => {
                    setLoading(false);
                })
        }, 0);
    }

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

    if (!post) {
        return null;
    }
    
    return (
        <div className='post-card-container'>

            <Image src={post.image}/>

            <div className='title'>
                {post.title}
            </div>
            <div className='text'>
                {post.text}                
            </div>
            <div className='date'>
                {post.date}
            </div>
        </div>
    )

}

export default PostPage;