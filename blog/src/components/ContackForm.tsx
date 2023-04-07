"use client";
import React, { ChangeEvent, useState } from "react";

type Form = {
  from: string;
  subject: string;
  message: string;
};
export default function ContackForm() {
  const [form, serForm] = useState<Form>({
    from: "",
    subject: "",
    message: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    serForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <form>
        <label htmlFor="from">Your Email</label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />
      </form>
    </>
  );
}
