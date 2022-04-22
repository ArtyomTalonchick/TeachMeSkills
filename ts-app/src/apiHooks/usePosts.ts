import PostsFilterType from '../component/posts/PostsFilterTypes';
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

const usePosts = ({ page, limit, ordering, author, lesson_num }: PostsFilterType) => {
    
    const offset = limit * (page - 1);

    let url = `${URL}?limit=${limit}&offset=${offset}&ordering=${ordering}`;

    if (author) {
        url += `&author=${author}`;
    }

    if (lesson_num) {
        url += `&lesson_num=${lesson_num}`;
    }

    return useRequest<ResponseType>(defValue, url);
}

export default usePosts;