import React from 'react';

import "./FromCard.scss";

type PropsType = {
    header?: string,
    loading?: boolean
}

const FormCard: React.FC<PropsType> = ({ header, loading, children }) => {

    return (
        <form className={`form-card-container`}>
            {header &&
                <div className='header'>{header}</div>
            }
            {children}
            {loading && <div className="loader">...</div>}
        </form>
    )
}

export default FormCard;