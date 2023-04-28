let a = [];
function sessionStorageFn() {

    const contentsData = useSelector(state => state.dataSet.contentsData),
        ID = useSelector(state => state.dataSet.id),
        resultData = contentsData.find(x => x.id === ID);
        let totalPrice = 0;

    // 빈 배열인 a에 resultData를 마지막번째 배열로 추가
    a.push(resultData)
    a.forEach(element=>{
        totalPrice+=element.price;
    })

    /////                            세션 스토리지                         ///////////////

    // 추가한 배열을 JSON으로 변환. 세션은 JSON (문자열) 만 저장 가능
    const aConvertJson = JSON.stringify(a)
    // 세션 스토리지 호출
    const sessionStorage = window.sessionStorage
    // JSON으로 변환한 데이터를 "key" 값으로 저장
    sessionStorage.setItem("key", aConvertJson)
    // key 값이 "key" 인 데이터를 불러옴
    const getKey = sessionStorage.getItem("key")
    // 불러온 JSON 파일을 JS로 변환 
    const getKeyConvertJS = JSON.parse(getKey)
    console.log(getKeyConvertJS)
    // 여기 까지
}