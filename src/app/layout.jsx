// src/app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoryblokProvider from "@/components/StoryblokProvider";
import { getStoryblokApi } from "@storyblok/react";
import { StoryblokServerComponent } from "@storyblok/react/rsc";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Job Maniakz",
  description: "Find your crazy new boss",
};

async function getConfig() {
  const storyblokApi = getStoryblokApi()
  const { data } = await storyblokApi.get("cdn/stories/config", { version: "draft" })
  return data.story
}

export default async function RootLayout({ children }) {
  const config = await getConfig()

  return (
    <StoryblokProvider>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col">
          <StoryblokServerComponent blok={config.content.header[0]} />
          {children}
          <StoryblokServerComponent blok={config.content.footer[0]} />
          </body>
      </html>
    </StoryblokProvider>
  );
}