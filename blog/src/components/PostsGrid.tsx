import React from "react";
import { Post } from "@/service/post";
import PostsCard from "./PostsCard";
type Props = { posts: Post[] };
export default function PostsGrid({ posts }: Props) {
  //props로 받아온 posts안에있는것들을 map으로 돌려서 보여줌
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post) => (
        <li key={post.path}>
          <PostsCard post={post} />
        </li>
      ))}
    </ul>
  );
}
