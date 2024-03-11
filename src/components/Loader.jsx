import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { introLoader, collapseWords } from "./animation";

function Loader({ timeline }) {
  const redloaderef = useRef(null);
  const wloaderef = useRef(null);
  const textref = useRef(null);

  useEffect(() => {
    timeline &&
      timeline.add(introLoader(redloaderef,wloaderef)).add(collapseWords(redloaderef,wloaderef,textref));
  }, [timeline]);

  return (
    <div
      className="h-[100vh] w-full"
    >
      <div className="h-[100vh] w-full bg-[#E04C4C] absolute top-0" ref={redloaderef}></div>
      <div className="h-[100vh] w-full bg-[#EEDEDE]  absolute top-0 z-10" ref={wloaderef}></div>
      <p className="h-[100vh] flex justify-center items-center text-center text-[#E04C4C] animate-pulse" ref={textref}>
        *Cold
      </p>
    </div>
  );
}

export default Loader;
