export const metadata = {
  title: "O meni",
  description: "Nešto više o meni",
};

export default function OMeniPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">O meni</h1>

      <div className="prose prose-gray max-w-none">
        <p className="text-lg text-gray-600 leading-relaxed">
          Zdravo! Ovde će uskoro biti tekst o tebi — ko si, čime se baviš,
          zašto pišeš ovaj blog.
        </p>
        <p className="text-gray-500 mt-4">
          Reci mi šta želiš da napišeš i ja ću urediti ovu stranicu.
        </p>
      </div>
    </main>
  );
}
