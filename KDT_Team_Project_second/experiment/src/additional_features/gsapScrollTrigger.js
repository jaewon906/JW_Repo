import gsap from "gsap";
import { Timeline } from "gsap/gsap-core";
import ScrollTrigger from "gsap/ScrollTrigger";

function gaspScrollTrigger(idx1, idx2, idx3, idx4, idx5, idx6) {
  gsap.registerPlugin(ScrollTrigger);
  // 첫 번째 메인화면 애니메이션
  for (var i = 0; i < 3; i++) {
    gsap.from(idx2.current[i], {
      scrollTrigger: {
        trigger: idx2.current[i],
      },
      duration: 1,
      delay: 0.5 * i,
      opacity: 0,
    });
    gsap.to(idx2.current[i], {
      scrollTrigger: {
        trigger: idx2.current[i],
        duration: 1,
        delay: 1,
      },
      y: -50,
      duration: 1,
      delay: 0.5 * i,
      opacity: 1,
    });
  }
  for (var i = 0; i < 12; i += 2) {
    gsap.from(idx1.current[i], {
      scrollTrigger: {
        trigger: idx1.current[i],
      },
      opacity: 0,
      delay: 0.058 * i,
    });
    gsap.to(idx1.current[i], {
      scrollTrigger: {
        trigger: idx1.current[i],
      },
      y: -50,
      opacity: 1,
      duration: 1,
      delay: 0.058 * i,
    });
  }
  for (var i = 1; i < 12; i += 2) {
    gsap.from(idx1.current[i], {
      scrollTrigger: {
        trigger: idx1.current[i],
      },
      opacity: 0,
      delay: 0.058 * i,
    });
    gsap.to(idx1.current[i], {
      scrollTrigger: {
        trigger: idx1.current[i],
      },
      transform: "rotateY(180deg)",
      y: -50,
      opacity: 1,
      duration: 1,
      delay: 0.058 * i,
    });
  }
  for (var i = 12; i < 26; i += 2) {
    gsap.from(idx1.current[i], {
      scrollTrigger: {
        trigger: idx1.current[i],
      },
      opacity: 0,
      duration: 1,
      delay: 0.058 * i,
    });

    gsap.to(idx1.current[i], {
      scrollTrigger: {
        trigger: idx1.current[i],
      },
      transform: "rotateY(180deg)",
      y: -50,
      opacity: 1,
      duration: 1,
      delay: 0.058 * i,
    });
  }
  for (var i = 13; i < 26; i += 2) {
    gsap.from(idx1.current[i], {
      scrollTrigger: {
        trigger: idx1.current[i],
      },
      opacity: 0,
      duration: 1,
      delay: 0.058 * i,
    });

    gsap.to(idx1.current[i], {
      scrollTrigger: {
        trigger: idx1.current[i],
      },
      y: -50,
      opacity: 1,
      duration: 1,
      delay: 0.058 * i,
    });
  }
  for (var i = 26; i < 39; i += 2) {
    gsap.from(idx1.current[i], {
      scrollTrigger: {
        trigger: idx1.current[i],
      },
      opacity: 0,
      duration: 1,
      delay: 0.058 * i,
    });

    gsap.to(idx1.current[i], {
      scrollTrigger: {
        trigger: idx1.current[i],
      },
      transform: "rotateY(180deg)",
      y: -50,
      opacity: 1,
      duration: 1,
      delay: 0.058 * i,
    });
  }
  for (var i = 27; i < 39; i += 2) {
    gsap.from(idx1.current[i], {
      scrollTrigger: {
        trigger: idx1.current[i],
      },
      opacity: 0,
      duration: 1,
      delay: 0.058 * i,
    });

    gsap.to(idx1.current[i], {
      scrollTrigger: {
        trigger: idx1.current[i],
      },
      y: -50,
      opacity: 1,
      duration: 1,
      delay: 0.058 * i,
    });
  }
  // 각 페이지 글자 에니메이션
  for (var i = 0; i < idx4.current.length; i++) {
    gsap.from(idx4.current[i], {
      scrollTrigger: {
        trigger: idx4.current[i],
        markers: true,
        start: "top 550px",
      },
      opacity: 0,
    });
    gsap.to(idx4.current[i], {
      scrollTrigger: {
        trigger: idx4.current[i],
        start: "top 550px",
      },
      opacity: 1,
    });
  }
  for (var i = 0; i < idx3.current.length; i++) {
    gsap.from(idx3.current[i], {
      scrollTrigger: {
        trigger: idx3.current[i],
        start: "top 550px",
        end: "bottom 550px",
      },
      y: 0,
      opacity: 0,
    });
    gsap.to(idx3.current[i], {
      scrollTrigger: {
        trigger: idx3.current[i],
        start: "top 550px",
        end: "top 550px",
      },
      y: -50,
    });
  }
  // 세 번째 페이지 그림 에니메이션
  for (var i = 0; i < idx5.current.length; i++) {
    gsap.from(idx5.current[i], {
      scrollTrigger: {
        trigger: idx5.current[i],
        markers: true,
      },
      scale:0
    });
  }
  const tl1 = gsap.timeline();
  tl1
    .to(idx5.current[1], {
      scrollTrigger: {
        trigger: idx5.current[i],
        start: "top 550px",
      },
      scale:1,
      duration: 0.5,
    })
    .to(idx5.current[2], {
      scrollTrigger: {
        trigger: idx5.current[i],
        start: "top 550px",
      },
      opacity: 1,
      duration: 0.5,
    })
    .to(idx5.current[3], {
      scrollTrigger: {
        trigger: idx5.current[i],
        start: "top 550px",
      },
      opacity: 1,
      duration: 0.5,
    })
    .to(idx5.current[4], {
      scrollTrigger: {
        trigger: idx5.current[i],
        start: "top 550px",
      },
      opacity: 1,
      duration: 0.5,
    })
    .to(idx5.current[5], {
      scrollTrigger: {
        trigger: idx5.current[i],
        start: "top 550px",
      },
      opacity: 1,
      duration: 0.5,
    });
}

export default gaspScrollTrigger;
