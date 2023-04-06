import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/">
        <h1 className="text-3xl font-bold">{"ChaCha's Blog"}</h1>
      </Link>
      <nav className="flex gap-4">
        {/* 폴더이름명으로 이동함 */}
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Post</Link>
        <Link href="/contact ">Contact</Link>
      </nav>
    </header>
  );
}
