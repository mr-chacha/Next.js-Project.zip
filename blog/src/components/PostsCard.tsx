import Link from "next/link";
import { type } from "os";
import React from "react";
import { Post } from "@/service/post";
import Image from "next/image";
type Props = { post: Post };
export default function PostsCard({
  //post에 담긴 데이터를 이렇게 풀어서 사용이 가능함 ;;
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
        <Image
          className="w-full"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end text-gray-700">{date.toString()}</time>
          <h3 className="textlg font-bold">{title}</h3>
          {/* truncate는 크기가 넘어가면 ...으로 보여줌 고로 width가 가득차있어야함 */}
          <p className="w-full truncate text-center">{description}</p>
          <span className="text-sm rounded-lg bg-green-100 px-2 my-2 ">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
