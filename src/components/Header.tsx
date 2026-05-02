import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          Miloš Ludus
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Početna
          </Link>
          <Link href="/o-meni" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            O meni
          </Link>
          <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
