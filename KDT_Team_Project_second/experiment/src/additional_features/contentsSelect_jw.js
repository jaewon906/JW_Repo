function contentsSelect(contentsData, resultData, a, c, e) {

  for (var j = 0; j < contentsData.length; j++) {
    if (resultData.id === `ID${j + 1}` && a.length < 5 ) {
    switch (c[j]) {
      // 해당하는 컨텐츠를 눌렀을 때 세션 스토리지에 보낼 데이터
      case true:
          a.push(resultData);
       
        break;

      case false:
        a = a.filter((x) => x.id !== e.target.id);
        console.log("filter : ", a);
        // 클릭했을 때 해당하는 id의 price를 빼줌
        //  f = a.find(x=>x.id===e.target.id)
        //  a -= f.price
        break;
      
      default:
      }
    }
  }
  // SessionStoraged에 보낼 데이터 리턴
  return a;
}

export default contentsSelect;
