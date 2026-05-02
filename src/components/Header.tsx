import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-stone-200 bg-[#fdf8f4]/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-xl font-extrabold text-foreground hover:text-primary transition-colors">
          Natali Stanković
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/knjige" className="text-sm text-muted hover:text-foreground transition-colors font-medium">
            Knjige
          </Link>
          <Link href="/o-meni" className="text-sm text-muted hover:text-foreground transition-colors font-medium">
            O autorki
          </Link>
          <Link href="/blog" className="text-sm text-muted hover:text-foreground transition-colors font-medium">
            Blog
          </Link>
          <Link href="/kontakt" className="text-sm bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors font-medium">
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}
