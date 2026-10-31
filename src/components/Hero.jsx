


import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Heart,
  Sparkles,
  Layers3,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-5 pb-16 pt-24 sm:px-8 md:pb-20 md:pt-28"
    >
      {/* Soft pastel background */}
      <div
        aria-hidden="true"
        className="pink-grid absolute inset-0 -z-10 opacity-60"
      />

      <div
        aria-hidden="true"
        className="absolute -right-24 top-20 -z-10 h-72 w-72 rounded-full bg-blush/70 blur-3xl md:right-12 md:h-96 md:w-96"
      />

      <div
        aria-hidden="true"
        className="absolute -left-20 bottom-8 -z-10 h-64 w-64 rounded-full bg-lilac/60 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-14">
        {/* Left: Intro */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-xs font-semibold text-cherry shadow-sm"
          >
            <Sparkles size={14} />
            Full-stack developer · detail enthusiast
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="display mt-6 max-w-3xl text-5xl leading-[1.04] sm:text-6xl md:text-7xl xl:text-[5.3rem]"
          >
            I turn{" "}
            <span className="italic text-cherry">Code</span> into something
            lovely.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-8 text-ink/70 sm:text-lg"
          >
            Hey, I’m Miaad — a full-stack MERN developer creating thoughtful
            digital experiences with clean code, considered details, and
            delightful interactions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[#B63E5A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#B63E5A]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#96324A] hover:shadow-xl"
            >
              Explore my projects
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-cherry/40 hover:bg-white"
            >
              Say hello
              <Heart size={15} className="text-cherry" />
            </a>
          </motion.div>

          <div className="mt-8 flex items-center gap-3 text-sm text-ink/55">
            <span className="h-px w-10 bg-rose-300" />
            Building thoughtful experiences, one project at a time
            <ArrowDownRight size={15} />
          </div>
        </div>

        {/* Right: About card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md lg:mt-2"
        >
          {/* Floating greeting */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-1 -top-3 z-10 grid h-14 w-14 place-items-center rounded-2xl border border-rose-200 bg-white text-cherry shadow-soft sm:-right-4 sm:-top-4 sm:h-16 sm:w-16"
          >
            <span className="hand text-3xl">hi!</span>
          </motion.div>

          <div className="paper-grain rounded-[2.3rem] border border-rose-200 bg-[#F7E4E8] p-3.5 shadow-soft sm:rounded-[2.5rem] sm:p-5">
            <div className="rounded-[1.9rem] border border-white/80 bg-cream p-5 sm:rounded-[2rem] sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="hand text-2xl text-cherry">
                  a little about me
                </span>
                <Sparkles size={18} className="shrink-0 text-[#D49AAB]" />
                
              </div>

              <div className="mt-5 rounded-[1.6rem] bg-blush/65 p-5 sm:p-6">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border-[6px] border-white bg-lilac text-4xl shadow-sm sm:h-28 sm:w-28 sm:text-5xl">
                  ୨୧
                </div>

                <h2 className="mt-4 text-center font-serif text-2xl text-ink">
                  Thoughtful by design.
                </h2>

                <p className="mt-2 text-center text-sm leading-6 text-ink/60">
                  Curious mind · clean code · meaningful solutions
                </p>
              </div>

              {/* Professional info cards */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-rose-100 bg-white p-3.5 sm:p-4">
                  <Code2 size={19} className="text-cherry" />

                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-ink/50 sm:text-xs">
                    Speciality
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-5 text-ink sm:text-base">
                    MERN Stack
                  </p>
                </div>

                <div className="rounded-2xl border border-rose-100 bg-white p-3.5 sm:p-4">
                  <Layers3 size={19} className="text-cherry" />

                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-ink/50 sm:text-xs">
                    My approach
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-5 text-ink sm:text-base">
                    User-first design
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Small decorative flower */}
          <motion.span
            aria-hidden="true"
            animate={{ rotate: [0, 10, 0], y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-4 -right-1 text-3xl text-[#D49AAB] sm:-right-3 sm:text-4xl"
          >
            ✿
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}