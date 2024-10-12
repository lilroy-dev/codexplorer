import React, { FC } from 'react';
import Link from "next/link";
import styles from './tag.module.scss';

interface TagProps {
    href: string;
    text: string;
    variant: 'html' | 'css' | 'js' | 'nj' | 'ts' | 'react' | 'vue' | 'docker' | 'default';
}

export const Tag:FC<TagProps> = ({ href, text, variant = 'default' }) => {
    return (
        <Link className={`${styles.tag} ${styles[variant]}`} href={href}><span>#</span>{text}</Link>
    );
};