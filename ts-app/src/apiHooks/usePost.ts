import PostType from '../types/postType';
import useRequest from './useRequest';

const URL = "https://studapi.teachmeskills.by/blog/posts/";

const usePost = (id: string | undefined) => useRequest<PostType | undefined>(undefined, `${URL}/${id}`);

export default usePost;