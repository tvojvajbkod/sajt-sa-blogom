import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("sr-Latn-RS", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[var(--accent)] transition-colors mb-8"
      >
        ← Svi postovi
      </Link>

      <article>
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readingTime} min čitanja</span>
          </div>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-600 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-gray max-w-none">
          <MDXRemote
            source={post.content}
            components={{
              img: (props) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  {...props}
                  alt={props.alt ?? ""}
                  className="w-full rounded-2xl shadow-md my-8 object-cover"
                />
              ),
            }}
          />
        </div>
      </article>
    </main>
  );
}
