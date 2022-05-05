import React from 'react';
import { IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import PostType from '../../../types/postType';
import { PostGrade } from '../../../enums/PostGrade';
import Image from '../../image/Image';

import "./PostCard.scss";
import { ReactComponent as LikeIcon } from "../../../assets/like.svg";
import { ReactComponent as DislikeIcon } from "../../../assets/dislike.svg";
import { ReactComponent as MarkIcon } from "../../../assets/mark.svg";
import { useActions } from '../../hooks/useActions';
import { useSelector } from '../../hooks/useSelector';


type PropsType = {
    data: PostType
}


const PostCard: React.FC<PropsType> = ({ data }) => {
    const navigate = useNavigate();
    const { likePost, dislikePost, markPost } = useActions();
    const grades = useSelector(state => state.posts.grades);
    const isLiked = grades[data.id] === PostGrade.LIKE;
    const isDisliked = grades[data.id] === PostGrade.DISLIKE;

    
    const marks = useSelector(state => state.posts.marks);
    const isMarked = marks.includes(data.id);

    const handleClick = () => {
        navigate(`/posts/${data.id}`);
    }

    const handleClickLike = () => likePost(data.id);
    const handleClickDislike = () => dislikePost(data.id);
    const handleClickMark = () => markPost(data.id);

    return (
        <div className='post-card-container'>

            <Image src={data.image}/>

            <Link to={`/posts/${data.id}`}>
                <div className='title'>
                    {data.title}
                </div>
            </Link>
            <div className='actions-line'>
                <div className='date' onClick={handleClick}>
                    {data.date}
                </div>
                <IconButton onClick={handleClickLike}>
                    <LikeIcon className={`icon ${isLiked ? "_liked" : ""}`}/>
                </IconButton>
                <IconButton onClick={handleClickDislike}>
                    <DislikeIcon className={`icon ${isDisliked ? "_disliked" : ""}`}/>
                </IconButton>
                <IconButton onClick={handleClickMark}>
                    <MarkIcon className={`icon ${isMarked ? "_marked" : ""}`}/>
                </IconButton>
            </div>
        </div>
    )
}

export default PostCard;