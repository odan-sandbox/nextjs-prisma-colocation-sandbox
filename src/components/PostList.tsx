import { Post, User } from "@prisma/client";

type Props = {
  posts: (Post & { author: User })[];
};

export const PostList = ({ posts }: Props) => {
  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.author.name}: {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
