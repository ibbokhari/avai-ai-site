
export default function Downloads(){
  return (
    <div className="space-y-8">
      <header>
        <h1 className="h1">Downloads</h1>
        <p className="p-muted">Sample PDFs, CSV templates, and integration guides.</p>
      </header>

      <section id="ailabel" className="card p-6">
        <h2 className="h2">AiLabel</h2>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li><a className="hover:underline" href="#">40×30mm label PDF (sample)</a></li>
          <li><a className="hover:underline" href="#">CSV schema & example</a></li>
        </ul>
      </section>

      <section id="giantfilter" className="card p-6">
        <h2 className="h2">Giant Filter</h2>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li><a className="hover:underline" href="#">Line_Blocks template (CSV)</a></li>
          <li><a className="hover:underline" href="#">Sample filters JSON</a></li>
        </ul>
      </section>
    </div>
  );
}
