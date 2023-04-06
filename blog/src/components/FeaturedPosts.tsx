import { getFeaturedPosts } from "@/service/post";
import React from "react";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  //1. 포스터 데이터 읽어옴
  // data 폴더안에 posts 폴더안에 json 파일안에 정보가 있음
  // service폴더안에 post안에서 받아온걸 getAllPosts라는 함수로 저장해준걸 가지고온걸
  // posts라는 변수에 담고 그걸 props로 PostsGrid 컴포넌트에 내려줌
  const posts = await getFeaturedPosts();
  //2. 포스터 데이터 보여줌
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2"> Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
