// import { Heart, Sparkles, WandSparkles } from "lucide-react";
// import Reveal from "./Reveal";
// import SectionHeading from "./SectionHeading";

// const notes = [
//   { icon: Heart, title: "People first", text: "I care about the person on the other side of the screen — not just the pixels." },
//   { icon: WandSparkles, title: "Thoughtful details", text: "Small interactions and clear layouts can make a product feel genuinely lovely." },
//   { icon: Sparkles, title: "Always curious", text: "I enjoy learning, untangling problems, and making each project a little better." }
// ];

// export default function About() {
//   return (
//     <section id="about" className="section-pad bg-white/65">
//       <div className="mx-auto max-w-7xl">
//         <SectionHeading number="01" eyebrow="The person behind the pixels" title={<>A little nerdy, a little dreamy. <span className="italic text-cherry">Entirely me.</span></>} subtitle="I build digital experiences where solid engineering meets thoughtful design." />
//         <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
//           <Reveal>
//             <div className="paper-grain relative rounded-[2rem] border border-rose-200 bg-blush/55 p-6 sm:p-9">
//               <span className="hand absolute right-7 top-5 rotate-6 text-2xl text-cherry">nice to meet you!</span>
//               <div className="mt-8 rounded-[1.5rem] bg-cream p-6 sm:p-8">
//                 <p className="display text-3xl leading-snug sm:text-4xl">“Good code should work beautifully — and feel good to use.”</p>
//                 <div className="mt-6 flex items-center gap-3"><span className="h-px w-10 bg-cherry" /><span className="text-xs font-semibold uppercase tracking-[.18em] text-ink/50">My little philosophy</span></div>
//               </div>
//               <div className="mt-5 flex flex-wrap gap-2">
//                 {["curiosity", "care", "clean code", "good coffee"].map((tag) => <span key={tag} className="rounded-full border border-rose-200 bg-white/75 px-3 py-1.5 text-xs text-ink/70">{tag}</span>)}
//               </div>
//             </div>
//           </Reveal>
//           <div>
//             <Reveal><p className="text-base leading-8 text-ink/75">I'm Miaad, a Full Stack MERN Developer who enjoys taking an idea from its first sketch to a working web experience. I work across React interfaces, Node and Express APIs, and MongoDB data models — keeping usability and maintainability in mind.</p></Reveal>
//             <Reveal delay={.1}><p className="mt-5 text-base leading-8 text-ink/75">I like interfaces with personality, but I believe the best design is more than decoration: it helps people understand what to do, trust the product, and enjoy using it.</p></Reveal>
//             <div className="mt-8 grid gap-4 sm:grid-cols-3">
//               {notes.map(({ icon: Icon, title, text }, i) => <Reveal key={title} delay={i * .08}><article className="soft-card h-full rounded-2xl p-5"><Icon size={20} className="text-cherry" /><h3 className="mt-4 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-ink/60">{text}</p></article></Reveal>)}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { Heart, Sparkles, WandSparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const notes = [
  {
    icon: Heart,
    title: "People first",
    text: "I care about the person on the other side of the screen — not just the pixels.",
  },
  {
    icon: WandSparkles,
    title: "Thoughtful details",
    text: "Small interactions and clear layouts can make a product feel genuinely lovely.",
  },
  {
    icon: Sparkles,
    title: "Always curious",
    text: "I enjoy learning, untangling problems, and making each project a little better.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-white/65">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="01"
          eyebrow="The person behind the pixels"
          title={
            <>
              Thoughtful by nature.
              <span className="italic text-cherry"> Developer by craft.</span>
            </>
          }
          subtitle="I build digital experiences where solid engineering meets thoughtful design."
        />

        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="paper-grain relative rounded-[2rem] border border-rose-200 bg-blush/55 p-6 sm:p-9">
              <span className="hand absolute right-7 top-5 text-sm text-cherry sm:text-base">
                hello, there ♡
              </span>

              <div className="mt-8 rounded-[1.5rem] bg-cream p-6 sm:p-8">
                <p className="display text-3xl leading-snug sm:text-4xl">
                  “Good code should work beautifully — and feel good to use.”
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-cherry" />
                  <span className="text-xs font-semibold uppercase tracking-[.18em] text-ink/50">
                    My philosophy
                  </span>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {["curiosity", "care", "clean code", "good coffee"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-rose-200 bg-white/75 px-3 py-1.5 text-xs text-ink/70"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-base leading-8 text-ink/75">
                I'm Miaad, a Full Stack MERN Developer who enjoys taking an
                idea from its first sketch to a working web experience. I work
                across React interfaces, Node and Express APIs, and MongoDB
                data models — keeping usability and maintainability in mind.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-8 text-ink/75">
                I like interfaces with personality, but I believe the best
                design is more than decoration: it helps people understand
                what to do, trust the product, and enjoy using it.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {notes.map(({ icon: Icon, title, text }, i) => (
                <Reveal key={title} delay={i * 0.08}>
                  <article className="soft-card h-full rounded-2xl p-5">
                    <Icon size={20} className="text-cherry" />
                    <h3 className="mt-4 font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink/60">
                      {text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}