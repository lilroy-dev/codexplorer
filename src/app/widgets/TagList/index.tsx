import React from 'react';
import styles from './tagList.module.scss';

export const TagList = ({children}) => {
    return (
        <div className={styles.tagList}>
            {children}
        </div>
    );
};