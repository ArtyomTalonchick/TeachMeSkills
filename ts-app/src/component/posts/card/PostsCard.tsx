import React, { useState } from 'react';
import PostType from '../../../types/postType';

import "./PostsCard.scss";


type PropsType = {
    data: PostType
}


const PostsCard: React.FC<PropsType> = ({ data }) => {

    const [error, setError] = useState(false);

    if (data.author === 8) {
        return null;
    }

    const onError = () => {
        setError(true);
    }

    return (
        <div className='post-card-container'>
        
            {!!data.image && !error
            ?
                <img src={data.image} onError={onError} alt="Server error" className='image'/>
            :
                <div className='image-placeholder'>
                    <div/>
                    <div/>
                </div>
            }    

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

export default PostsCard;