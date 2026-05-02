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
          <div className="h-80 rounded-2xl overflow-hidden">
            <Image
              src="/portret.jpg"
              alt="Natali Stanković"
              width={600}
              height={320}
              className="w-full h-full object-cover"
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
              Književnica, pripovedač i večni znatiželjko. Pišem knjige za
              decu koje mešaju maštu, toplinu i istinu.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="prose prose-stone max-w-none">
          <h2 className="font-display font-black text-2xl text-foreground">Zašto pišem za decu?</h2>
          <p className="text-muted leading-relaxed">
            Odgovor koji uvek dajem je jednostavan: jer su deca jedina publika
            koja te čita sa čitavim srcem. Odrasli čitaju sa jednim okom na
            sat, jednim na telefon. Dete koje čita — čita samo to.
          </p>
          <p className="text-muted leading-relaxed">
            Moje knjige nisu didaktične. Ne pokušavam da naučim decu nečemu —
            pokušavam da ih pozovem u jedan svet koji možda liči na njihov,
            ali je malo čarobniji, malo brži, malo hrabriji.
          </p>

          <h2 className="font-display font-black text-2xl text-foreground mt-10">Šta sam volela da čitam kad sam bila mala</h2>
          <p className="text-muted leading-relaxed">
            Sve što je imalo šumu u sebi. Vikingeze, Narniju, srpske narodne
            bajke, Alisu u Zemlji čuda. Knjige gde se nešto dešava kad
            zatvoriš oči i knjiga ostane otvorena.
          </p>

          <h2 className="font-display font-black text-2xl text-foreground mt-10">Kontakt za medije i škole</h2>
          <p className="text-muted leading-relaxed">
            Volim da posetim škole i biblioteke. Ako organizujete književno
            veče, čas lektire ili promociju knjige — javite se!
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
