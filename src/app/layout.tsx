import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "자연 생물도감 | Nature Field Guide",
  description: "한국의 자연을 탐험하는 아름다운 생물도감",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
