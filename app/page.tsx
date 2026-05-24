export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.15),transparent_40%)]"></div>

      {/* Navbar */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-6 px-6 sticky top-4 z-50 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl">
        <h1 className="text-2xl font-bold">
          Sardorjon.dev
        </h1>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center py-20 relative z-10">

        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-44 h-44 rounded-full mx-auto mb-8 object-cover border-4 border-white shadow-2xl shadow-purple-500/40 hover:scale-105 transition duration-500"
        />

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-white text-transparent bg-clip-text animate-pulse">
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
      <section className="max-w-5xl mx-auto py-20 relative z-10">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

          <span className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 px-5 py-4 rounded-2xl hover:-translate-y-2 hover:border-purple-500 transition duration-300 shadow-xl hover:shadow-purple-500/20 hover:shadow-2xl">
            HTML
          </span>

          <span className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 px-5 py-4 rounded-2xl hover:-translate-y-2 hover:border-purple-500 transition duration-300 shadow-xl hover:shadow-purple-500/20 hover:shadow-2xl">
            CSS
          </span>

          <span className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 px-5 py-4 rounded-2xl hover:-translate-y-2 hover:border-purple-500 transition duration-300 shadow-xl hover:shadow-purple-500/20 hover:shadow-2xl">
            JavaScript
          </span>

          <span className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 px-5 py-4 rounded-2xl hover:-translate-y-2 hover:border-purple-500 transition duration-300 shadow-xl hover:shadow-purple-500/20 hover:shadow-2xl">
            React
          </span>

          <span className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 px-5 py-4 rounded-2xl hover:-translate-y-2 hover:border-purple-500 transition duration-300 shadow-xl hover:shadow-purple-500/20 hover:shadow-2xl">
            Next.js
          </span>

          <span className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 px-5 py-4 rounded-2xl hover:-translate-y-2 hover:border-purple-500 transition duration-300 shadow-xl hover:shadow-purple-500/20 hover:shadow-2xl">
            Tailwind CSS
          </span>

        </div>

      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto py-20 relative z-10">

        <h2 className="text-3xl font-bold mb-10 text-center">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-6 overflow-hidden hover:-translate-y-3 transition duration-300 shadow-xl hover:border-purple-500 hover:shadow-purple-500/20 hover:shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              alt="AI Project"
              className="rounded-2xl mb-5 h-48 w-full object-cover hover:scale-105 transition duration-500"
            />

            <h3 className="text-2xl font-bold mb-3">
              AI Chat App
            </h3>

            <p className="text-gray-400 mb-5">
              Modern AI chatbot platform with premium UI.
            </p>

            <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition duration-300">
              View Project
            </button>

          </div>

          <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-6 overflow-hidden hover:-translate-y-3 transition duration-300 shadow-xl hover:border-purple-500 hover:shadow-purple-500/20 hover:shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
              alt="Shop Project"
              className="rounded-2xl mb-5 h-48 w-full object-cover hover:scale-105 transition duration-500"
            />

            <h3 className="text-2xl font-bold mb-3">
              E-Commerce
            </h3>

            <p className="text-gray-400 mb-5">
              Full stack online shopping platform.
            </p>

            <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition duration-300">
              View Project
            </button>

          </div>

          <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-6 overflow-hidden hover:-translate-y-3 transition duration-300 shadow-xl hover:border-purple-500 hover:shadow-purple-500/20 hover:shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Portfolio Project"
              className="rounded-2xl mb-5 h-48 w-full object-cover hover:scale-105 transition duration-500"
            />

            <h3 className="text-2xl font-bold mb-3">
              Portfolio Website
            </h3>

            <p className="text-gray-400 mb-5">
              Personal modern animated portfolio website.
            </p>

            <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition duration-300">
              View Project
            </button>

          </div>

        </div>

      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto py-20 relative z-10">

        <h2 className="text-3xl font-bold mb-10 text-center">
          About Me
        </h2>

        <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-10 text-gray-300 leading-8 shadow-xl">

          <p>
            I am a passionate Full Stack Developer focused on building modern,
            responsive and premium web applications using React, Next.js and
            Tailwind CSS.
          </p>

          <p className="mt-6">
            I love creating beautiful UI designs, smooth user experiences and
            interactive digital products that feel modern and professional.
          </p>

        </div>

      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto py-20 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8 text-center shadow-xl hover:shadow-purple-500/20 hover:shadow-2xl transition duration-300">
            <h3 className="text-4xl font-bold text-purple-400">
              10+
            </h3>

            <p className="text-gray-400 mt-3">
              Projects
            </p>
          </div>

          <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8 text-center shadow-xl hover:shadow-purple-500/20 hover:shadow-2xl transition duration-300">
            <h3 className="text-4xl font-bold text-pink-400">
              2+
            </h3>

            <p className="text-gray-400 mt-3">
              Years Learning
            </p>
          </div>

          <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8 text-center shadow-xl hover:shadow-purple-500/20 hover:shadow-2xl transition duration-300">
            <h3 className="text-4xl font-bold text-blue-400">
              100%
            </h3>

            <p className="text-gray-400 mt-3">
              Passion
            </p>
          </div>

          <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8 text-center shadow-xl hover:shadow-purple-500/20 hover:shadow-2xl transition duration-300">
            <h3 className="text-4xl font-bold text-green-400">
              24/7
            </h3>

            <p className="text-gray-400 mt-3">
              Creativity
            </p>
          </div>

        </div>

      </section>

      {/* Contact */}
      <section className="max-w-4xl mx-auto py-20 text-center relative z-10">

        <h2 className="text-3xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-10">
          Let’s work together and build something amazing.
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center">

          <a
  href="tel:+998880749699"
  className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-white/10"
>
  Phone
</a>

          <a
            href="mailto:example@gmail.com"
            className="border border-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300"
          >
            Email Me
          </a>

        </div>

      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto border-t border-zinc-800 py-8 text-center text-gray-500 relative z-10">
        © 2026 Payzullayev Sardorjon
      </footer>

    </main>
  );
}