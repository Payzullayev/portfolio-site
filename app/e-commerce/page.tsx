export default function EcommercePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <a
  href="/"
  className="inline-block mb-10 text-white border border-white/20 px-5 py-2 rounded-xl hover:bg-white hover:text-black transition duration-300"
>
  ← Back
</a>

      <section className="max-w-5xl mx-auto">

        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
          alt="E-Commerce"
          className="w-full h-[400px] object-cover rounded-3xl mb-10"
        />

        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 to-orange-400 text-transparent bg-clip-text">
          E-Commerce
        </h1>

        <p className="text-gray-400 text-lg leading-8">
          Modern online shopping platform with responsive UI,
          product pages and smooth user experience.
        </p>

      </section>

    </main>
  );
}