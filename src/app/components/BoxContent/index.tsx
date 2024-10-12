import React from 'react';
import styles from './boxContent.module.scss';

export const BoxContent = ({children}) => {
    return (
        <div className={styles.boxContent}>
            {children}
        </div>
    );
};

