import AdjacentPostCard from "@/components/AdjacentPostCard";
import PostContent from "@/components/PostContent";
import { getFeaturedPosts, getPostData } from "@/service/post";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

//SEO
export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}

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
// 원하는 페이지를 서버사이드 렌더링으로서 미리 페이지를 만들어둠
export async function generateStaticParms() {
  const posts = await getFeaturedPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
