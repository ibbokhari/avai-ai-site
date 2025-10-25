
import ProductCard from "@/components/ProductCard";
export default function Products(){
  return (
    <div className="grid gap-6">
      <ProductCard
        title="AiLabel — OCR → Label Engine"
        desc="Upload a catering list or PSR screenshot, get structured data, recover missing rectangles, and print 40×30mm labels."
        href="/products/ai-label"
        tags={["OCR","Recovery","Labeling","API & Web"]}
      />
      <ProductCard
        title="Giant Filter — Crew Line Optimizer"
        desc="Filter by layovers, day-offs, report times; validate rest rules; run multi-step trade trees."
        href="/products/giant-filter"
        tags={["Filters","Legality","Trades","CSV"]}
      />
    </div>
  );
}
