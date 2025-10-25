
import Section from "@/components/Section";
import { Card } from "@/components/Card";

export default function GiantFilter(){
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="h1">Giant Filter</h1>
        <p className="p-muted max-w-2xl">Legality-aware line optimizer and trade simulator. Built from real-world cabin crew workflows in Riyadh.</p>
      </header>
      <Section title="Capabilities">
        <div className="grid md:grid-cols-3 gap-4">
          {["Smart filters & scoring","Legality validator","Trade tree simulation"].map(t => (
            <Card key={t}><p className="font-semibold">{t}</p><p className="p-muted mt-1">Tune for block, credit, off-days, layovers.</p></Card>
          ))}
        </div>
      </Section>
      <Section title="Demo">
        <div className="card p-6">
          <p className="p-muted">Coming soon: upload a CSV (Line_Blocks) and run example filters & legality checks directly in the browser.</p>
        </div>
      </Section>
      <Section title="Docs & Downloads">
        <ul className="list-disc pl-6 space-y-2">
          <li><a href="/downloads#giantfilter" className="hover:underline">CSV templates & example datasets</a></li>
          <li><a href="/blog" className="hover:underline">Guides: legality, filters, trade logic</a></li>
        </ul>
      </Section>
    </div>
  );
}
