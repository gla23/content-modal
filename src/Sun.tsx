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
        className="w-1.5 h-0.5 bg-neutral-400 rounded absolute"
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
    <div className="relative w-10 h-10 scale-125">
      <div
        style={{ width: size, height: size }}
        className="bg-neutral-400 rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
      />
      {rays}
    </div>
  );
}
