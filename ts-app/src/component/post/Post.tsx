import React, { useEffect, useState } from 'react';
import PostType from '../../types/postType';
import PostCard from '../posts/postCard/PostCard';

type PropsType = {
    id: number
}

const URL = "https://studapi.teachmeskills.by/blog/posts/";

const Post: React.FC<PropsType> = ({ id }) => {
    const [post, setPost] = useState<PostType>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

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
    } else if (post) {
        return (
            <PostCard data={post}/>
        )
    }

    return null;


}

export default Post;