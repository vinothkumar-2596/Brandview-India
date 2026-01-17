import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import { blogPosts } from "@/content/blog";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(
        blogPosts.filter(
          (post) =>
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query) ||
            post.category.toLowerCase().includes(query)
        )
      );
    }
  };

  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Our Blog
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mt-4 mb-6">
              Insights & Inspiration
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-8">
              Stay updated with the latest trends, tips, and insights from our team of experts.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-12 py-6 bg-secondary border border-primary/30 rounded-full text-lg text-white placeholder:text-white/50 focus-visible:border-primary focus-visible:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No articles found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
