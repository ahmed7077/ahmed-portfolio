import { ArrowUpRight } from "lucide-react";

export function Button({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <a href={href} className={`lap-border group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border px-6 text-sm font-semibold transition duration-300 hover:-translate-y-1 ${dark ? "border-[#f5f1e8]/20 bg-[#f5f1e8] text-[#161815]" : "border-[#1e3a34]/25 bg-[#f5f1e8]/70 text-[#1e3a34] hover:bg-[#1e3a34] hover:text-[#f5f1e8]"}`}>
      {children}<ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
