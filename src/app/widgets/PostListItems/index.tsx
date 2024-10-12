import React from 'react';
import styles from './postListItems.module.scss';

export const PostListItems = ({children}) => {
    return (
        <div className={styles.postListItems}>
            {children}
        </div>
    );
};