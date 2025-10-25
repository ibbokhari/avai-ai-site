
'use client';
import DemoCard from "@/components/DemoCard";
import { useState } from "react";

export default function Demos(){
  const [aiText, setAiText] = useState("");
  return (
    <div className="grid gap-6">
      <DemoCard title="AiLabel: Paste sample JSON → parsed table">
        <textarea
          className="w-full h-40 rounded-xl bg-[#0b1126] border border-[#273057] p-3 text-sm"
          placeholder='[{ "Name":"John Doe","Seat":"12A","Meal":"VGML"}]'
          onChange={(e)=>setAiText(e.target.value)}
        />
        <pre className="mt-3 text-xs p-muted whitespace-pre-wrap">{aiText || "Output will appear here..."}</pre>
      </DemoCard>

      <DemoCard title="Giant Filter: Pick constraints (stub)">
        <div className="grid md:grid-cols-3 gap-4">
          <label className="block">
            <span className="text-sm p-muted">Max total legs</span>
            <input type="number" className="w-full rounded-xl bg-[#0b1126] border border-[#273057] p-2" defaultValue={20}/>
          </label>
          <label className="block">
            <span className="text-sm p-muted">Min credit hours</span>
            <input type="number" className="w-full rounded-xl bg-[#0b1126] border border-[#273057] p-2" defaultValue={75}/>
          </label>
          <label className="block">
            <span className="text-sm p-muted">Avoid destinations</span>
            <input type="text" className="w-full rounded-xl bg-[#0b1126] border border-[#273057] p-2" placeholder="CAI, AJF"/>
          </label>
        </div>
        <button className="btn btn-primary mt-4">Run (stub)</button>
      </DemoCard>
    </div>
  );
}
