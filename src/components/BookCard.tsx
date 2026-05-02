import Link from "next/link";
import Image from "next/image";
import type { Book } from "@/data/books";

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Cover */}
      <div
        className="h-52 flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: book.coverBg }}
      >
        {book.coverImage ? (
          <Image
            src={book.coverImage}
            alt={`Korica knjige ${book.title}`}
            width={140}
            height={200}
            className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="text-7xl group-hover:scale-110 transition-transform duration-300 inline-block">
            {book.coverEmoji}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs bg-primary-light text-primary font-semibold px-2 py-1 rounded-full">
            {book.ageRange}
          </span>
        </div>

        <Link href={`/knjige/${book.slug}`}>
          <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-1">
            {book.title}
          </h3>
        </Link>

        <p className="text-xs text-muted mb-3">{book.author} · {book.publisher || "—"}</p>

        <p className="text-sm text-muted leading-relaxed flex-1 mb-4">
          {book.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {book.tags.map((tag) => (
            <span key={tag} className="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {book.isbn && (
          <p className="text-xs text-stone-400 mb-3">ISBN: {book.isbn}</p>
        )}

        {book.buyLinks.filter(l => l.url !== "#").length > 0 && (
          <div className="flex gap-2">
            {book.buyLinks.filter(l => l.url !== "#").map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs border border-primary text-primary px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
