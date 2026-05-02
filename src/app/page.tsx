import Link from "next/link";
import Image from "next/image";
import { books } from "@/data/books";
import BookCard from "@/components/BookCard";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const featuredBook = books.find((b) => b.featured) ?? books[0];
  const recentPosts = getAllPosts().slice(0, 2);

  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-sm font-semibold text-primary bg-primary-light px-3 py-1 rounded-full mb-4">
            Knjige za decu
          </span>
          <h1 className="font-display font-black text-4xl md:text-5xl text-foreground leading-tight mb-6">
            Priče koje rastu<br />
            <span className="text-primary">zajedno s vama</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-8">
            Zdravo! Ja sam Natali Stanković — pišem knjige za decu koje
            mešaju maštu, toplinu i istinu. Svaka priča je pozvana.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/knjige"
              className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Prelistaj knjige
            </Link>
            <Link
              href="/o-meni"
              className="border-2 border-stone-300 text-foreground font-semibold px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-colors"
            >
              O autorki
            </Link>
          </div>
        </div>

        {/* Featured book visual */}
        <div className="flex justify-center">
          <div className="animate-float relative">
            {featuredBook.coverImage ? (
              <Image
                src={featuredBook.coverImage}
                alt={featuredBook.title}
                width={224}
                height={288}
                className="w-56 h-72 object-cover rounded-2xl shadow-2xl"
                priority
              />
            ) : (
              <div
                className="w-56 h-72 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-3"
                style={{ backgroundColor: featuredBook.coverBg }}
              >
                <span className="text-7xl">{featuredBook.coverEmoji}</span>
                <div className="text-center px-4">
                  <p className="font-display font-bold text-sm text-stone-700 leading-tight">{featuredBook.title}</p>
                  <p className="text-xs text-stone-500 mt-1">Natali Stanković</p>
                </div>
              </div>
            )}
            <span className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full shadow">
              Novo!
            </span>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-primary py-10">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-white">
          <div>
            <p className="font-display font-black text-3xl">3</p>
            <p className="text-sm text-white/80 mt-1">objavljene knjige</p>
          </div>
          <div>
            <p className="font-display font-black text-3xl">50+</p>
            <p className="text-sm text-white/80 mt-1">školskih poseta</p>
          </div>
          <div>
            <p className="font-display font-black text-3xl">❤️</p>
            <p className="text-sm text-white/80 mt-1">hiljade zadovoljnih čitalaca</p>
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display font-black text-3xl text-foreground">Moje knjige</h2>
          <Link href="/knjige" className="text-sm font-semibold text-primary hover:underline">
            Pogledaj sve →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-secondary-light py-16">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-10 items-center">
          <div
            className="h-72 rounded-2xl flex items-center justify-center text-8xl bg-secondary/20"
          >
            ✍️
          </div>
          <div>
            <h2 className="font-display font-black text-3xl text-foreground mb-4">
              Ko je Natali Stanković?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Književnica, pripovedač, večni znatiželjko. Pišem o deci koja
              slušaju šume, hvataju oblake i pevaju tamo gde drugi riču —
              jer u toj deci prepoznajem sve nas.
            </p>
            <Link
              href="/o-meni"
              className="inline-block bg-secondary text-white font-semibold px-6 py-3 rounded-full hover:bg-secondary/90 transition-colors"
            >
              Saznaj više
            </Link>
          </div>
        </div>
      </section>

      {/* Recent blog posts */}
      {recentPosts.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-black text-3xl text-foreground">S bloga</h2>
            <Link href="/blog" className="text-sm font-semibold text-primary hover:underline">
              Svi tekstovi →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-stone-200 rounded-2xl p-6 hover:border-primary hover:shadow-md transition-all"
              >
                <p className="text-xs text-muted mb-2">{post.date} · {post.readingTime} min čitanja</p>
                <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{post.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="bg-[#2d1b0e] py-16">
        <div className="mx-auto max-w-xl px-6 text-center">
          <p className="text-3xl mb-3">📬</p>
          <h2 className="font-display font-black text-3xl text-white mb-3">
            Pridruži se čitalačkoj zajednici
          </h2>
          <p className="text-stone-400 mb-8 leading-relaxed">
            Prijavi se i dobij <strong className="text-white">besplatnu bojanicu</strong> inspirisanu
            mojim knjigama — idealan poklon za male umetnike.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tvoja@email.com"
              className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-stone-400 focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Prijavi se
            </button>
          </form>
          <p className="text-xs text-stone-500 mt-4">Bez spama. Odjava u svakom trenutku.</p>
        </div>
      </section>
    </main>
  );
}
