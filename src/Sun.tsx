import React from "react";
import { animated, useSpring } from "react-spring";

export function Sun() {
  const spring = useSpring({
    from: { r: 0 },
    to: { r: 1 },
  });

  const rayCount = 8;
  const radius = 15;
  const startRadius = 7;
  const rays: JSX.Element[] = [];
  for (let i = 0; i < rayCount; i++) {
    rays.push(
      <animated.div
        key={i}
        className="cm-w-1.5 cm-h-0.5 cm-bg-neutral-400 cm-rounded cm-absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: spring.r.to((r) => {
            const ignore = i / rayCount;
            const range = (r - ignore) / (1 - ignore);
            const outFraction = Math.max(0, Math.min(1, range));
            const rotation = 180 + (360 / rayCount) * i;
            const currentRadius =
              startRadius + outFraction * (radius - startRadius);
            return `translate(-50%, -50%) rotate(${rotation}deg) translate(${currentRadius}px) `;
          }),
        }}
      />
    );
  }

  const size = 18;
  return (
    <div className="cm-relative cm-w-10 cm-h-10 cm-scale-125">
      <div
        style={{ width: size, height: size }}
        className="cm-bg-neutral-400 cm-rounded-full cm-absolute cm-top-1/2 cm-left-1/2 cm--translate-y-1/2 cm--translate-x-1/2"
      />
      {rays}
    </div>
  );
}
