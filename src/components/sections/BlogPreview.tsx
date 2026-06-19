import Link from "next/link";
import { BlogPost } from "@/types";
import { ArrowRight, Clock } from "lucide-react";
import Button from "@/components/ui/Button";

function estimateReadTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

interface BlogPreviewProps {
  posts: BlogPost[];
}

export default function BlogPreview({ posts }: BlogPreviewProps) {
  if (!posts.length) return null;

  return (
    <section className="py-20 bg-brand-cream" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Latest Insights
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy mt-3">
              From the BnB Manager Blog
            </h2>
          </div>
          <Button href="/blog" variant="secondary" size="sm">
            View All Posts
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-brand-gold transition-all duration-300 flex flex-col"
            >
              {/* Cover gradient */}
              <div className="h-48 bg-gradient-to-br from-brand-navy to-blue-800 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 font-display text-6xl font-bold">
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

                <h3 className="font-display text-lg font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-brand-slate leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex items-center gap-1 text-brand-gold text-sm font-semibold">
                  Read more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
