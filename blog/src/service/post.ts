import { metadata } from "@/app/layout";
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
// 위에 Post 타입에 content타입을 합치는 과정임
export type PostData = Post & {
  content: string;
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
// 포스트를 클릭했을때 파일안에 포스트의 데이터들을 보여주기
export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  //모든 포스트들을 가져와서
  const metadata = await getAllPosts().then((posts) =>
    // 내가찾고있는 파일이름과 path가 같은지 찾는거임
    posts.find((post) => post.path === fileName)
  );
  if (!metadata) throw new Error(`${fileName}에 해당하는 포스트를 찾을수 없음`);
  const content = await readFile(filePath, "utf-8");
  return { ...metadata, content };
}
