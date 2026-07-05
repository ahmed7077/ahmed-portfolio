"use client";

import { useEffect, useRef, useState } from "react";

const items = [["arrival", "Arrival"], ["identity", "Identity"], ["systems", "Systems"], ["notes", "Field notes"], ["growth", "Growth"], ["work", "Work"], ["network", "Network"], ["experience", "Experience"], ["contact", "Contact"]];

export function ExpeditionNav() {
  const [active, setActive] = useState("arrival");
  const [sequence, setSequence] = useState(0);
  const activeRef = useRef("arrival");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting || entry.target.id === activeRef.current) return;
      activeRef.current = entry.target.id;
      setActive(entry.target.id);
      setSequence((current) => current + 1);
    }), { rootMargin: "-45% 0px -45%" });
    items.forEach(([id]) => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);
  return (
      <nav aria-label="Expedition sections" className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
        <ol className="flex flex-col items-end gap-4">
          {items.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={active === id ? "location" : undefined} className="group flex items-center gap-3">
                <span key={active === id ? sequence : id} className={`nav-chapter-label translate-x-2 rounded-full bg-[#161815] px-3 py-1.5 text-[10px] uppercase tracking-widest text-[#f5f1e8] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100 group-focus:translate-x-0 group-focus:opacity-100 ${active === id ? "nav-chapter-label--entered" : ""}`}>{label}</span>
                <span className={`block rounded-full border border-[#1e3a34]/30 transition-all ${active === id ? "h-3 w-3 bg-[#b86b4b]" : "h-2 w-2 bg-[#f5f1e8]"}`} />
              </a>
            </li>
          ))}
        </ol>
      </nav>
  );
}
