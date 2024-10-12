'use client';
import React from 'react';
import { Container, Logo } from "@/app/components";
import {SearchField, ToggleTheme} from "@/app/widgets";
import styles from './header.module.scss';

export const HeaderPage = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.headerLine}>
                    <Logo/>
                    <SearchField/>
                    <ToggleTheme/>
                </div>
            </Container>
        </header>
    );
};

