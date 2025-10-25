
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Avia AI — AiLabel & Giant Filter",
  description: "Operational AI for airlines: AiLabel (OCR-to-Label) and Giant Filter (crew line optimization)."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4">
          <NavBar />
          <main className="py-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function NavBar() {
  const links = [
    ["Home","/"],
    ["Products","/products"],
    ["Demos","/demos"],
    ["Downloads","/downloads"],
    ["Blog","/blog"],
    ["About","/about"],
    ["Contact","/contact"]
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0b1020]/60">
      <div className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Avia AI" className="h-8 w-auto" />
          <span className="sr-only">Avia AI</span>
        </Link>
        <nav className="hidden md:flex gap-2">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="nav-link">{label}</Link>
          ))}
        </nav>
        <Link href="/contact" className="btn btn-primary">Get in touch</Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-[#273057] py-10 p-muted">
      <div className="grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <p className="font-semibold mb-2">Avia AI</p>
          <p>Operational AI for airlines — built in Riyadh.</p>
        </div>
        <div>
          <p className="font-semibold mb-2">Products</p>
          <ul className="space-y-1">
            <li><a className="hover:underline" href="/products/ai-label">AiLabel</a></li>
            <li><a className="hover:underline" href="/products/giant-filter">Giant Filter</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Connect</p>
          <ul className="space-y-1">
            <li><a className="hover:underline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="hover:underline" href="mailto:contact@avia.ai">contact@avia.ai</a></li>
          </ul>
        </div>
      </div>
      <p className="mt-6 text-xs">© {new Date().getFullYear()} Avia AI. All rights reserved.</p>
    </footer>
  );
}
