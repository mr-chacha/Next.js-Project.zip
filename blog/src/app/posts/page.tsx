import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/post";
import React from "react";

export default async function PostPage() {
  //포스트 페이지에서는 등록된 포스트의 카테고리를 분리해줌
  const posts = await getAllPosts();
  //new Set()은 중복을 허용하지않는 메소드임 그걸 배열안에넣고 posts에 카테고리를 분리함
  const categoires = [...new Set(posts.map((post) => post.category))];
  //별도의 컴포넌트를 하나만들어서 post들을 보여줄거임
  return <FilterablePosts posts={posts} categoires={categoires} />;
}
