import { motion } from "framer-motion";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
      className="group min-w-0"
    >
      <div className="relative overflow-hidden rounded-xl bg-[#e5e0d5]">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            className="aspect-[5/4] w-full object-cover transition duration-700 group-hover:scale-[1.035]"
          />
        ) : (
          <div className="flex aspect-[5/4] items-end p-6 md:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#73746b]">
                Project {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="editorial-heading mt-3 text-4xl">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-[#73746b]">
                Add an actual project screenshot
              </p>
            </div>
          </div>
        )}

        {project.status && (
          <span className="absolute left-4 top-4 rounded-full bg-[#f4f0e7] px-3 py-1.5 text-xs">
            {project.status}
          </span>
        )}
      </div>

      <div className="flex items-start justify-between gap-4 pt-5">
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-[#b85c38]">
            {project.category}
          </p>
          <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
        </div>

        <span className="text-sm text-[#73746b]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="mt-3 text-sm leading-7 text-[#73746b]">
        {project.description}
      </p>

      {project.points?.length > 0 && (
        <ul className="mt-4 space-y-2">
          {project.points.map((point) => (
            <li
              key={point}
              className="flex gap-2 text-sm leading-6 text-[#55564e]"
            >
              <span className="text-[#b85c38]">↳</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[#d8d2c5] px-3 py-1.5 text-xs text-[#55564e]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-5 border-t border-[#d8d2c5] pt-4 text-sm">
        {project.live && project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link font-medium"
          >
            Live project ↗
          </a>
        )}

        {project.code && project.code !== "#" && (
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link text-[#73746b]"
          >
            Source code ↗
          </a>
        )}
      </div>
    </motion.article>
  );
}