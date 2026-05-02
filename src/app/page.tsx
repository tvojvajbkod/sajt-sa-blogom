import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <section className="mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Natali Stanković
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed">
          Književnica koja piše knjige za decu. Ovde delim priče iza priča —
          o pisanju, o mašti i o malim čitaocima koji me svakodnevno
          inspirišu.
        </p>
      </section>

      {recentPosts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Najnovije objave
            </h2>
            <Link
              href="/blog"
              className="text-sm text-[var(--accent)] hover:underline"
            >
              Pogledaj sve →
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
