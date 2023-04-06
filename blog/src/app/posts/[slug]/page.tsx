import { getPostData } from "@/service/post";
import React from "react";
type Props = {
  params: {
    slug: string;
  };
};
export default async function Postpage({ params: { slug } }: Props) {
  //1. 전달된 slug에 해당되는 포스트 데이터를  읽어와서
  //2. 데이터를 마크다운뷰어에 표기하기
  const post = await getPostData(slug);
  return (
    <>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </>
  );
}
