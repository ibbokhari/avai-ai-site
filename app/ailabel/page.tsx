export default function AiLabelPage() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-white font-sans px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <a href="/" className="text-teal-400 underline">← Back to Home</a>

        <h1 className="text-4xl font-bold text-teal-400">AiLabel</h1>
        <p className="text-gray-300">
          AiLabel is a smart labeling system that converts camera captures or uploaded
          documents into structured, ready-to-print labels. It simplifies catering and
          logistics operations by automating data extraction and organization.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Key Capabilities</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Read special-meal lists or forms directly from images or PDFs.</li>
          <li>Generate labels instantly for seats, passengers, or inventory items.</li>
          <li>Adapt zone assignment to each airline’s workflow.</li>
          <li>Export structured data for reporting or re-use.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Future Direction</h2>
        <p className="text-gray-300">
          AiLabel will expand beyond catering into broader logistics,
          allowing any department to digitize physical lists and
          transform them into usable datasets in seconds.
        </p>
      </div>
    </div>
  );
}
