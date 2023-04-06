import { getNonePosts } from "@/service/post";
import React from "react";
import MultiCarousel from "./MultiCarousel";
import PostsCard from "./PostsCard";

export default async function CarouselPosts() {
  const posts = await getNonePosts();
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2"> You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostsCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
