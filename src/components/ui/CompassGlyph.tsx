export function CompassGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth=".8" opacity=".5" />
      <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth=".6" strokeDasharray="2 5" />
      <path d="M50 13 58 49 50 87 42 51Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M50 13 50 50 42 51Z" fill="currentColor" />
      <circle cx="50" cy="50" r="3" fill="#B86B4B" />
    </svg>
  );
}
