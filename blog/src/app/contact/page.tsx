import ContackForm from "@/components/ContackForm";
import React from "react";
import { icons } from "react-icons";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

//SEO
export const metadata = {
  title: "Contack Me",
  description: "차차에게 메일 보내기",
};

const LINKS = [
  {
    icon: <AiFillGithub />,
    url: "https://github.com/mr-chacha",
  },
  {
    icon: <AiFillLinkedin />,
    url: "https://velog.io/@c9926",
  },
];
export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-rxl font-bold my-2">ConTact Me</h2>
      <p>hoitchac@gmail.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-5xl hover:text-yellow-400"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContackForm />
    </section>
  );
}
