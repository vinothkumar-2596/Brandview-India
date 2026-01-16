import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';
import { blogPosts } from '@/content/blog';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogDetailPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 sm:pt-40 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            href="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              {post.category}
            </span>
            <span className="flex items-center text-muted-foreground text-sm">
              <Calendar className="h-4 w-4 mr-1.5" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center text-muted-foreground text-sm">
              <User className="h-4 w-4 mr-1.5" />
              {post.author}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
            {post.title}
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Cover Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video relative rounded-2xl overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            {post.contentBlocks.map((block, index) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={index} className="text-2xl sm:text-3xl font-semibold mt-12 mb-4">
                    {block.content}
                  </h2>
                );
              }
              return (
                <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                  {block.content}
                </p>
              );
            })}
          </div>

          {/* Author Box */}
          <div className="mt-16 p-8 rounded-2xl border border-white/10 bg-card">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-semibold">
                {post.author.charAt(0)}
              </div>
              <div className="ml-4">
                <p className="font-semibold text-lg">{post.author}</p>
                <p className="text-muted-foreground">Content Writer at Zesty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 sm:py-20 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection />
    </>
  );
}