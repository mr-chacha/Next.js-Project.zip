import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Counter from "@/components/Counter";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log("안녕 - 서버");

  return (
    <>
      <h1>홈페이지연습!</h1>
      <Counter />
    </>
  );
}
