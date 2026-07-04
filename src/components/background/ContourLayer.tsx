export function ContourLayer() {
  return (
    <svg className="contour-field absolute inset-0 h-full w-full opacity-40" viewBox="0 0 1400 900" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      {[0, 1, 2, 3, 4].map((n) => (
        <path className="contour-flow" style={{ animationDelay: `${n * -.9}s` }} key={n} d={`M-80 ${650 - n * 44} C180 ${430 - n * 35} 320 ${760 - n * 38} 590 ${520 - n * 32} S1010 ${340 - n * 25} 1480 ${510 - n * 30}`} stroke="#7B9278" strokeWidth="1" opacity={0.18 + n * 0.07} />
      ))}
      <path className="contour-flow contour-flow-slow" d="M880 0C760 180 1130 180 980 360S650 650 820 920" stroke="#B86B4B" opacity=".2" />
    </svg>
  );
}
