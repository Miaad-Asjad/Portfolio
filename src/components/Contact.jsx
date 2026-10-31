import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "../data/site";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#35272C] px-5 py-24 text-cream sm:px-8 md:py-32">
      <div aria-hidden className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-cherry/25 blur-[100px]" />
      <div aria-hidden className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-rose/15 blur-[90px]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xs font-bold uppercase tracking-[.22em] text-[#F0B9C8]">05 / Your turn, lovely human</motion.p>
        <div className="mt-8 grid gap-10 md:grid-cols-[1.3fr_.7fr] md:items-end md:gap-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65 }} className="display text-5xl leading-[1.08] sm:text-6xl md:text-7xl lg:text-8xl">Got a little idea? <span className="italic text-[#F0B9C8]">Let's make it real.</span></motion.h2>
          <div><p className="max-w-md text-sm leading-7 text-white/70 sm:text-base">Tell me what you're dreaming up, what you're trying to solve, or what kind of digital thing you wish existed. My inbox is open.</p>
            <a href={`mailto:${site.email}?subject=${encodeURIComponent("Let's make something lovely")}`} className="group mt-7 inline-flex items-center gap-3 rounded-full bg-cream px-6 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-1 bg-white"><Mail size={17} /> Write me a little note <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
            <p className="mt-4 break-all text-xs text-white/50">{site.email}</p>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/15 pt-5 text-xs text-white/55 sm:flex-row sm:items-center"><a href="#home" className="w-fit transition hover:text-white">Back to the top ↑</a></div>
      </div>
    </section>
  );
}



