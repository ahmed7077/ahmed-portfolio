"use client";

export function TopographicDistortion() {
  return (
    <svg className="topographic-distortion" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none">
        {Array.from({ length: 8 }).map((_, index) => (
          <path className="topographic-flow-line" style={{ animationDelay: `${index * -.85}s` }} key={index} d={`M-120 ${130 + index * 92} C180 ${40 + index * 78}, 390 ${260 + index * 54}, 690 ${120 + index * 90} S1130 ${250 + index * 42}, 1560 ${80 + index * 92}`} />
        ))}
      </g>
    </svg>
  );
}
