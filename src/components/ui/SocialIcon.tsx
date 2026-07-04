type SocialIconProps = {
  kind: "github" | "linkedin" | "email";
  className?: string;
};

export function SocialIcon({ kind, className = "h-4 w-4" }: SocialIconProps) {
  if (kind === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M12 .7A11.3 11.3 0 0 0 8.4 22.8c.56.1.77-.24.77-.54v-2.2c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.4-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.58 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.99 0 0 .95-.3 3.1 1.16A10.8 10.8 0 0 1 12 6.17c.96 0 1.92.13 2.82.38 2.15-1.46 3.1-1.16 3.1-1.16.61 1.56.23 2.71.11 3 .72.78 1.16 1.79 1.16 3.02 0 4.34-2.64 5.29-5.15 5.57.4.35.77 1.04.77 2.1v3.18c0 .3.2.65.78.54A11.3 11.3 0 0 0 12 .7Z" />
      </svg>
    );
  }
  if (kind === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M5.36 7.45a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2ZM3.55 20.75h3.63V9.1H3.55v11.65ZM9.4 9.1h3.48v1.6h.05c.48-.92 1.67-1.9 3.44-1.9 3.68 0 4.36 2.42 4.36 5.57v6.38H17.1V15.1c0-1.35-.02-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98v5.75H9.4V9.1Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}
