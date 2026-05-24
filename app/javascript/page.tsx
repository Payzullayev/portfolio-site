export default function JavaScriptPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <a
  href="/"
  className="inline-block mb-10 text-white border border-white/20 px-5 py-2 rounded-xl hover:bg-white hover:text-black transition duration-300"
>
  ← Back
</a>

      <section className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent bg-clip-text">
          JavaScript
        </h1>

        <p className="text-gray-400 text-lg leading-8">
          JavaScript makes websites interactive and dynamic with animations,
          logic, APIs and real-time functionality.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              Skills
            </h2>

            <ul className="text-gray-400 space-y-3">
              <li>• DOM Manipulation</li>
              <li>• ES6+</li>
              <li>• APIs</li>
              <li>• Async/Await</li>
              <li>• Interactive UI</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              Experience
            </h2>

            <p className="text-gray-400 leading-7">
              I use JavaScript to build interactive web experiences,
              dynamic interfaces and modern frontend functionality.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}