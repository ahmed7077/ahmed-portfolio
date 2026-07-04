export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`section-shell ${className}`}>{children}</div>;
}
