import React from "react";
import styles from './text.module.scss';

interface TextProps {
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ size = 'large', children }) => {
    const sizeClass = size ? styles[size] : '';
    return <p className={`${styles.text} ${sizeClass}`}>{children}</p>;
};