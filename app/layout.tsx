// 从 "next" 包中导入 Metadata 类型，用于定义网页的元数据。
import type { Metadata } from "next";

// // 从 "next/font/local" 中导入 localFont 函数，用于本地加载自定义字体。
// import localFont from "next/font/local";

import {Inter, IBM_Plex_Serif} from "next/font/google";


// 导入全局的 CSS 文件，用于页面的样式。
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter"});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
}
)

// // 使用 localFont 函数定义 GeistSans 字体，指定字体文件路径、CSS 变量名称和字体粗细范围。
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",           // 字体文件路径
//   variable: "--font-geist-sans",         // CSS 变量名称，用于应用字体
//   weight: "100 900",                     // 字体粗细范围，从 100 到 900
// });

// // 使用 localFont 函数定义 GeistMono 字体，指定字体文件路径、CSS 变量名称和字体粗细范围。
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",       // 字体文件路径
//   variable: "--font-geist-mono",         // CSS 变量名称，用于应用字体
//   weight: "100 900",                     // 字体粗细范围，从 100 到 900
// });

// 定义页面的元数据，包括标题和描述。
export const metadata: Metadata = {
  title: "Jamzz Banking",              // 网页的标题
  description: "Jamzz is a modern banking platform for everyone.", // 网页的描述信息
  icons:{
    icon: '/icons/logo.svg'
  }
};

// 定义 RootLayout 组件，接收子组件并在 HTML 和 Body 中渲染内容。
export default function RootLayout({
  children,                             
}: Readonly<{
  children: React.ReactNode;            
}>) {
  return (
    // 定义 HTML 结构，设置 lang 属性为 "en"（英文）。
    <html lang="en"> 
      {
      /* 定义 body 标签，应用 GeistSans 和 GeistMono 字体，启用字体抗锯齿效果 */}
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        {children}                        
      </body>
    </html>
  );
}