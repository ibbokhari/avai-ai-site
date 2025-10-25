
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";

export default function HomePage(){
  return (
    <div>
      <Hero />
      <Section title="Products" subtitle="Purpose-built tools that solve real airline problems.">
        <ProductCard
          title="AiLabel — OCR → Label Engine"
          desc="Parse special meal lists, PSR cards, and other docs into clean records. Assign zones, filter meals, generate PDF labels, and export CSV — all on-device or via API."
          href="/products/ai-label"
          tags={["OCR","Azure Document Intelligence","PDF labels","Zone assign","CSV export"]}
        />
        <ProductCard
          title="Giant Filter — Crew Line Optimizer"
          desc="Search and score lines by legality, credit, block, layovers, and personal constraints. Simulate trades with rest rules and return the best options."
          href="/products/giant-filter"
          tags={["Legality-aware","Trade simulation","Smart scoring","CSV ingestion"]}
        />
      </Section>
    </div>
  );
}
