
'use client';
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center space-y-6 py-12 md:py-20">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="h1"
      >
        Airline-grade AI that ships.
      </motion.h1>
      <p className="p-muted max-w-3xl mx-auto">
        Two focused products: <span className="badge">AiLabel</span> — OCR → structured labels & stickers;<br className="hidden md:block"/>
        <span className="badge">Giant Filter</span> — crew line optimization, legality-aware trades, and smart bidding.
      </p>
      <div className="flex justify-center gap-3">
        <Link href="/demos" className="btn btn-primary">See live demos</Link>
        <Link href="/products" className="btn btn-ghost">Explore products</Link>
      </div>
    </section>
  );
}
