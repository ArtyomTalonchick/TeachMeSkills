import React from 'react';
import PostType from '../../../types/postType';
import Image from '../../image/Image';

import "./PostCard.scss";


type PropsType = {
    data: PostType
}


const PostCard: React.FC<PropsType> = ({ data }) => {
    if (data.author === 8) {
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

export default PostCard;