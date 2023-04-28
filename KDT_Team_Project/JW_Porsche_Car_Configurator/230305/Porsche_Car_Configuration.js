var arr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let sum=0;
//목록 누를때 옵션칸이 내려왔다 올라왔다 하는 기능
function list_box_active(ID){
// attr 속성으로 value값을 불러오면 기본적으로 문자형이기 때문에
// number함수로 숫자로 바꿔준다.
    var count = Number($(`#${ID}`).attr("value"));
    count+=1;

    if(count % 2 ==1){ 
        $(`#${ID}_box`).slideDown(300)
        $(`#${ID} i`).css({transform:"rotate(180deg)"})}
       else{
        $(`#${ID}_box`).slideUp(0)
        $(`#${ID} i`).css({transform:"rotate(360deg)"})}
    $(`#${ID}`).attr("value",count)
}

// 기본 요금
function base_price(){
    let base_val=document.getElementById("base_val");
    base_val.innerText=170000000;
}
// 추가 요금
// 옵션을 누를 때 마다 옵션에 해당하는 클래스와 id를 불러와 각 id에 해당하는 value값을 
//price에 저장하고 switch case문을 써서 해당하는 클래스의 id의 value 값을 각 배열에 저장
//예를 들어 arr[0]은 '클래스1'에 해당하는 value값, arr[1]은 '클래스2'에 해당하는 value값 
//버튼을 누를 때 마다 고유 id의 value값을 불러온다. 기존의 값은 사라지고 새로운 value의 값을 가져온다.
//총 합은 배열의 합을 구한다
function equipTotal_price(classname,id){

    const price = $(`#${id}`).val()
    let equip_val=document.getElementById("equip_val");
    for(i=0;i<arr.length;i++){

      switch(classname){
        case`group${i+1}`:
        arr[i]=Number(price)
      }
    }
    sum=arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7]+arr[8]+arr[9]+arr[10]+arr[11];
    
    let total_val=document.getElementById("total_val");
    // price for equip 표시
    equip_val.innerText=sum;
    // total price 표시
    total_val.innerText=Number(base_val.innerText) + sum;

}
// 전체 요금
$(document).ready(function(){
base_price();


})
// *=은 패턴 매칭 속성을 지닌 속성 선택자
// $=은 텍스트 끝 매칭 속성을 지닌 속성 선택자
// ^=은 텍스트 시작 매칭 속성을 지닌 속성 선택자
