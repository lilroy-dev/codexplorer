'use client'
import React, { useState } from 'react';
import styles from './searchField.module.scss';
import {Icon} from "@/app/components";

export const SearchField = () => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы
        console.log('Поиск:', query);
        // Здесь можно добавить логику для обработки запроса поиска
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск..."
                className={styles.input}
            />
            <button type="submit" className={styles.button}>
                <Icon className={styles.icon} icon="Loop"/>
            </button>
        </form>
    );
};