import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-semibold text-slate-900">Page not found</h1>
        <p className="mt-4 text-slate-600">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
