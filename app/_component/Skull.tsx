// "use client"
// import React, { useEffect, useState } from "react";

// export default function CustomCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const moveCursor = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", moveCursor);
//     return () => window.removeEventListener("mousemove", moveCursor);
//   }, []);

//   return (
//     <img
//       src="/Nest.js.ico"
//       alt="cursor"
//       className="custom-cursor"
//       style={{
//         left: `${position.x - 10}px`,
//         top: `${position.y - 8}px`,
//       }}
//     />
//   );
// }