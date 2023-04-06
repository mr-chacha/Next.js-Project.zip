// next는 기본적으로 서버컴포넌트인데 아래와같이 "use client"를 넣으면
//해당컴포넌트는 클라이언트 컴포넌트로 이용가능
"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//캐러셀 라이브러리에서 가져온거 복붙한거임 items는 몇개의 캐러셀을 보여줄거냐
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

type Props = {
  children: React.ReactNode;
};
export default function MultiCarousel({ children }: Props) {
  return (
    //자동으로 무한으로 캐러셀이 돌아가고 위에있는걸 쓸거임
    <Carousel infinite autoPlay responsive={responsive} itemClass="m-2">
      {children}
    </Carousel>
  );
}
