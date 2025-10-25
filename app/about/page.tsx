
export default function About(){
  return (
    <div className="space-y-6">
      <h1 className="h1">About Avia AI</h1>
      <p className="p-muted max-w-3xl">
        We build focused AI tools for airline operations — from cabin to crew scheduling.
        Founded in Riyadh, aligned with Vision 2030, and committed to pragmatic innovation.
      </p>
      <div className="card p-6">
        <ul className="list-disc pl-6 space-y-1">
          <li>Built by airline insiders; validated in daily ops</li>
          <li>Privacy-first demos (local-only)</li>
          <li>Modular APIs for enterprise rollout</li>
        </ul>
      </div>
    </div>
  );
}
