export default function PortfolioWebsitePage() {
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
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Portfolio Website"
          className="w-full h-[400px] object-cover rounded-3xl mb-10"
        />

        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
          Portfolio Website
        </h1>

        <p className="text-gray-400 text-lg leading-8">
          Personal animated portfolio website with premium UI,
          modern layout and interactive pages.
        </p>

      </section>

    </main>
  );
}