import React from 'react';
import styles from './postItem.module.scss';
import { ALink, Heading, Text } from "@/app/components";

export const PostItem = () => {
    return (
        <div className={styles.postItem}>
            <Heading level={2}>
                <ALink href="/post/121">Перенаправление с главной страницы в Next.js</ALink>
            </Heading>
            <Text size="medium">
                Для предотвращения нежелательного мерцания во время клиентского редиректа можно применить метод location.replace(), который эмулирует редирект на серверной стороне:
            </Text>
        </div>
    );
};