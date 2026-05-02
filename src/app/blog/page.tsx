import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata = {
  title: "Blog",
  description: "Svi blog postovi",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Blog</h1>
        <p className="text-gray-500">
          {posts.length} {posts.length === 1 ? "objava" : "objave"}
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-500">Još nema objava.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      )}
    </main>
  );
}
