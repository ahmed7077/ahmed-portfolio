export function SectionHeading({ index, title, note }: { index: string; title: string; note?: string }) {
  return (
    <header className="mb-12 md:mb-20">
      <p className="eyebrow mb-6">{index} / Field record</p>
      <div className="grid gap-5 md:grid-cols-[1fr_280px] md:items-end">
        <h2 className="section-title">{title}</h2>
        {note && <p className="text-sm leading-6 text-[#1e3a34]/65 md:text-right">{note}</p>}
      </div>
    </header>
  );
}
