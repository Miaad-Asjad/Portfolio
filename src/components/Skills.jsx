

import { Code2, Database, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/Site";

const icons = [Code2, Database, Wrench];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-pad relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="02"
          eyebrow="Skills & expertise"
          title={
            <>
              My tools for building{" "}
              <span className="italic text-cherry">
                meaningful things.
              </span>
            </>
          }
          subtitle="From thoughtful React interfaces to dependable backend systems, I turn ideas into practical digital experiences."
        />

        {/* Skills cards */}
        <div className="grid gap-5 lg:grid-cols-3">
          {skills.map((group, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Reveal
                key={group.title}
                delay={index * 0.1}
              >
                <article
                  className={`group h-full rounded-[1.8rem] border border-rose-200/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-rose-300 hover:shadow-lg hover:shadow-rose-100/60 sm:p-8 ${
                    index === 1
                      ? "bg-blush/55"
                      : "bg-white/80"
                  }`}
                >
                  {/* Card header */}
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-cherry shadow-sm transition duration-300 group-hover:rotate-[-5deg] group-hover:scale-105">
                      <Icon size={22} />
                    </span>

                    <span className="hand text-2xl text-cherry/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Group details */}
                  <h3 className="display mt-7 text-2xl text-ink">
                    {group.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-ink/65">
                    {group.note}
                  </p>

                  {/* Skill tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-rose-200 bg-white/85 px-3 py-2 text-xs font-medium text-ink/75 transition duration-200 hover:border-cherry/40 hover:bg-rose-50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Closing note */}
        <Reveal>
          <div className="mt-9 flex items-center justify-center gap-3 text-center">
            <span className="h-px w-8 bg-rose-200 sm:w-12" />

            <p className="hand text-xl text-cherry sm:text-2xl">
              Always learning. Always building. ♡
            </p>

            <span className="h-px w-8 bg-rose-200 sm:w-12" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}