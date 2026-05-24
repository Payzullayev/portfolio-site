export default function TailwindPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <section className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 to-blue-500 text-transparent bg-clip-text">
          Tailwind CSS
        </h1>

        <p className="text-gray-400 text-lg leading-8">
          Tailwind CSS is a utility-first CSS framework used to build
          modern, responsive and beautiful user interfaces rapidly.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Responsive Design
            </h3>

            <p className="text-gray-400">
              Creating mobile-friendly modern layouts.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Utility Classes
            </h3>

            <p className="text-gray-400">
              Building interfaces rapidly with utility-first workflow.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Modern UI
            </h3>

            <p className="text-gray-400">
              Designing premium glassmorphism and animated interfaces.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}