import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function gaspScrollTrigger(idx1, idx2, idx3){
  gsap.registerPlugin(ScrollTrigger)
  // 첫 번째 메인화면 애니메이션
 
  for(var i=0; i<12; i+=2){

    gsap.from(idx1.current[i],{
      scrollTrigger:{
        trigger : idx1.current[i],

      },
      opacity :0,
      delay:0.075*i
    })
    gsap.to(idx1.current[i],{
      scrollTrigger:{
        trigger : idx1.current[i],

      },
      y:-50,
      opacity :1,
      duration : 1,
      delay:0.075*i
    })
  }
  for(var i=1; i<12; i+=2){

    gsap.from(idx1.current[i],{
      scrollTrigger:{
        trigger : idx1.current[i],

      },
      opacity :0,
      delay:0.075*i
    })
    gsap.to(idx1.current[i],{
      scrollTrigger:{
        trigger : idx1.current[i],

      },
      transform:'rotateY(180deg)',
      y:-50,
      opacity :1,
      duration : 1,
      delay:0.075*i
    })
  }
  for(var i=12; i<26; i+=2){

    gsap.from(idx1.current[i],{
      scrollTrigger:{
        trigger : idx1.current[i],

      },
      opacity :0,
      duration:1, 
      delay:0.075*i
    })

    gsap.to(idx1.current[i],{
      scrollTrigger:{
        trigger : idx1.current[i],

      },
      transform:'rotateY(180deg)',
      y:-50,
      opacity :1,
      duration : 1,
      delay:0.075*i
    })
  }
  for(var i=13; i<26; i+=2){

    gsap.from(idx1.current[i],{
      scrollTrigger:{
        trigger : idx1.current[i],

      },
      opacity :0,
      duration:1, 
      delay:0.075*i
    })

    gsap.to(idx1.current[i],{
      scrollTrigger:{
        trigger : idx1.current[i],

      },
      y:-50,
      opacity :1,
      duration : 1,
      delay:0.075*i
    })
  }
  for(var i=26; i<39; i+=2){

    gsap.from(idx1.current[i],{
      scrollTrigger:{
        trigger : idx1.current[i],

      },
      opacity :0,
      duration:1, 
      delay:0.075*i
    })

    gsap.to(idx1.current[i],{
      scrollTrigger:{
        trigger : idx1.current[i],

      },
      transform:'rotateY(180deg)',
      y:-50,
      opacity :1,
      duration : 1,
      delay:0.075*i
    })
  }
  for(var i=27; i<39; i+=2){

    gsap.from(idx1.current[i],{
      scrollTrigger:{
        trigger : idx1.current[i],

      },
      opacity :0,
      duration:1, 
      delay:0.075*i
    })

    gsap.to(idx1.current[i],{
      scrollTrigger:{
        trigger : idx1.current[i],

      },
      y:-50,
      opacity :1,
      duration : 1,
      delay:0.075*i
    })
  }

  const tl_1 = gsap.timeline();
  // tl_1.scrollTrigger.refresh();
  tl_1.to(idx2.current[0],{
    scrollTrigger:{
      trigger:idx2.current[0],
      start:'top center',
      end:'top center',
      duration:1,
    },
    x:50,
  }).to(idx2.current[1],{
    scrollTrigger:{
      trigger:idx2.current[1],
      start:'top center',
      end:'top center',
    },
    x:50,
    duration:1,
  })

  gsap.to(idx3.current[3],{
    scrollTrigger:{
      start:"top 2000px",
    
    },
    y:-50,
    duration:0.5,

  })
}

export default gaspScrollTrigger
