'use client'
import React from 'react';
import Link from "next/link";
import styles from "./link.module.scss";

export const ALink = ({ href, children }) => {
    return (
        <Link className={styles.link} href={href}>
            {children}
        </Link>
    );
};

