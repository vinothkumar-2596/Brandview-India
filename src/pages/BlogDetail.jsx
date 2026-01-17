import { Link, useParams } from "react-router-dom";
import {
  Calendar,
  User,
  Search,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import { blogPosts } from "@/content/blog";
import NotFound from "@/pages/NotFound";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  const recentPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const categories = Array.from(new Set(blogPosts.map((item) => item.category)));

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <>
      <section className="pt-28 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-secondary px-6 py-10 sm:px-10 sm:py-12 text-white text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
              {post.author} / {formatDate(post.date)}
            </p>
            <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            <article>
              <div className="rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="mt-8 space-y-6 text-slate-700 leading-relaxed">
                {post.contentBlocks.map((block, index) => {
                  if (block.type === "heading") {
                    return (
                      <h2 key={index} className="text-xl sm:text-2xl font-semibold text-slate-900">
                        {block.content}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="text-base">
                      {block.content}
                    </p>
                  );
                })}
              </div>

              <div className="mt-10 rounded-2xl bg-slate-50 px-6 py-5 border border-slate-200">
                <p className="text-lg font-semibold text-slate-900">
                  "Great things in business are never done by one person. They're done by a team
                  of people."
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-500">
                  Steve Jobs
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="rounded-full border border-slate-200 px-3 py-1">
                  Tags: {post.category}
                </span>
                <div className="flex items-center gap-3">
                  <span>Share this post:</span>
                  <a href="#" className="text-slate-500 hover:text-slate-900">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-slate-500 hover:text-slate-900">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-slate-500 hover:text-slate-900">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-slate-900">Leave a Reply</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Your email address will not be published. Required fields are marked *
                </p>
                <form className="mt-6 grid gap-4">
                  <textarea
                    rows={4}
                    placeholder="Comment"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Name *"
                      className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Email *"
                      className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Website"
                    className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
                  />
                  <button
                    type="button"
                    className="w-fit rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
                  >
                    Post Comment
                  </button>
                </form>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-full border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-700 focus:outline-none"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">
                <h3 className="text-lg font-semibold text-slate-900">Recent Blog</h3>
                <div className="mt-4 space-y-4 text-sm text-slate-700">
                  {recentPosts.map((recent) => (
                    <Link
                      key={recent.slug}
                      to={`/blog/${recent.slug}`}
                      className="group flex items-start gap-3"
                    >
                      <span className="text-primary">�</span>
                      <span className="group-hover:text-slate-900">{recent.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">
                <h3 className="text-lg font-semibold text-slate-900">Category</h3>
                <div className="mt-4 space-y-3 text-sm text-slate-700">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center gap-2">
                      <span className="text-primary">�</span>
                      <span>{category}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-secondary px-6 py-6 text-white">
                <h3 className="text-lg font-semibold">Have Any Question?</h3>
                <p className="mt-2 text-sm text-white/70">
                  We are ready to listen and help craft a creative solution for you.
                </p>
                <div className="mt-4 space-y-2 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>support@brandview.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>(555) 987-6543</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900"
                >
                  Contact Us
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
