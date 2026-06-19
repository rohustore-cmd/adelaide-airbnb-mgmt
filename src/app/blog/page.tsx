import type { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { BlogPost } from "@/types";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | BnB Manager",
  description:
    "Expert insights on Airbnb management, short-term rental strategy, and property investing in Adelaide, South Australia.",
  alternates: { canonical: "https://www.bnbmanager.com.au/blog" },
};

function estimateReadTime(content: string): number {
  return Math.max(1, Math.ceil(content.split(/\s+/).length / 200));
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage() {
  let posts: BlogPost[] = [];
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("published", true)
      .order("published_at", { ascending: false });
    posts = data ?? [];
  } catch {
    // Supabase not yet configured
  }

  return (
    <>
      <section className="bg-brand-navy py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            The BnB Manager Blog
          </h1>
          <p className="text-gray-300 text-lg">
            Expert guides on short-term rental strategy, dynamic pricing, and making the most
            of your Adelaide investment property.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20 text-brand-slate">
              <p className="text-lg">
                No posts yet — check back soon for expert Adelaide property insights.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-brand-gold transition-all duration-300 flex flex-col"
                >
                  <div className="h-52 bg-gradient-to-br from-brand-navy to-blue-800 relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <span className="font-display text-8xl font-bold text-white">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                    <span className="absolute top-4 left-4 bg-brand-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-brand-slate mb-3">
                      <Clock className="w-3 h-3" />
                      <span>{estimateReadTime(post.content)} min read</span>
                      <span>&middot;</span>
                      <span>{formatDate(post.published_at)}</span>
                    </div>
                    <h2 className="font-display text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-brand-slate leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-1 text-brand-gold text-sm font-semibold">
                      Read more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
