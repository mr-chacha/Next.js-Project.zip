import CarouselPosts from "@/components/CarouselPosts";
import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      {/* 프로필  */}
      <Hero />
      {/* 포스트한 카드임   */}
      {/* 현재 타입스크립트 에러가 해결이 안돼서 아래의 주석으로 문제를 해결하라람 next가 */}
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
      {/* 현재 타입스크립트 에러가 해결이 안돼서 아래의 주석으로 문제를 해결하라람 next가 */}
      {/* @ts-expect-error Server Component */}
      <CarouselPosts />
    </>
  );
}
