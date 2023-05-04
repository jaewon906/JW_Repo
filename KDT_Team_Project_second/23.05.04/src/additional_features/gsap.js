import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
export default function Gsap() {
  gsap.registerPlugin(ScrollTrigger);
  const boxRef = useRef();
  useEffect(() => {
    const box = boxRef.current;

    gsap.to(".box1", { duration: 3, x: 200, opacity: 0.2, ease: 'steps(10)', delay: 2,});

    gsap.to(".box2", { duration: 3, x: 200, rotate: 720, scale: 1.3,});
    
    gsap.to(".box3", { duration: 3, x: 200, ease: 'elastic', backgroundColor: 'red', width: 300, fontSize: 60});
  }, []);
  return (
    <>
      <div style={{backgroundColor:'blue', margin: '20px', width: '100px', height: '100px'}}class="box box1"></div>
<div style={{backgroundColor:'tomato', margin: '20px', width: '100px', height: '100px'}}class="box box2"></div>
<div style={{margin: '20px', width: '100px', height: '100px'}}class="box box3">box</div>
    </>
  );
}
