import React, { useEffect, useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useSelector';
import PostCard from './card/PostCard';
import { PostGrade } from '../../enums/PostGrade';

enum Mode {
    LIKED,
    DISLIKED,
    MARKED,
}

// const PAGE = 1;
// const PAGE_SIZE = 10;

const PostsFront: React.FC = () => {
    const [mode, setMode] = useState(Mode.LIKED);

    const { fetchAllPosts } = useActions();
    const data = useSelector(state => state.posts.data);
    const loading = useSelector(state  => state.posts.loading);
    const error = useSelector(state  => state.posts.error);

    const grades = useSelector(state => state.posts.grades);
    const marks = useSelector(state => state.posts.marks);

    const filterdData = data
        .filter(item => {
            if (mode === Mode.LIKED) {
                return grades[item.id] === PostGrade.LIKE;
            } else if (mode === Mode.DISLIKED) {
                return grades[item.id] === PostGrade.DISLIKE;
            } if (mode === Mode.MARKED) {
                return marks.includes(item.id);
            }
            return false;
        });
        // .slice(PAGE_SIZE * (PAGE - 1), PAGE_SIZE * PAGE);
    
    useEffect(() => {
        fetchAllPosts();
    }, []);

    const handleToggleMode = (_: React.MouseEvent<HTMLElement>, newMode: Mode) => {
        setMode(newMode);
    };

    return (
        <div className='posts-container'>
            <ToggleButtonGroup
                value={mode}
                exclusive
                onChange={handleToggleMode}
                >
                <ToggleButton value={Mode.LIKED}>
                    Liked
                </ToggleButton>
                <ToggleButton value={Mode.DISLIKED}>
                    Disliked
                </ToggleButton>
                <ToggleButton value={Mode.MARKED}>
                    Marked
                </ToggleButton>
            </ToggleButtonGroup>
            <div className='cards'>
                {filterdData.map((item) => <PostCard key={item.id} data={item}/>)}
            </div>
            {loading && "Loading..."}
            {error}      
        </div>
    )
}

export default PostsFront;