export function FogTransition({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`fog-transition ${dark ? "fog-transition--dark" : ""}`} aria-hidden="true">
      <span className="fog-transition__volume fog-transition__volume--one" />
      <span className="fog-transition__volume fog-transition__volume--two" />
      <span className="fog-transition__volume fog-transition__volume--three" />
    </div>
  );
}
