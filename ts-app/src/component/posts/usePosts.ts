import { useEffect, useState } from 'react';
import PostType from '../../types/postType';

const URL = "https://studapi.teachmeskills.by/blog/posts/?limit=50&offset=0";

const usePosts = () => {

    const [posts, setPosts] = useState<PostType[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setLoading(true);
        setTimeout(() => {
            fetch(URL)
                .then((response) => response.json())
                .then((data) => {
                    const posts = data.results as PostType[];
                    setPosts(posts);
                })
                .catch(() => {
                    setError(true);
                })
                .finally(() => {
                    setLoading(false);
                })
        }, 0);
    }

    return { posts, loading, error };
}

export default usePosts;