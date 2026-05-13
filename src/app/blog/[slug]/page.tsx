import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { BlogPost } from "@/types";
import { Clock, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const supabase = await createClient();
    const { data: post } = await supabase
      .from("blog_posts")
      .select("title, excerpt, slug")
      .eq("slug", slug)
      .eq("published", true)
      .single();

    if (!post) return {};

    return {
      title: post.title,
      description: post.excerpt,
      alternates: {
        canonical: `https://yourdomain.com.au/blog/${post.slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  let post: BlogPost | null = null;
  let relatedPosts: BlogPost[] = [];

  try {
    const supabase = await createClient();

    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();

    post = data;

    if (post) {
      const { data: related } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .neq("slug", slug)
        .order("published_at", { ascending: false })
        .limit(2);
      relatedPosts = related ?? [];
    }
  } catch {
    // Supabase not configured
  }

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.published_at,
    dateModified: post.updated_at,
    publisher: {
      "@type": "Organization",
      name: "Adelaide Airbnb Management",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-brand-navy py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <span className="inline-block bg-brand-gold text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.published_at)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {estimateReadTime(post.content)} min read
            </span>
            <span>By {post.author}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-brand-navy prose-a:text-brand-gold prose-strong:text-brand-navy">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </article>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-brand-cream border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-brand-navy mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-gold hover:shadow-md transition-all"
                >
                  <span className="text-xs font-semibold text-brand-gold uppercase tracking-wide">
                    {related.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-brand-navy mt-2 mb-3 group-hover:text-brand-gold transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="text-sm text-brand-slate line-clamp-2">{related.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1 text-brand-gold text-sm font-semibold">
                    Read more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
