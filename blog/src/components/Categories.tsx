import React from "react";
type Props = {
  categoires: string[];
  selected: string;
  onClick: (category: string) => void;
};
export default function Categories({ categoires, selected, onClick }: Props) {
  return (
    // 선택된 카테고리의 Post들을 보여줌
    <section className="text-center p-4">
      <h2 className="text-lg font-bold border-b border-sky-500 mb-2">
        Category
      </h2>
      <ul>
        {categoires.map((category) => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${
              category === selected && "text-sky-600"
            }`}
            key={category}
            onClick={() => {
              onClick(category);
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
