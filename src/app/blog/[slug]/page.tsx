import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

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
    <main>
      {/* Hero sa slikom */}
      {post.coverImage ? (
        <div className="relative h-[67vh] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.coverImage}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <Link
              href="/blog"
              className="text-sm text-white/70 hover:text-white transition-colors mb-6"
            >
              ← Svi postovi
            </Link>
            <h1 className="font-display font-black text-4xl md:text-5xl text-white leading-tight max-w-3xl mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-white/70">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>·</span>
              <span>{post.readingTime} min čitanja</span>
            </div>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/20 text-white font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto px-4 pt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary transition-colors mb-8"
          >
            ← Svi postovi
          </Link>
          <header className="mb-10">
            <h1 className="font-display font-black text-4xl text-foreground mb-4 leading-tight">
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
        </div>
      )}

      <article className="max-w-3xl mx-auto px-4 py-12">
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
        <ShareButtons slug={post.slug} title={post.title} />
      </article>
    </main>
  );
}
