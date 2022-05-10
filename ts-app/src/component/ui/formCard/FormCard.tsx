import { CircularProgress } from '@mui/material';
import React from 'react';

import "./FromCard.scss";

type PropsType = {
    header?: string,
    loading?: boolean
}

const FormCard: React.FC<PropsType> = ({ header, loading, children }) => {

    return (
        <form className={`form-card-container`}>
            <div className={`form-content ${loading ? "_loading" : ""}`}>
                {header &&
                    <div className='header'>{header}</div>
                }
                {children}
            </div>
            {loading && <div className="loader">
                <CircularProgress/>
            </div>}
        </form>
    )
}

export default FormCard;