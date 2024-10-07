'use client';
import styles from "./page.module.css";
import {Button, Heading, Spacer, Text} from "@/app/components";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Spacer top={100}>
            <Text size="small">
                Lorem
            </Text>
            <Heading level={1}>TESTOVIE HEADING</Heading>
            <Heading level={2}>TESTOVIE HEADING</Heading>
            <Heading level={3}>TESTOVIE HEADING</Heading>
            <Heading level={4}>TESTOVIE HEADING</Heading>
            <Heading level={5}>TESTOVIE HEADING</Heading>
            <Heading level={6}>TESTOVIE HEADING</Heading>
            <Button href="/about" variant="primary" size="large">
                Перейти на страницу About
            </Button>
            <Button onClick={() => alert('Кнопка нажата!')} variant="danger" size="small">
                Удалить
            </Button>
            <Button variant="link" href="/contact">
                Контакты
            </Button>
            <Button variant="success" icon={'O'}>
                Успешное действие
            </Button>
        </Spacer>
      </main>
    </div>
  );
}
