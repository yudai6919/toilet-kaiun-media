"use client";

import type { Blog } from "@/lib/microcms";
import PopularPosts from "@/components/PopularPosts";
import VoiceBanner from "@/components/VoiceBanner";
import HomeHero from "@/components/home/HomeHero";
import HomeVoices from "@/components/home/HomeVoices";
import HomeFirstReaders from "@/components/home/HomeFirstReaders";
import HomeAbout from "@/components/home/HomeAbout";
import HomeWhyToilet from "@/components/home/HomeWhyToilet";
import HomeArticles from "@/components/home/HomeArticles";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeManga from "@/components/home/HomeManga";
import HomeStart from "@/components/home/HomeStart";
import HomeApp from "@/components/home/HomeApp";
import HomeCTA from "@/components/home/HomeCTA";

type CategorySection = {
  slug: string;
  ja: string;
  en: string;
  blogs: Blog[];
};

type Props = {
  latestBlogs: Blog[];
  storyBlogs: Blog[];
  categorySections: CategorySection[];
};

export default function HomeClient({ latestBlogs, storyBlogs, categorySections }: Props) {
  return (
    <>
      <HomeHero />
      <PopularPosts bg="cream" />
      <HomeVoices />
      <HomeFirstReaders />
      <HomeAbout />
      <HomeWhyToilet />
      <HomeArticles latestBlogs={latestBlogs} categorySections={categorySections} />
      <HomeTestimonials storyBlogs={storyBlogs} />
      <VoiceBanner bg="cream" />
      <HomeManga />
      <HomeStart />
      <HomeApp />
      <HomeCTA />
    </>
  );
}
