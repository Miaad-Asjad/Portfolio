// import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { Heart, Mail } from "lucide-react";
// import { site } from "../data/Site";

// const socials = [
//   { label: "GitHub", href: site.github, Icon: FaGithub },
//   { label: "LinkedIn", href: site.linkedin, Icon: FaLinkedinIn },
//   { label: "Email", href: `mailto:${site.email}`, Icon: Mail }
// ];
// const links = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Kind words", "#reviews"], ["Contact", "#contact"]];

// export default function Footer() {
//   return (
//     <footer className="border-t border-rose-200/70 bg-cream px-5 py-8 sm:px-8">
//       <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
//         <div><a href="#home" className="text-lg font-bold">Build With <span className="text-cherry">Miaad</span> <span className="hand ml-1 text-xl font-medium text-cherry">୨୧</span></a><p className="mt-1 text-xs text-ink/50">Thoughtful code, with a little sparkle.</p></div>
//         <nav className="flex flex-wrap gap-x-5 gap-y-3">{links.map(([label, href]) => <a key={label} href={href} className="text-xs text-ink/60 transition hover:text-cherry">{label}</a>)}</nav>
//         <div className="flex items-center gap-2">{socials.map(({ label, href, Icon }) => <a key={label} href={href} aria-label={label} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noopener noreferrer"} className="grid h-9 w-9 place-items-center rounded-full border border-rose-200 text-ink/60 transition hover:border-cherry hover:bg-blush hover:text-cherry"><Icon size={15} /></a>)}</div>
//       </div>
//       <p className="mx-auto mt-7 max-w-7xl border-t border-rose-200/70 pt-5 text-center text-[11px] text-ink/45">© {new Date().getFullYear()} Build With Miaad · Built with curiosity and a full heart <Heart size={11} className="inline text-cherry" fill="currentColor" /></p>
//     </footer>
//   );
// }


import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Heart, Mail } from "lucide-react";
import { site } from "../data/Site";

const socials = [
  { label: "GitHub", href: site.github, Icon: FaGithub },
  { label: "LinkedIn", href: site.linkedin, Icon: FaLinkedinIn },
  { label: "Instagram", href: site.instagram, Icon: FaInstagram },
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail }
];
const links = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Kind words", "#reviews"], ["Contact", "#contact"]];

export default function Footer() {
  return (
    <footer className="border-t border-rose-200/70 bg-cream px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div><a href="#home" className="text-lg font-bold">Build With <span className="text-cherry">Miaad</span> <span className="hand ml-1 text-xl font-medium text-cherry">୨୧</span></a><p className="mt-1 text-xs text-ink/50">Thoughtful code, with a little sparkle.</p></div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3">{links.map(([label, href]) => <a key={label} href={href} className="text-xs text-ink/60 transition hover:text-cherry">{label}</a>)}</nav>
        <div className="flex items-center gap-2">{socials.map(({ label, href, Icon }) => <a key={label} href={href} aria-label={label} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noopener noreferrer"} className="grid h-9 w-9 place-items-center rounded-full border border-rose-200 text-ink/60 transition hover:border-cherry hover:bg-blush hover:text-cherry"><Icon size={15} /></a>)}</div>
      </div>
      <p className="mx-auto mt-7 max-w-7xl border-t border-rose-200/70 pt-5 text-center text-[11px] text-ink/45">© {new Date().getFullYear()} Build With Miaad · Built with curiosity and a full heart <Heart size={11} className="inline text-cherry" fill="currentColor" /></p>
    </footer>
  );
}