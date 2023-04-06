"use client";
import React, { useState } from "react";
import { Post } from "@/service/post";
import PostsGrid from "./PostsGrid";
import Categories from "./Categories";
type Props = {
  posts: Post[];
  categoires: string[];
};
const ALL_POSTS = "All Posts";
export default function FilterablePosts({ posts, categoires }: Props) {
  //Post를 눌렀을때 일단은 모든 Post들을 보여주고
  const [selected, setSelected] = useState(ALL_POSTS);
  const filterd =
    //선택된게 ALL_POSTS라면 모든 post를 보여줄거고 그게아니면 선택된 카테고리를 보여줄거임
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className="flex m-4">
      {/* 일단은 모든 포스트들을 보여주고 선택된 카테고리마다 다른 포스트들을 보여줄거임 */}
      <PostsGrid posts={filterd} />
      {/* 카테고리는 카테고리 컴포넌트를 새로만들어서 보여줄거임*/}
      <Categories
        categoires={[ALL_POSTS, ...categoires]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}
