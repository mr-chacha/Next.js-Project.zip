import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

// 현재프로젝트안에 data 폴더안에 json가져오기
export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>((data) => JSON.parse(data))
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

//모든 post를 불러온다음에 post가 featured가 true인거만 filter를해서 post에 담아줌
export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

//모든 post를 불러온다음에 post가 featured가 false인거만 filter를해서 post에 담아줌
export async function getNonePosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}
