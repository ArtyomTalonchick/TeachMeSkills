import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PostType from '../../../types/postType';
import Image from '../../image/Image';

import "./PostCard.scss";


type PropsType = {
    data: PostType
}


const PostCard: React.FC<PropsType> = ({ data }) => {
    const navigate = useNavigate();

    if (data.author === 8) {
        return null;
    }

    const handleClick = () => {
        navigate(`/posts/${data.id}`, {
            state: {st: 12}
        });
    }

    return (
        <div className='post-card-container'>

            <Image src={data.image}/>

            <Link to={`/posts/${data.id}`} state={{x: 123, y:"fdstfrdsds"}}>
                <div className='title'>
                    {data.title}
                </div>
            </Link>
            <div className='date' onClick={handleClick}>
                {data.date}
            </div>
        </div>
    )
}

export default PostCard;