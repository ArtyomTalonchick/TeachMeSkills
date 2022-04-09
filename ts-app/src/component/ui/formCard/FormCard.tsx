import React from 'react';

import "./FromCard.scss";

type PropsType = {
    header?: string
}

const FormCard: React.FC<PropsType> = ({ header, children }) => {

    return (
        <form className='form-card-container'>
            {header &&
                <div className='header'>{header}</div>
            }
            {children}
        </form>
    )
}

export default FormCard;