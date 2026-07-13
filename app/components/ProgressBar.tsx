// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";

// export default function ProgressBar() {
//   const pathname = usePathname();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);

//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [pathname]);

//   return (
//     <div
//       className={`fixed left-0 top-0 z-[9999] h-1 transition-all duration-500 ${
//         loading ? "w-full opacity-100" : "w-0 opacity-0"
//       }`}
//       style={{
//         background:
//           "linear-gradient(90deg,#151716 0%,#9F690F 35%,#FFEB5F 70%,#C9971A 100%)",
//         boxShadow: "0 0 14px rgba(212,175,55,.6)",
//       }}
//     />
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ProgressBar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(15);

    const t1 = setTimeout(() => setProgress(45), 120);
    const t2 = setTimeout(() => setProgress(75), 250);
    const t3 = setTimeout(() => setProgress(100), 450);
    const t4 = setTimeout(() => setProgress(0), 700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [pathname]);

  return (
    <div className="fixed left-0 top-0 z-[9999] h-1 w-full bg-transparent">
      <div
        className="h-full transition-all duration-300 ease-out"
        style={{
          width: `${progress}%`,
          background:
            "linear-gradient(90deg,#151716 0%,#9F690F 30%,#FFEB5F 65%,#C9971A 100%)",
          boxShadow: "0 0 8px rgba(212,175,55,.5),0 0 20px rgba(255,235,95,.4)",
        }}
      />
    </div>
  );
}
