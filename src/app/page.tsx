import { prisma } from "../lib/prisma";
import { PostList } from "../components/PostList";
import { PostList2, getPostsQuery } from "../components/PostList2";

export default async function Home() {
  const posts = await prisma.post.findMany({ include: { author: true } });
  const posts2 = await prisma.post.findMany(getPostsQuery);
  return (
    <div>
      <PostList posts={posts} />
      <PostList2 posts={posts2} />
    </div>
  );
}
