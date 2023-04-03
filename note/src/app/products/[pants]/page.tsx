import { getProduct, getProducts } from "@/service/products";
import React from "react";

type Props = {
  params: {
    pants: string; // pants는 폴더명임
  };
};
//metadata로 제품의 이름을 params로 가져와서 확인
export function generateMetadata({ params }: Props) {
  return {
    title: `제품의이름 : ${params.pants}`,
  };
}
export default function page({ params: { pants } }: Props) {
  const product = getProduct(pants);
  if (!product) {
    alert("제품이 없음");
  }
  //서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  return <h1>{product}제품설명페이지</h1>;
}
// 미리 경로만들기
export async function generateStaticParams() {
  // 모든제품의 페이지들을 미리 만들어 둘 수있게 함(SSG)
  const products = await getProducts();
  return products.map((products) => ({ pants: products }));
}
