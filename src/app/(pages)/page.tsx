'use client';
import { PostItem, PostListItems } from "@/app/widgets";
import { Container } from "@/app/components";


export default function Home() {
  return (
    <div>
      <main>
          <Container>
              <PostListItems>
                  <PostItem/>
                  <PostItem/>
              </PostListItems>
          </Container>
      </main>
    </div>
  );
}
