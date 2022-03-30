import React from 'react';
import PostType from '../../types/postType';
import PostsCard from './card/PostsCard';

import "./Posts.scss";

const data: PostType[] = [
    {
        "id": 1,
        "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png",
        "text": "Text of post here. Text of post here. Text of post here. Text of post here. Text of post here. Text of post here",
        "date": "2021-10-06",
        "lesson_num": 123,
        "title": "Title of post",
        "author": 7
    },
    {
        "id": 2,
        "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_17.37.38.png",
        "text": "Text",
        "date": "2021-10-07",
        "lesson_num": 48,
        "title": "Title",
        "author": 7
    },
    {
        "id": 3,
        "text": "dsfasdfsdfsdf",
        "date": "2021-10-07",
        "lesson_num": 48,
        "title": "Titfdsfdsfsdle",
        "author": 8
    },
];

type PropsType = {}

const Posts: React.FC<PropsType> = () => {

    return (
        <div className='posts-container'>
            {data.map((item) => <PostsCard key={item.id} data={item}/>)}
        </div>
    )
}

export default Posts;