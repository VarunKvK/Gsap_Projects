import { defaults } from "autoprefixer";
import { gsap } from "gsap";
export const headerArrival = (headeref) => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.inOut",
    },
  });

  tl.to(headeref.current, {
    top: 0,
    opacity: 100,
    duration: 2,
    delay: 3,
  });
  return tl;
};

export const navArrival = (navref) => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.inOut",
    },
  });

  tl.to(navref.current, {
    top: 0,
    opacity: 100,
    duration: 2,
    delay: 3,
  });
  return tl;
};

export const subheaderArrival = (subheader1ref, subheader2ref, imageref) => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.inOut",
    },
  });

  tl.to(subheader1ref.current, {
    // top: 0,
    opacity: 100,
    duration: 2,
    delay: 4,
  }).to(subheader2ref.current, {
    //   top: 0,
      opacity: 100,
      duration: 2,
      delay: 0.5,
    },"<").to(imageref.current, {
      top: 0,
      opacity: 100,
      duration: 2,
    },"-=3");
  return tl;
};

// export const imageArrival=(imageref)=>{
//     const tl=gsap.timeline({
//         defaults:{
//             ease: "expo.inOut",
//         }
//     })
//     tl.to(imageref.current,{
//         top:0,
//         opacity:100,
//         duration:2,
//     })
//     return tl;
// };
