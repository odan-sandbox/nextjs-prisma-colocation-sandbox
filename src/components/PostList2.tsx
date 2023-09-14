import type { Prisma } from "@prisma/client";

export const getPostsQuery = {
  select: {
    id: true,
    title: true,
    author: {
      select: {
        name: true,
      },
    },
  },
} satisfies Prisma.PostDefaultArgs;

// export const getPostsQuery = Prisma.validator<Prisma.PostDefaultArgs>()({
//   include: { author: true },
// });

type Post = Prisma.PostGetPayload<typeof getPostsQuery>;

type Props = {
  posts: Post[];
};

export const PostList2 = ({ posts }: Props) => {
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
