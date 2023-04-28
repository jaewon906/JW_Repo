function list_box_active(ID){
// attr 속성으로 value값을 불러오면 기본적으로 문자형이기 때문에
// number함수로 숫자로 바꿔준다.
    var count = Number($(`#${ID}`).attr("value"));
    count+=1;

    // if(count % 2 ==1){ 
    //     $(`#${ID}_box`).show().animate({height:500},300)}
    //    else{
    //       $(`#${ID}_box`).css({
    //           display:'none'
    //     })
    //   } 
    if(count % 2 ==1){ 
        $(`#${ID}_box`).show().animate({height:500},300)}
       else{
        $(`#${ID}_box`).animate({height:0},300).hide()} 
    $(`#${ID}`).attr("value",count)
}
// *=은 패턴 매칭 속성을 지닌 속성 선택자
// $=은 텍스트 끝 매칭 속성을 지닌 속성 선택자
// ^=은 텍스트 시작 매칭 속성을 지닌 속성 선택자
