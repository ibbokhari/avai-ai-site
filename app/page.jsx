export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-white font-sans">
      <header className="max-w-6xl mx-auto py-6 flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold text-teal-400">Avai</h1>
      </header>

      <main className="max-w-6xl mx-auto px-4 pt-12 pb-24">
        <h2 className="text-center text-4xl font-semibold mb-12">
          Our Core Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* AiLabel card */}
          <div className="bg-[#121738] border border-[#273057] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-teal-400">
                AiLabel
              </h3>
              <p className="mt-3 text-gray-300">
                AiLabel transforms unstructured information—lists, documents, or
                images—into ready-to-use labels and organized data. Designed for
                airline catering, ground operations, and other fields where
                accuracy and speed matter.
              </p>
            </div>
            <a
              href="/ailabel"
              className="mt-6 inline-block bg-teal-400 text-black font-medium px-6 py-2 rounded-xl text-center"
            >
              Learn More
            </a>
          </div>

          {/* Giant Filter card */}
          <div className="bg-[#121738] border border-[#273057] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-teal-400">
                Giant Filter
              </h3>
              <p className="mt-3 text-gray-300">
                Giant Filter is a data-driven platform that helps airlines and
                crew teams analyze line schedules, trades, and rest legality.
                It turns complex pairing data into clear, actionable insights
                for planning and fairness.
              </p>
            </div>
            <a
              <a href="#giant-filter" className="inline-block bg-teal-400 text-black px-5 py-2 rounded-2xl font-medium">
            >
              Discover Giant Filter
            </a>

          </div>
        </div>
      </main>

      <footer className="text-center text-gray-500 py-6 border-t border-[#273057]">
        <p>© {new Date().getFullYear()} Avai — Built in Riyadh</p>
      </footer>
    </div>
  );
}
