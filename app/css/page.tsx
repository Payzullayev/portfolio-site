export default function CSSPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <a
  href="/"
  className="inline-block mb-10 text-white border border-white/20 px-5 py-2 rounded-xl hover:bg-white hover:text-black transition duration-300"
>
  ← Back
</a>

      <section className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
          CSS
        </h1>

        <p className="text-gray-400 text-lg leading-8">
          CSS is used to style and design modern websites with beautiful layouts,
          animations, responsive design and interactive user experiences.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              Skills
            </h2>

            <ul className="text-gray-400 space-y-3">
              <li>• Flexbox & Grid</li>
              <li>• Responsive Design</li>
              <li>• Animations</li>
              <li>• Glassmorphism UI</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              Experience
            </h2>

            <p className="text-gray-400 leading-7">
              I create modern and premium interfaces with smooth animations,
              clean layouts and responsive user experiences.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}