import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Kind words", "#reviews"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-rose-200/70 bg-cream/90 px-4 py-3 shadow-soft backdrop-blur-xl sm:px-6">
        <a href="#home" className="flex items-center gap-2 font-bold tracking-tight" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-blush text-cherry"><Heart size={16} fill="currentColor" /></span>
          <span className="text-lg">Build With <span className="text-cherry">Miaad</span></span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => <a key={label} href={href} className="text-sm text-ink/70 transition hover:text-cherry">{label}</a>)}
          <a href="#contact" className="rounded-full bg-cherry px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#96324a]">Let's chat ↗</a>
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-full border border-rose-200 text-ink md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-3 mt-2 rounded-3xl border border-rose-200 bg-cream p-4 shadow-soft md:hidden">
          {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm hover:bg-blush/60">{label}</a>)}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-xl bg-cherry px-4 py-3 text-center text-sm font-semibold text-white">Let's chat ↗</a>
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}
