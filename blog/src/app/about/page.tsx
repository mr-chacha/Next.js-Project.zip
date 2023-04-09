import Hero from "@/components/Hero";
import React from "react";

//SEO
export const metadata = {
  title: "About Me",
  description: "주니어 프론트엔드 개발자 차차의 블로그",
};

export default function AboutPage() {
  const TITLE_CLASS = "text-2xl font-bold text-gray-800 m-2";

  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>안녕하세요😃</h2>
        <p>
          매일 성장하는 개발자 <br />
          주니어 프론트엔드 개발자
        </p>
        <h2 className={TITLE_CLASS}>경력 / 학력</h2>
        <p>구글(-2030 예정)</p>
        <p>네이버(-2025 예정)</p>
        <p>구직중(-2023)</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>HTML | CSS | JavaScript</p>
        <p>React | Redux | ReactQuery | ReactNative</p>
        <p>TypeScript | Next.js</p>
      </section>
    </>
  );
}
