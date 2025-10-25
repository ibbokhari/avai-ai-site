import React from "react";
import { motion } from "framer-motion";
import {
  Plane, Compass, Moon, Watch, Globe2, BellRing, MessageSquare, ShieldCheck,
  LineChart, HeartPulse, Sparkles, Users2, BookOpenText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

// --- Utility animation presets ---
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const fade = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.6 } } };

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 mb-4">
              <Sparkles className="size-4" />
              More than a line bidder — your smart flying companion
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              The <span className="text-indigo-600">Giant Filter</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600">
              Built for crew who already know what they want. See your month clearly, trade smarter, and live better — with
              live guidance from your watch, your schedule, and the world around you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button className="h-11 px-6 text-base">Request Early Access</Button>
              <a href="#line-assistant" className="text-indigo-700 hover:text-indigo-800 font-medium">Explore features ↓</a>
            </div>
          </motion.div>

          {/* Hero badges */}
          <motion.div variants={fade} initial="hidden" animate="show" className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Plane, label: "Roster aware" },
              { icon: Compass, label: "Trade finder" },
              { icon: HeartPulse, label: "Health sync" },
              { icon: Watch, label: "Apple & Samsung" },
              { icon: BookOpenText, label: "CCOM reference" },
              { icon: BellRing, label: "Live agents" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-xl bg-white shadow-sm px-3 py-2">
                <Icon className="size-5 text-indigo-600" />
                <span className="text-sm font-medium text-neutral-700">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Line Assistant */}
      <section id="line-assistant" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">The Line Assistant</h2>
            <p className="mt-3 text-neutral-600">Where everything begins — and where the Giant Filter already shines.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><LineChart className="size-5 text-indigo-600"/> Smart scoring</CardTitle>
                <CardDescription>Each line gets a clear score: block, rest, layovers, CAI count, four-leg duties, report times.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700">Compare options in seconds —
                optimized for crew who already know what they want.</CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Compass className="size-5 text-indigo-600"/> Trade finder</CardTitle>
                <CardDescription>Find who can take your pairing and what you can take back.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700">Legality checks, rest rules, off-day matching —
                suggested swaps are safe before you even ask.</CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Users2 className="size-5 text-indigo-600"/> Crew communication</CardTitle>
                <CardDescription>Direct link with the bid result file to collaborate in real time.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700">See who holds which line, chat, and coordinate trades in a single shared view.</CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><ShieldCheck className="size-5 text-indigo-600"/> Legality awareness</CardTitle>
                <CardDescription>Report & arrival times are validated automatically.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700">Every suggested change respects rest windows and extended-duty rules.</CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><BookOpenText className="size-5 text-indigo-600"/> Instant CCOM reference</CardTitle>
                <CardDescription>Tap during report or extended duty for the exact manual line.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700">No searching — procedures and definitions appear right when needed.</CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Sparkles className="size-5 text-indigo-600"/> Line strategist</CardTitle>
                <CardDescription>More than bidding — it thinks with you.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700">Prefers later starts? KUL layovers? Free week mid‑month? It ranks by your style.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lifestyle, Layover, Live */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Moon className="size-5 text-indigo-600"/> Lifestyle assistant</CardTitle>
              <CardDescription>Balance your month, not just your flights.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-neutral-700">Watches flying rhythm and connected rest. Sends gentle reminders when rest is short.</CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Globe2 className="size-5 text-indigo-600"/> Layover assistant</CardTitle>
              <CardDescription>Arrive informed, recover faster.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-neutral-700">Safe zones, nearby cafés, rest‑friendly tips, and country headlines for quick awareness.</CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Watch className="size-5 text-indigo-600"/> Health & sleep tracker</CardTitle>
              <CardDescription>Apple Watch & Samsung Watch integration.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-neutral-700">Sleep, heart rate, and natural signals across time zones — to nudge when your body needs care.</CardContent>
          </Card>
        </div>
      </section>

      {/* Live instructions & agents */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><BellRing className="size-5 text-indigo-600"/> Live instructions</CardTitle>
              <CardDescription>Get the right alert at the right time.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-neutral-700">Report changes, gate/weather updates, and quick line notes.
              Country headlines included for awareness without searching.</CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><MessageSquare className="size-5 text-indigo-600"/> Smart agents</CardTitle>
              <CardDescription>Helpful automation you don’t have to think about.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-neutral-700">Background helpers send reminders, validate legality, and surface better line options proactively.</CardContent>
          </Card>
        </div>
      </section>

      {/* Vision 2030 stats */}
      <section className="py-16 lg:py-24 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Built for Vision 2030</h2>
            <p className="mt-3 text-neutral-700">As Saudi aviation expands, Giant Filter scales with it — empowering crew to stay smart, healthy, and connected.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Stat label="Passengers / year" value="330M" />
            <Stat label="New aviation jobs" value="35K" />
            <Stat label="Sector investment" value="$100B+" />
          </div>
        </div>
      </section>

      {/* Numbers / CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">By the numbers (2030 goal)</h3>
              <ul className="mt-6 space-y-3 text-neutral-700">
                <li>• <span className="font-medium">35–40K</span> active crew users</li>
                <li>• <span className="font-medium">$15–20M</span> annual revenue</li>
                <li>• <span className="font-medium">$75–160M</span> company valuation</li>
              </ul>
              <p className="mt-6 text-neutral-600">Born from real crew life. Built with intelligence. Growing into a digital companion for aviation professionals worldwide.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button className="h-11 px-6 text-base">Get a Demo</Button>
                <Button variant="outline" className="h-11 px-6 text-base">Download One‑Pager</Button>
              </div>
            </div>
            <Quote />
          </div>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Giant Filter — Avia AI</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#line-assistant" className="text-neutral-600 hover:text-neutral-900">Features</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">Privacy</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm p-6">
      <div className="text-3xl font-bold text-indigo-700">{value}</div>
      <div className="mt-1 text-sm text-neutral-600">{label}</div>
    </div>
  );
}

function Quote() {
  return (
    <Card className="rounded-2xl bg-gradient-to-br from-white to-indigo-50">
      <CardHeader>
        <CardTitle className="text-xl">In one line</CardTitle>
        <CardDescription>The Giant Filter helps crew live better, trade smarter, and understand every rule — instantly, straight from the manual.</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-neutral-700">
        <div className="flex items-start gap-3">
          <div className="mt-1"><Plane className="size-5 text-indigo-600"/></div>
          <p>
            It reads your roster, syncs with your watch, references the CCOM during report or extended duty, and keeps you
            informed with live agents and country headlines — so you can focus on flying.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
