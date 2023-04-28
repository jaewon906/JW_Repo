import React, { useState } from "react";
import { useSpring, a } from '@react-spring/web'
import styles from './styles.module.css'

/*useState hook을 사용하여 flipped 상태 변수를 만들고 초기값을 false로 설정합니다.
useSpring hook을 사용하여 opacity와 transform 속성을 만든다.
opacity 속성은 flipped 값이 true면 1, Or 0
transform 속성은 flipped 값이 true면 180` rotate, Or 0`
이렇게 만든 opacity와 transform 속성을 사용해서 카드를 뒤집는 효과를 구현한다.
style.module.css 파일에서 정의한 container, c, front, back 클래스를 활용해서 앞면과
뒷면을 나타내는 div 요소를 만든다 onClick 이벤트 핸들러를 등록해서 클릭할 때 마다 flipped
상태 변수를 반전시킨다. <a.div> 컴포넌트는 @react-spring/web 에서 제공하는 애니메이션 div 요소다
애니메이션을 적용하려면 이 컴포넌트를 사용해야한다.
style 속성을 사용하여 애니메이션 효과를 지정한다
opacity와 transform 속성은 to() 메소드를 사용하여 값을 계산한다.
rotateX 속성은 직접 값을 지정한다.*/
function App() {
  const [flipped, setFlipped] = useState(false)
  const { transform, opaticy } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  /* useState 훅을 설정해서 flipped 상태 변수를 만들고 초기값을 false로 설정.
  useSpring을 사용하여 CSS 속성 애니메이션을 만드는 객체를 만듬.
  opacity 속성은 flipped 값이 true면 1, Or 0. 
  transform 속성은 CSS transform 속성을 사용하여 3D 변형을 할 수 있다.
  config 속성은 애니메이션을 구성하는 객체, mass는 물리적인 질량을 나타냄. 값이
  클 수록 애니메이션이 무거워지고 느려진다.
  tension은 스크링의 강성을 나타내며, 값이 클수록 스프링이 긴장되어 빠르게 움직인다.
  friction은 스프링의 마찰력을 나타내며, 값이 클수록 스프링이 둔감하게 움직이낟.
  이 값들은 애니메이션의 움직임을 조절하는데 사용된다.*/
  return (
    <div className={styles.container} onClick={() => setFlipped(state => !state)}>
      <a.div className={`${styles.c} ${styles.back}`} 
      style={{ opaticy: opaticy.to(o => 1 - o), transform }} />
      <a.div className={`${styles.c} ${styles.front}`} 
      style={{ opaticy, transform, rotateX: '180deg' }} />
    </div>
  )
}
/* 뒤집히는 카드를 나타내는 두개의 div 요소를 만든다 
onClick 이벤트 핸들러를 등록해서 클릴할 때 마다 set 함수를 호출해서flipped 상태 변수를 반전
두개의 자식 div 요소는 앞면과 뒷면을 나타냄.
a.div 컴포넌트를 사용해 애니메이션을 적용
className 속성에는 styles.c 와 styles.back or styles.front 클래스를 조합.
뒷면 요소에는 opacity 속성에 to() 메소드를 사용해서 값이 변화하는 애니메이션을 적용
1-o는 opacity값이 0이 되면 불토명도가 1이 되도록 하는 식
transform 속성은 useSpring hook 에서 계산된 값을 사용
앞면 요소에는 opacity, transform, rotateX 속성을 지정
opacity와 transform 속성은 useSpring hook 에서 계산된 값을 사용
rotateX 속성은 직접 값을 지정해서 180도 회전.*/
export default App;