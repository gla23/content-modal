export function Moon() {
  const size = 25;
  const holeSize = 23;
  const center = holeSize / 2 + 4;
  const mask = `radial-gradient(circle at ${center}px ${center}px, rgba(0, 0, 0, 0) ${
    holeSize / 2
  }px, rgba(0, 0, 0, 1) ${holeSize / 2}px)`;

  return (
    <>
      {/* <Star />
      <Star />
      <Star />
      <Star /> */}
      <div
        className="relative w-10 h-10 scale-125"
        style={{ mask, WebkitMaskImage: mask }}
      >
        <div
          style={{ width: size, height: size }}
          className="bg-neutral-300 rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        />
      </div>
    </>
  );
}

// function Star() {
//   const [o, setO] = useState(0);
//   const [star] = useState([
//     Math.random() * 40,
//     Math.random() * 40,
//     Math.random() * 4 + 3,
//   ]);
//   const spring = useSpring({ from: { o: 0 }, to: { o } });
//   useEffect(() => {
//     setTimeout(() => {
//       setTimeout(() => setO(0), Math.random() * 3000);
//       return setO(0.5 + Math.random());
//     }, 200 + Math.random() * 1000);
//   }, []);

//   return (
//     <animated.div
//       style={{
//         opacity: spring.o,
//         position: "absolute",
//         width: star[2],
//         height: star[2],
//         top: star[0],
//         left: star[1],
//         backgroundImage: "radial-gradient(lightgray 0%, transparent 60%)",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           boxShadow: "grey 0px 0px 2px 1px",
//           backgroundColor: "lightgray",
//           width: star[2],
//           height: 1,
//           top: "50%",
//           transform: "translateY(-1px)",
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           boxShadow: "grey 0px 0px 2px 1px",
//           backgroundColor: "lightgray",
//           width: 1,
//           height: star[2],
//           left: "50%",
//           transform: "translateX(-1px)",
//         }}
//       />
//     </animated.div>
//   );
// }
