
'use client';
import { useState } from "react";
import { Card } from "./Card";

export default function DemoCard({title, children}:{title:string; children:React.ReactNode}){
  const [open, setOpen] = useState(false);
  return (
    <Card>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button className="btn btn-ghost" onClick={()=>setOpen(o=>!o)}>
          {open ? "Hide" : "Try demo"}
        </button>
      </div>
      {open && <div className="mt-4">{children}</div>}
    </Card>
  );
}
