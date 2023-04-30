let c = [],
    d = true;
function onOffArr(contentsData, resultData, a) {
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
    if (resultData.id === `ID${j + 1}` && a.length < 5) {
      c[j] = !c[j];
    }
  }
//   onOff 배열 리턴
console.log(c)
  return c;
}
export default onOffArr;
