export default function ReactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <a
  href="/"
  className="inline-block mb-10 text-white border border-white/20 px-5 py-2 rounded-xl hover:bg-white hover:text-black transition duration-300"
>
  ← Back
</a>

      <section className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
          React
        </h1>

        <p className="text-gray-400 text-lg leading-8">
          React is a powerful JavaScript library for building fast,
          interactive and scalable user interfaces.
        </p>

      </section>

    </main>
  );
}