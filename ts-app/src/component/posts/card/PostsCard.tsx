import React from 'react';
import PostType from '../../../types/postType';

import "./PostsCard.scss";


type PropsType = {
    data: PostType
}


const PostsCard: React.FC<PropsType> = ({ data }) => {

    if (data.author === 8) {
        return null;
    }


    return (
        <div className='post-card-container'>
        
            {/* {data.image
            ?
                <img src={data.image} alt="Server error" className='image'/>
            :
                <div className='image-placeholder'>
                    <div/>
                    <div/>
                </div>
            } */}

            {data.image && 
                <img src={data.image} alt="Server error" className='image'/>
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