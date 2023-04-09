import "./globals.css";
//글자 폰트
import { Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "차차의 블로그",
    template: "차차의 블로그 | %s",
  },
  description: "주니어 프론트엔드 개발자 차차의 블로그",
  icons: {
    icon: "/favicon.icon",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //html 폰트를 sans로 사용
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <Header />
        <main className="grow"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
