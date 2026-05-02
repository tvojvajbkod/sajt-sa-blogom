import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "O autorki",
  description: "Ko je Natali Stanković",
};

export default function OMeniPage() {
  return (
    <main>
      <section className="bg-primary-light py-16">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/portret.jpg"
              alt="Natali Stanković"
              width={600}
              height={700}
              className="w-full h-auto"
            />
          </div>
          <div>
            <span className="inline-block text-sm font-semibold text-primary bg-white px-3 py-1 rounded-full mb-4">
              O autorki
            </span>
            <h1 className="font-display font-black text-4xl text-foreground mb-4">
              Natali Stanković
            </h1>
            <p className="text-muted leading-relaxed text-lg">
              Književnica, profesor razredne nastave i večni znatiželjko. Rođena u Francuskoj, odrasla u Pirotu — i sve to utkala u priče koje pišem za decu.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="prose prose-stone max-w-none">
          <h2 className="font-display font-black text-2xl text-foreground">Ko sam ja?</h2>
          <p className="text-muted leading-relaxed">
            Rođena sam u Francuskoj, školovala se u Pirotu i Vranju, a najveći deo svog radnog veka provela sam kao profesor razredne nastave u Osnovnoj školi „Dušan Radović" u Pirotu. Književnim stvaralaštvom bavim se već dvadeset godina, a moje ime uvršteno je u Antologiju savremenih srpskih pisaca za decu.
          </p>
          <p className="text-muted leading-relaxed">
            Pisanjem za decu ne pokušavam da ih nečemu naučim — pokušavam da ih pozovem u svet koji je malo čarobniji od ovog, ali dovoljno blizak da se u njemu prepoznaju. Verovala sam da svako dete nosi priču u sebi, i da je moj posao samo da je pomognem da izađe na videlo.
          </p>

          <h2 className="font-display font-black text-2xl text-foreground mt-10">Zašto pišem za decu?</h2>
          <p className="text-muted leading-relaxed">
            Moj posao je kao igra. Svako daje i poprima nešto od sledećeg igrača, mi se smenjujemo poput karata. Zato nikad ne igram sama — sve što radim, radim sa decom i za decu. Godinama sam kroz učionicu gradila sebe kao ličnost, ali i obrazovala ih. Deca su moji najvažniji saradnici — ona su razlog zbog kojeg pišem i najveća inspiracija.
          </p>

          <h2 className="font-display font-black text-2xl text-foreground mt-10">Šta sam volela da čitam kad sam bila mala</h2>
          <p className="text-muted leading-relaxed">
            Sve što je imalo šumu u sebi. Vikingeze, Narniju, srpske narodne
            bajke, Alisu u Zemlji čuda. Knjige gde se nešto dešava kad
            zatvoriš oči i knjiga ostane otvorena.
          </p>

          <h2 className="font-display font-black text-2xl text-foreground mt-10">Kontakt za medije i škole</h2>
          <p className="text-muted leading-relaxed">
            Volim da posetim škole i biblioteke. Ako organizujete književno veče, čas lektire ili promociju knjige — javite se!
          </p>
          <Link
            href="/kontakt"
            className="inline-block mt-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors no-underline"
          >
            Pišite mi
          </Link>
        </div>
      </section>
    </main>
  );
}
