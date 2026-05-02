export const metadata = {
  title: "Kontakt",
  description: "Stupite u kontakt sa Natali Stanković",
};

export default function KontaktPage() {
  return (
    <main>
      <section className="bg-primary-light py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-display font-black text-4xl text-foreground mb-4">Kontakt</h1>
          <p className="text-lg text-muted">
            Za upite medija, škola, izdavača — ili samo ako želite da kažete zdravo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact info */}
        <div>
          <h2 className="font-display font-bold text-xl text-foreground mb-6">Kada da pišete?</h2>
          <ul className="space-y-4 text-muted">
            <li className="flex gap-3">
              <span className="text-xl">🏫</span>
              <div>
                <p className="font-semibold text-foreground">Škole i biblioteke</p>
                <p className="text-sm">Organizacija časa, književnog veča ili radionice</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">📰</span>
              <div>
                <p className="font-semibold text-foreground">Mediji</p>
                <p className="text-sm">Intervjui, gostovanja, promocije knjiga</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">📦</span>
              <div>
                <p className="font-semibold text-foreground">Porudžbine s potpisom</p>
                <p className="text-sm">Potpisani primerci za poklone ili nagrade</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">💬</span>
              <div>
                <p className="font-semibold text-foreground">Čitaoci</p>
                <p className="text-sm">Uvek srećna da čujem šta vaša deca misle</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Form */}
        <div>
          <h2 className="font-display font-bold text-xl text-foreground mb-6">Pošaljite poruku</h2>
          <form
            action="mailto:tvojvajbkod@gmail.com"
            method="get"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Ime i prezime</label>
              <input
                type="text"
                name="ime"
                placeholder="Ana Perić"
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="ana@email.com"
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Poruka</label>
              <textarea
                name="body"
                rows={5}
                placeholder="Zdravo Natali..."
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary bg-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Pošalji poruku
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
