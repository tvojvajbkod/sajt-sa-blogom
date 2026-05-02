export const metadata = {
  title: "O meni",
  description: "Ko je Natali Stanković",
};

export default function OMeniPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">O meni</h1>

      <div className="prose prose-gray max-w-none">
        <p className="text-lg text-gray-600 leading-relaxed">
          Zdravo! Ja sam Natali Stanković, književnica koja piše knjige za decu.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          Ovde ću pisati o svom radu, o procesu stvaranja priča, o knjigama
          koje volim i o svemu što me inspiriše. Ako imaš pitanje ili želiš da
          se javiš, uvek si dobrodošao.
        </p>
      </div>
    </main>
  );
}
