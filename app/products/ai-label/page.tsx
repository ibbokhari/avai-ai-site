
import Section from "@/components/Section";
import { Card } from "@/components/Card";

export default function AiLabel(){
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="h1">AiLabel</h1>
        <p className="p-muted max-w-2xl">Document-to-Label engine for airlines. Extract Name, Seat, Meal from PSR or catering lists, auto-assign zones, and export print-ready labels.</p>
      </header>
      <Section title="Highlights">
        <div className="grid md:grid-cols-3 gap-4">
          {["OCR + auto-repair","Zone assignment","40×30mm PDF labels"].map(t => (
            <Card key={t}><p className="font-semibold">{t}</p><p className="p-muted mt-1">Production-tested features for cabin ops.</p></Card>
          ))}
        </div>
      </Section>
      <Section title="Interactive demo" subtitle="Local-only demo (no upload to external servers).">
        <div className="card p-6">
          <p className="p-muted">Coming soon: drop a sample image or JSON to preview parsing, zone assignment, and label export.</p>
        </div>
      </Section>
      <Section title="Docs & Downloads">
        <ul className="list-disc pl-6 space-y-2">
          <li><a href="/downloads#ailabel" className="hover:underline">Download sample label PDFs & CSV schema</a></li>
          <li><a href="/blog" className="hover:underline">Implementation notes & changelog</a></li>
        </ul>
      </Section>
    </div>
  );
}
