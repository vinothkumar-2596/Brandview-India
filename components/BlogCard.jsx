import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';

export default function BlogCard({ post }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300">
        <div className="aspect-[16/10] relative">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 bg-white/5 backdrop-blur-sm">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-primary text-sm font-medium">{post.category}</span>
            <span className="flex items-center text-muted-foreground text-sm">
              <Calendar className="h-4 w-4 mr-1.5" />
              {formatDate(post.date)}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
          <span className="inline-flex items-center text-primary font-medium">
            Read More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}