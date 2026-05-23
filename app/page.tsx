export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6">

      {/* Navbar */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-8">
        <h1 className="text-2xl font-bold">
          Sardorjon.dev
        </h1>

        <div className="flex gap-6 text-gray-400">
          <a href="#" className="hover:text-white transition">
            Home
          </a>

          <a href="#" className="hover:text-white transition">
            About
          </a>

          <a href="#" className="hover:text-white transition">
            Projects
          </a>

          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center py-20">

        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-44 h-44 rounded-full mx-auto mb-8 object-cover border-4 border-white shadow-2xl shadow-purple-500/40 hover:scale-105 transition duration-500"
        />

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-purple-400 to-pink-500 text-transparent bg-clip-text">
          Payzullayev Sardorjon
        </h1>

        <p className="text-gray-400 text-lg mt-4">
          Full Stack Developer • UI/UX Designer • AI Creator
        </p>

        <div className="flex gap-4 justify-center mt-8">

          <a
            href="https://t.me/mr_mcool007"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-110 duration-300 shadow-lg shadow-white/10"
          >
            Telegram
          </a>

          <a
            href="https://instagram.com/payzullayev_designer"
            target="_blank"
            className="border border-white px-6 py-3 rounded-2xl font-semibold hover:scale-110 duration-300 shadow-lg shadow-white/10"
          >
            Instagram
          </a>

        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto py-20">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

          <span className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 px-5 py-4 rounded-2xl hover:-translate-y-2 hover:border-purple-500 transition duration-300 shadow-xl">
            HTML
          </span>

          <span className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 px-5 py-4 rounded-2xl hover:-translate-y-2 hover:border-purple-500 transition duration-300 shadow-xl">
            CSS
          </span>

          <span className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 px-5 py-4 rounded-2xl hover:-translate-y-2 hover:border-purple-500 transition duration-300 shadow-xl">
            JavaScript
          </span>

          <span className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 px-5 py-4 rounded-2xl hover:-translate-y-2 hover:border-purple-500 transition duration-300 shadow-xl">
            React
          </span>

          <span className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 px-5 py-4 rounded-2xl hover:-translate-y-2 hover:border-purple-500 transition duration-300 shadow-xl">
            Next.js
          </span>

          <span className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 px-5 py-4 rounded-2xl hover:-translate-y-2 hover:border-purple-500 transition duration-300 shadow-xl">
            Tailwind CSS
          </span>

        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto border-t border-zinc-800 py-8 text-center text-gray-500">
        © 2026 Payzullayev Sardorjon
      </footer>

    </main>
  );
}