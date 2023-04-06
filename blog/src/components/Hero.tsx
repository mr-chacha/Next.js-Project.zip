import Image from "next/image";
import Link from "next/link";
import React from "react";
import profileImage from "../../public/images/Profile2.png";
export default function Hero() {
  return (
    <section className="text-center">
      <Image
        priority
        className="mx-auto rounded-full"
        src={profileImage}
        alt="Picture of the author"
        width={250}
        height={250}
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm ChaCha "}</h2>
      <h3 className="text-xl font-semibold">Frontend Engineer</h3>
      <p>매일 성장하는 개발자 </p>
      <Link href="/contact">
        {/* px = 패딩 좌우 , py = 패딩 상하  mt = margin top*/}
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
