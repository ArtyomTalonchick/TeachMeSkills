import PostsFilterType from '../component/posts/PostsFilterType';
import PostType from '../types/postType';
import useRequest from './useRequest';

const URL = "https://studapi.teachmeskills.by/blog/posts/";

type ResponseType = {
    count: number,
    next?: string,
    previous?: string,
    results: PostType[]
}

const defValue: ResponseType = {
    count: 0,
    results: []
}

const usePosts = ({ page, limit }: PostsFilterType) => {
    
    const offset = limit * (page - 1);

    let url = `${URL}?limit=${limit}&offset=${offset}`;

    return useRequest<ResponseType>(defValue, url);
}

export default usePosts;