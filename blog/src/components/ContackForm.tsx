"use client";
import { sendContactEmail } from "@/service/contact";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};
export default function ContackForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  // 보내기 눌렀을때 실행할거임
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      //메일 성공적으로가면
      .then(() => {
        setBanner({ message: "전송완료", state: "success" });
        //성공하면 빈값으로 보여주기
        setForm(DEFAULT_DATA);
      })
      //메일 실패하면
      .catch(() => {
        setBanner({ message: "전송실패", state: "error" });
      })
      //메일 보내기 성공하든 실패든
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };
  return (
    <section className="max-w-md  w-full">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white"
      >
        <label htmlFor="from" className="font-semibold">
          Your Email
        </label>
        <input
          className="text-black"
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />
        <label className="font-semibold" htmlFor="subject">
          Subject
        </label>
        <input
          className="text-black"
          type="text"
          id="subject"
          name="subject"
          required
          autoFocus
          value={form.subject}
          onChange={onChange}
        />
        <label className="font-semibold" htmlFor=" Message">
          Message
        </label>
        <textarea
          className="text-black"
          rows={10}
          id="message"
          name="message"
          required
          autoFocus
          value={form.message}
          onChange={onChange}
        />
        <button className="bg-yellow-300 text-black font-bold hover:bg-yellow-400 ">
          Submit
        </button>
      </form>
    </section>
  );
}
