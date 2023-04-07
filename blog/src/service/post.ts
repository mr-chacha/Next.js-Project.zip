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
  next: Post | null;
  prev: Post | null;
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
  const posts = await getAllPosts(); //
  // 내가찾고있는 파일이름과 path가 같은지 찾는거임
  const post = posts.find((post) => post.path === fileName);

  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을수 없음`);

  const index = posts.indexOf(post);
  //현재 post의 index 즉 post 등록된 숫자가 최신순으로 따졌을때 두번째라면 -1을 해야 첫번째가 되고 그게 최신순이됨 그리고 +1된 세번째포스트는 이전포스트가 되는것임
  // 근데 만약 내가본 post가 가장최신의 post이고 가장최신순은 0번째일테니까 다음 포스트는 없고 이전포스트만 있는거임
  const next = index > 0 ? posts[index - 1] : null;
  //이전포스트
  const prev = index < posts.length ? posts[index + 1] : null;
  const content = await readFile(filePath, "utf-8");
  return { ...post, content, next, prev };
}
