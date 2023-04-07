import AdjacentPostCard from "@/components/AdjacentPostCard";
import PostContent from "@/components/PostContent";
import { getPostData } from "@/service/post";
import Image from "next/image";
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
  const { title, path, next, prev } = post;
  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4 ">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className="flex shoadow-md">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
}
