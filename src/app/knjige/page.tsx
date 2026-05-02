import { books } from "@/data/books";
import BookCard from "@/components/BookCard";

export const metadata = {
  title: "Knjige",
  description: "Sve knjige Natali Stanković za decu",
};

export default function KnjigePage() {
  return (
    <main>
      <section className="bg-primary-light py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4">
            Moje knjige
          </h1>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Svaka priča je nastala iz jednog trenutka — pitanja nekog deteta,
            oblaka koji me je podsetio na nešto, ili tišine koja je tražila
            da bude ispunjena rečima.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </section>

      {/* Resursi za roditelje/učitelje */}
      <section className="bg-secondary-light py-14">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-3xl mb-3">📚</p>
          <h2 className="font-display font-black text-2xl text-foreground mb-3">
            Za roditelje i učitelje
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            Uz svaku knjigu postoje pitanja za razgovor i aktivnosti koje
            možete raditi sa decom. Pišite mi i poslaću vam materijale.
          </p>
          <a
            href="/kontakt"
            className="inline-block bg-secondary text-white font-semibold px-6 py-3 rounded-full hover:bg-secondary/90 transition-colors"
          >
            Zatražite materijale
          </a>
        </div>
      </section>
    </main>
  );
}
