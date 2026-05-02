import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 mt-16">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display font-bold text-stone-700">Natali Stanković</p>
        <nav className="flex items-center gap-6 text-sm text-stone-500">
          <Link href="/knjige" className="hover:text-primary transition-colors">Knjige</Link>
          <Link href="/o-meni" className="hover:text-primary transition-colors">O autorki</Link>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <Link href="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link>
        </nav>
        <p className="text-xs text-stone-400">© {new Date().getFullYear()} Natali Stanković</p>
      </div>
    </footer>
  );
}
