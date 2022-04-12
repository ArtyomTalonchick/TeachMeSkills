import React, { useState } from 'react';

import "./Image.scss";

type PropsType = {
    src?: string
}


const Image: React.FC<PropsType> = ({ src }) => {

    const [error, setError] = useState(false);

    const onError = () => {
        setError(true);
    }

    return (
        <div>
            {!!src && !error
            ?
                <img src={src} onError={onError} alt="Server error" className='image'/>
            :
                <div className='image-placeholder'>
                    <div/>
                    <div/>
                </div>
            }
        </div>
    )
}

export default Image;