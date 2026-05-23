export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-10">
      <nav className="flex justify-between items-center max-w-6xl mx-auto mb-20">
  <h1 className="text-2xl font-bold">
    Sardorjon.dev
  </h1>

  <div className="flex gap-6 text-gray-300">
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
      <section className="max-w-4xl mx-auto text-center">
        <img
  src="/profile.jpg"
  alt="Profile"
  className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-white"
/>
        <h1 className="text-6xl font-bold mb-4">
          Salom, men Payzullayev Sardorjon
        </h1>

        <p className="text-gray-400 text-2xl mb-8">
          Full Stack Developer & Designer
        </p>

        <div className="flex gap-4 justify-center">
  <a
    href="https://t.me/mr_mcool007"
    target="_blank"
    className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
  >
    Telegram
  </a>

  <a
    href="https://instagram.com/payzullayev_designer"
    target="_blank"
    className="border border-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
  >
    Instagram
  </a>
</div>
      </section>

      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-4xl font-bold mb-6">Men haqimda</h2>

        <p className="text-gray-400 text-lg leading-8">
          Men zamonaviy va chiroyli web saytlar yaratishni o‘rganayotgan
          dasturchiman. Hozir portfolio va frontend development ustida
          ishlayapman.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-4xl font-bold mb-10">Loyihalarim</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">
              Portfolio Website
            </h3>

            <p className="text-gray-400">
              Next.js va Tailwind CSS yordamida yaratilgan portfolio sayt.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">
              Landing Page
            </h3>

            <p className="text-gray-400">
              Biznes uchun zamonaviy landing page dizayni.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto mt-24 mb-10">
  <h2 className="text-4xl font-bold mb-6">Texnologiyalar</h2>

  <div className="flex flex-wrap gap-4">
    <span className="bg-zinc-900 px-5 py-3 rounded-xl">
      HTML
    </span>

    <span className="bg-zinc-900 px-5 py-3 rounded-xl">
      CSS
    </span>

    <span className="bg-zinc-900 px-5 py-3 rounded-xl">
      JavaScript
    </span>

    <span className="bg-zinc-900 px-5 py-3 rounded-xl">
      React
    </span>

    <span className="bg-zinc-900 px-5 py-3 rounded-xl">
      Next.js
    </span>

    <span className="bg-zinc-900 px-5 py-3 rounded-xl">
      Tailwind CSS
    </span>
  </div>
</section>
<footer className="max-w-6xl mx-auto mt-24 border-t border-zinc-800 pt-8 text-center text-gray-500">
  <p>
    © 2026 Payzullayev Sardorjon. All rights reserved.
  </p>

  <div className="flex justify-center gap-6 mt-4">
    <a
      href="https://t.me/mr_mcool007"
      target="_blank"
      className="hover:text-white transition"
    >
      Telegram
    </a>

    <a
      href="https://instagram.com/payzullayev_designer"
      target="_blank"
      className="hover:text-white transition"
    >
      Instagram
    </a>
  </div>
</footer>
    </main>
  );
}