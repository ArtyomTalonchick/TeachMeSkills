import React, { useState } from 'react';
import PostsServer from './PostsServer';

import "./PostsPage.scss";
import PostsFront from './PostsFront';
import Button from '../ui/button/Button';

type PropsType = {};

const PostsPage: React.FC<PropsType> = () => {
    const [isServerMode, setIsServerMode] = useState(true);

    const handleToggleMode = () => setIsServerMode((prev) => !prev);

    return (
        <div className='posts-container'>
            <div className="toggle-button">
                <Button onClick={handleToggleMode}>
                    {isServerMode ? "Front" : "Server"}
                </Button>
            </div>
            <div className='mode-container'>
                {isServerMode ? <PostsServer/> : <PostsFront/>}
            </div>
        </div>
    )
}


export default PostsPage;