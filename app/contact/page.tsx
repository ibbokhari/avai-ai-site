
'use client';
import { useState } from "react";

export default function Contact(){
  const [status, setStatus] = useState<string | null>(null);
  async function submit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget) as any);
    try{
      const res = await fetch("/api/contact", { method:"POST", body: JSON.stringify(data)});
      if(res.ok) setStatus("Thanks — we'll be in touch.");
      else setStatus("Something went wrong.");
    }catch{
      setStatus("Network error.");
    }
  }
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="h1">Contact</h1>
        <p className="p-muted">Tell us about your use case — airline, training, or MRO.</p>
      </div>
      <form onSubmit={submit} className="card p-6 space-y-3">
        <input required name="name" placeholder="Name" className="rounded-xl bg-[#0b1126] border border-[#273057] p-3 w-full"/>
        <input required type="email" name="email" placeholder="Email" className="rounded-xl bg-[#0b1126] border border-[#273057] p-3 w-full"/>
        <textarea required name="msg" placeholder="Message" className="rounded-xl bg-[#0b1126] border border-[#273057] p-3 w-full h-32"/>
        <button className="btn btn-primary">Send</button>
        {status && <p className="p-muted">{status}</p>}
      </form>
    </div>
  );
}
