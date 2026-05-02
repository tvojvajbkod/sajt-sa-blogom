import Link from "next/link";

type PostCardProps = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: number;
};

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("sr-Latn-RS", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostCard({ slug, title, date, description, tags, readingTime }: PostCardProps) {
  return (
    <article className="group border border-gray-200 rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-md transition-all duration-200">
      <Link href={`/blog/${slug}`} className="block">
        <h2 className="text-xl font-semibold text-gray-900 group-hover:text-[var(--accent)] transition-colors mb-2">
          {title}
        </h2>
      </Link>

      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
        <time dateTime={date}>{formatDate(date)}</time>
        <span>·</span>
        <span>{readingTime} min čitanja</span>
      </div>

      {description && (
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      )}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-600 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
