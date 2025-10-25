
import Link from "next/link";
import { Card } from "./Card";

export default function ProductCard({title, desc, href, tags}:{title:string; desc:string; href:string; tags:string[]}){
  return (
    <Card>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="p-muted mt-1">{desc}</p>
          <div className="mt-3 flex gap-2 flex-wrap">
            {tags.map(t => <span key={t} className="badge">{t}</span>)}
          </div>
        </div>
        <Link href={href} className="btn btn-primary">Learn more</Link>
      </div>
    </Card>
  );
}
