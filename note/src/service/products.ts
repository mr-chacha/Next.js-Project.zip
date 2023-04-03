//정적변수대신 나만의 데이터를 만들어서 API로 활용하는거임

import path from "path";
import { promises as fs } from "fs";
export type Product = {
  id: string;
  name: string;
  price: number;
};
export async function getProducts(): Promise<Product[]> {
  //만든 json의 경로
  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export function getProduct(id: string) {
  return "shirt";
}
