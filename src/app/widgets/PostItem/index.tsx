import React from 'react';
import styles from './postItem.module.scss';
import { ALink, Button, Heading, Tag, Text, Icon } from "@/app/components";
import { TagList } from "@/app/widgets";

export const PostItem = () => {
    return (
        <article className={styles.postItem}>
            <div style={{display: 'flex', gap: '10px', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                <Heading level={2}>
                    <ALink href="/post/121">Перенаправление с главной страницы в Next.js</ALink>
                </Heading>
                <Button variant="primary" size='icon'>
                    <Icon icon="Favorites"/>
                </Button>
            </div>
            <div>
                <Text size="medium">
                    Для предотвращения нежелательного мерцания во время клиентского редиректа можно применить метод
                    location.replace(), который эмулирует редирект на серверной стороне:
                </Text>
            </div>
            <TagList>
                <Tag href="/html" text='html' variant="html"/>
                <Tag href="/css" text='css' variant="css"/>
                <Tag href="/javascript" text='javascript' variant="js"/>
                <Tag href="/react" text="react" variant="react"/>
                <Tag href="/vue" text='vue' variant="vue"/>
                <Tag href="/nodejs" text='nodejs' variant="nj"/>
                <Tag href="/defaut" text='default' variant="default"/>
                <Tag href="/docker" text='docker' variant="docker"/>
            </TagList>
        </article>
    );
};