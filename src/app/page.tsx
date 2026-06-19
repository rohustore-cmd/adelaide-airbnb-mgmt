import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import OwnerDashboardTeaser from "@/components/sections/OwnerDashboardTeaser";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogPreview from "@/components/sections/BlogPreview";
import CTABanner from "@/components/sections/CTABanner";
import { createClient } from "@/lib/supabase/server";
import { BlogPost } from "@/types";

export const metadata: Metadata = {
  title: "BnB Manager | Airbnb Management Adelaide",
  description:
    "Adelaide's leading Airbnb management company. We handle cleaning, linen, dynamic pricing & guest communication. Full owner transparency. Get a free estimate today.",
  alternates: {
    canonical: "https://www.bnbmanager.com.au",
  },
};

export default async function HomePage() {
  let posts: BlogPost[] = [];
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("published", true)
      .order("published_at", { ascending: false })
      .limit(3);
    posts = data ?? [];
  } catch {
    // Supabase not yet configured — render without posts
  }

  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <HowItWorksSection />
      <OwnerDashboardTeaser />
      <TestimonialsSection />
      <BlogPreview posts={posts} />
      <CTABanner />
    </>
  );
}
