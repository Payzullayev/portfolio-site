export default function HTMLPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <section className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 to-yellow-300 text-transparent bg-clip-text">
          HTML
        </h1>

        <p className="text-gray-400 text-lg leading-8">
          HTML is the standard markup language used to create websites and web applications.
          It structures content on the internet using elements like headings,
          paragraphs, images, links and more.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              What I Know
            </h2>

            <ul className="text-gray-400 space-y-3">
              <li>• Semantic HTML</li>
              <li>• Forms & Inputs</li>
              <li>• SEO Basics</li>
              <li>• Accessibility</li>
              <li>• Responsive Structure</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              Experience
            </h2>

            <p className="text-gray-400 leading-7">
              I use HTML to build modern website structures with clean,
              accessible and SEO-friendly layouts.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}