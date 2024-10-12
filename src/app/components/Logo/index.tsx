import React from 'react';
import Link from "next/link";
import styles from "./logo.module.scss"

export const Logo = () => {
    return (
        <Link className={styles.logo} href="/">CODE <sup>⭐</sup></Link>
    );
};

