let c = [],
    d = true,
    g = 0;
    // f = [];

function contentsSelect(contentsData, resultData, a, e) {
  
  // 각각 컨텐츠에 해당하는 스위치 배열을 만들었다 이를 통해서 컨텐츠를 골랐을 때
  // (true) 해제할 때 (false) 를 통해 장바구니 활성화 예정
  if (d === true) {
    for (var i = 0; i < contentsData.length; i++) {
      c[i] = false;
    }
    d = false;
  }
  // 해당하는 컨텐츠를 누를 때 true <-> false 변경
  for (var j = 0; j < contentsData.length; j++) {
    if (resultData.id === `ID${j + 1}`) {
      c[j] = !c[j];
      switch (c[j]) {
  // 해당하는 컨텐츠를 눌렀을 때 세션 스토리지에 보낼 데이터 
        case true:       
          if (a.length < 5) {
            a.push(resultData);
            console.log("aaaaaaaaaaaaaaaaa",a)
          }
          else{
            
          }
          break;

        case false:
          g = a.filter((x) => x.id === e.target.id);
          console.log("filter : ",g)
           a = g;
           // 클릭했을 때 해당하는 id의 price를 빼줌
          //  f = a.find(x=>x.id===e.target.id)
          //  a -= f.price
           break;
           
        default:
      }
    }
  }
 
  return c;
}

export default contentsSelect;
