export default function GiantFilterPage() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-white font-sans px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <a href="/" className="text-teal-400 underline">← Back to Home</a>

        <h1 className="text-4xl font-bold text-teal-400">Giant Filter</h1>
        <p className="text-gray-300">
          Giant Filter is Avai’s data-utilization engine. It helps airlines and
          crew members analyze, score, and plan schedules using AI-assisted
          logic for legality, rest, and fairness.
        </p>

        <h2 className="text-2xl font-semibold mt-8">What It Does</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Reads and organizes crew line-block, pairing, and bid-result data.</li>
          <li>Identifies optimal schedules based on rest rules and crew preferences.</li>
          <li>Runs trade simulations to test legality and balance.</li>
          <li>Supports scoring filters for credit, block time, and lifestyle metrics.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Vision Ahead</h2>
        <p className="text-gray-300">
          Future updates will integrate deeper AI planning, predicting
          availability and suggesting best lines automatically, linking
          with external systems for end-to-end operational insight.
        </p>
      </div>
    </div>
  );
}
