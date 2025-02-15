import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "اولین پروژه لندینگ پیج من",
  description:
    "این یک صفحه ساده لندینگ پیج هست که با نکست جی اس ، تایپ اسکریپت و تیلویند ساختم",
  keywords: [
    "Next.js",
    "Landing Page",
    "Tailwind CSS",
    "TypeScript",
    "Web Development",
    "نکست جی اس ",
    "تیلویند",
    "تایپ اسکریپت",
  ],

  authors: [{ name: "Jaafar Zare", url: "https://vmusic.ir" }],
  openGraph: {
    title: "صفحه معرفی من",
    description: "این یک صفحه لندینگ ساده با Next.js 15+ و Tailwind CSS است",
    url: "https:vmusic.ir",
    siteName: "والاموزیک",
    images: [
      {
        url: "https://vmusic.ir/wp-content/uploads/2019/06/Video-Editor.jpg",
        width: 800,
        height: 400,
        alt: "پیش نمایش لندینگ پیج",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  alternates: {
    canonical: "https://vmusic.ir",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
