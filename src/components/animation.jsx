import { defaults } from "autoprefixer";
import { gsap } from "gsap";

export const introLoader = (rloader, wloader) => {
  const tl = gsap.timeline();

  // Animation for loader2 with a delay
  tl.from(rloader.current, {
    yPercent: 100,
    duration: 3,
    ease: "expo.inOut",
    delay: 1,
  }).from(
    wloader.current,
    {
      yPercent: 109,
      duration: 3,
      ease: "expo.inOut",
      delay: 1.2,
    },
    ""
  );

  return tl;
};

export const collapseWords = (rloader, wloader, textref) => {
  const tl = gsap.timeline();

  tl.to(
    textref.current,
    {
      opacity: 0,
      duration: 1,
      ease: "Power3.easeIn",
    },
    ""
  )
    .to(wloader.current, {
      opacity: 0,
      duration: 1,
      ease: "expo.inOut",
    })
    .to(
      rloader.current,
      {
        opacity: 0,
        duration: 1,
        ease: "Power3.easeIn",
      },
      ""
    );

  return tl;
};

export const headerArrival = (headerref) => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.inOut",
    },
  });

  tl.to(headerref.current,{
    xPercent:-30,
    duration:3
  })
};
