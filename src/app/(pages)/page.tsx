'use client';
import styles from "./page.module.css";
import {Button, Heading, ALink, Spacer, Text} from "@/app/components";
import {PostItem} from "@/app/widgets";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PostItem/>
      </main>
    </div>
  );
}
