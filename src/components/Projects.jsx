
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Heart } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import SectionHeading from "./SectionHeading";
import { projects } from "../data/Site";

const palettes = {
  lilac: "bg-lilac",
  blush: "bg-blush",
  cream: "bg-blush",
};

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Full-stack", "Frontend UI"];

  const shown = projects.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Frontend UI") return project.title === "Arab Oasis";
    return project.title !== "Arab Oasis";
  });

  return (
    <section id="projects" className="section-pad bg-[#FBF0F2]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="03"
          eyebrow="A few things I've made"
          title={
            <>
              Little projects,{" "}
              <span className="italic text-cherry">big love.</span>
            </>
          }
          subtitle="A selection of projects I've worked on. Each one taught me something new about building for real people."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2.5 text-sm transition ${
                filter === item
                  ? "bg-cherry text-white"
                  : "border border-rose-200 bg-white/75 text-ink/65 hover:border-cherry/40"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2">
          {shown.map((project, index) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -5 }}
              className="group overflow-hidden rounded-[1.8rem] border border-rose-200/80 bg-cream shadow-sm transition-shadow hover:shadow-soft"
            >
              <div
                className={`${
                  palettes[project.color] || "bg-blush"
                } paper-grain relative m-3 flex min-h-48 items-center justify-center overflow-hidden rounded-[1.4rem] p-7 sm:min-h-56`}
              >
                <span className="absolute left-5 top-5 rounded-full border border-white/80 bg-white/65 px-3 py-1.5 text-xs font-semibold text-ink/60">
                  {project.number} / PROJECT
                </span>

                <motion.span
                  whileHover={{ rotate: 12, scale: 1.08 }}
                  className="display text-[7rem] leading-none text-cherry/80 sm:text-[9rem]"
                >
                  {project.symbol}
                </motion.span>
              </div>

              <div className="p-6 pt-3 sm:p-7 sm:pt-3">
                <p className="text-xs font-semibold uppercase tracking-[.17em] text-cherry">
                  {project.type}
                </p>

                <h3 className="display mt-2 text-3xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-ink/65">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blush/70 px-3 py-1.5 text-xs text-ink/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4 border-t border-rose-100 pt-5">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cherry hover:underline"
                    >
                      Live project
                      <ExternalLink size={15} />
                    </a>
                  )}

                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70 hover:text-cherry"
                    >
                      <FaGithub size={15} />
                      Source code
                      <ArrowUpRight size={14} />
                    </a>
                  )}

                  {!project.live && !project.code && (
                    <span className="inline-flex items-center gap-2 text-sm text-ink/50">
                      <Heart size={15} />
                      Project details coming soon
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <p className="hand mt-8 text-center text-2xl text-cherry">
          The best part? There's always something new to learn. ✿
        </p>
      </div>
    </section>
  );
}



