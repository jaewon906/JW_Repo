
var arr=[];
var equip_value_arr=[]
var title_value_arr=[];
// 각 옵션의 금액이 들어갈 배열 선언
for(var i=0; i<20; i++){
  arr[i]=0;
}
// 각 옵션에서 옵션 선택시 표시되는 금액이 담길 택스트의 id를 배열에 저장
for(var i=0; i<20;i++){
  equip_value_arr[i]=document.getElementById(`equip_value${i+1}`);
}
// 각 옵션에서 옵션 선택시 표시되는 이름이 담길 텍스트의 title이름을 저장
for(var i=0; i<20;i++){
  title_value_arr[i]=document.getElementById(`title_value${i+1}`);
}
// 클릭시 커지는 효과

var switch1="off";
var option_style=0;
var count=[];
for(var i=0;i<20;i++){
  count[i]=0;
}

//메인 함수
function click_function(class_name,id){
 
    equipTotal(class_name, id);
    equip_value_arr_text();
    title_value(class_name, id);
    optionSelectEffect(class_name,id)
    // if(class_name=="group1"){optionStyle_extcolour(id);};
    // if(class_name=="group2"){optionStyle_wheels(id);};
    // if(class_name=="group3"){optionStyle_PaintedWheels(id);};
    // if(class_name=="group4"){optionStyle_wheelAccessories(id);};
    // if(class_name=="group5"){optionStyle_intcolourMaterial(id);};

}


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
 

// 추가 요금
// 옵션을 누를 때 마다 옵션에 해당하는 클래스와 id를 불러와 각 id에 해당하는 value값을 
//price에 저장하고 switch case문을 써서 해당하는 클래스의 id의 value 값을 각 배열에 저장
//예를 들어 arr[0]은 '클래스1'에 해당하는 value값, arr[1]은 '클래스2'에 해당하는 value값 
//버튼을 누를 때 마다 고유 id의 value값을 불러온다. 기존의 값은 사라지고 새로운 value의 값을 가져온다.
//총 합은 배열의 합을 구한다
function equipTotal(class_name, id){
  var price=$(`#${id}`).attr('value')
  
  for(var i=0;i<arr.length-14;i++){

    switch(class_name){case`group${i+1}`:arr[i]=Number(price)}
    switch(class_name){case`group${i+2}`:arr[i+1]=Number(price)}
    switch(class_name){case`group${i+3}`:arr[i+2]=Number(price)}
    switch(class_name){case`group${i+4}`:arr[i+3]=Number(price)}
    switch(class_name){case`group${i+5}`:arr[i+4]=Number(price)}
    switch(class_name){case`group${i+6}`:arr[i+5]=Number(price)}
    switch(class_name){case`group${i+7}`:arr[i+6]=Number(price)}
    switch(class_name){case`group${i+8}`:arr[i+7]=Number(price)}
    switch(class_name){case`group${i+9}`:arr[i+8]=Number(price)}
    switch(class_name){case`group${i+10}`:arr[i+9]=Number(price)}
    switch(class_name){case`group${i+11}`:arr[i+10]=Number(price)}
    switch(class_name){case`group${i+12}`:arr[i+11]=Number(price)}
    switch(class_name){case`group${i+13}`:arr[i+12]=Number(price)}
    switch(class_name){case`group${i+14}`:arr[i+13]=Number(price)}
    switch(class_name){case`group${i+15}`:arr[i+14]=Number(price)}
  }
  console.log(arr);
  sum=arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7]+arr[8]+arr[9]+arr[10]+arr[11]+arr[12]+arr[13]+arr[14];
  
  let total_value=document.getElementById("total_value");
 
  // price for equip 표시
  equip_value.innerText=sum;
  // total price 표시
  total_value.innerText=Number(base_value.innerText) + sum;
}

  
// 기본 요금
function base_price(){
      let base_value=document.getElementById("base_value");
      base_value.innerText=100000000;
  }


 // 각 옵션의 표시될 텍스트 출력
function equip_value_arr_text()
 {
   for(var i=0;i<14;i++){
   equip_value_arr[i].innerText=arr[i] + " ₩"
   }
 }


//  옵션 이름을 표시하는 기능
function title_value(class_name, id){
  var title=$(`#${id}`).attr('title')
  title.split("-")
if(class_name == "group1"){title_value_arr[0].innerText= title.split("-")[0];}
if(class_name == "group2"){title_value_arr[1].innerText= title.split("-")[0];}
if(class_name == "group3"){title_value_arr[2].innerText= title.split("-")[0];}
if(class_name == "group4"){title_value_arr[3].innerText= title.split("-")[0];}
if(class_name == "group5"){title_value_arr[4].innerText= title.split("-")[0];}
if(class_name == "group6"){title_value_arr[5].innerText= title.split("-")[0];}
if(class_name == "group7"){title_value_arr[6].innerText= title.split("-")[0];}
if(class_name == "group8"){title_value_arr[7].innerText= title.split("-")[0];}
if(class_name == "group9"){title_value_arr[8].innerText= title.split("-")[0];}
if(class_name == "group10"){title_value_arr[9].innerText= title.split("-")[0];}
if(class_name == "group11"){title_value_arr[10].innerText= title.split("-")[0];}
if(class_name == "group12"){title_value_arr[11].innerText= title.split("-")[0];}
if(class_name == "group13"){title_value_arr[12].innerText= title.split("-")[0];}
if(class_name == "group14"){title_value_arr[13].innerText= title.split("-")[0];}
if(class_name == "group15"){title_value_arr[14].innerText= title.split("-")[0];}
  
}

function optionSelectEffect(class_name,id){
  
// 클릭시 커지는 효과;
for(var i=0;i<20;i++){

  if(class_name==`group${i+1}`){
    count[i]+=1
    if(count[i]*2 % 2==0){
      $(`.group${i+1}`).css({
        transform:"scale(1)",
        boxShadow: "none"
      })
      $(`#${id}`).css({
        transform:"scale(1.1)",
        boxShadow: "0px 0px 3px 1px rgb(34, 34, 34)"
        
      }) 
      
      console.log("카운트 : "+count);
     }
   } 
  } 
}
/*****************************************************************************/ 
// exterior colours : count & change style
function optionStyle_extcolour(id){
  
    console.log(count);

    if(count[0]*2 % 2==0){
      $(`.group1`).css({
        transform:"scale(1)",
        boxShadow: "none"
      }),count[0]+=1;
    }
      $(`#${id}`).css({
        transform:"scale(1.1)",
        boxShadow: "0px 0px 3px 1px rgb(34, 34, 34)"
        
      })}   
      
// wheels : count & change style
function optionStyle_wheels(id){
  
    console.log(count);

    if(count[1]*2 % 2==0){
      $(`.group2`).css({
        transform:"scale(1)",
      }),count[1]+=1;
    }
      $(`#${id}`).css({
        transform:"scale(1.3)",
        // boxShadow: "0px 0px 3px 1px rgb(34, 34, 34)"
        
      })}   
// painted wheels : count & change style
function optionStyle_paintedWheels(id){
  
    console.log(count);

    if(count[2]*2 % 2==0){
      $(`.group3`).css({
        transform:"scale(1)",
        boxShadow: "none"
      }),count[2]+=1;
    }
      $(`#${id}`).css({
        transform:"scale(1.1)",
        boxShadow: "0px 0px 3px 1px rgb(34, 34, 34)"
        
      })}   


// wheel accesssories : count & change style
function optionStyle_wheelAccessories(id){
  if(count[3]*2 % 2==0){
    $(`.group4`).css({
      transform:"scale(1)",
      boxShadow: "none"
    }),count[3]+=1;
  }
    $(`#${id}`).css({
      transform:"scale(1.1)",
      boxShadow: "0px 0px 3px 1px rgb(34, 34, 34)"
      
    })

}

// interior colors and material : count & change style
function optionStyle_intcolourMaterial(id){
  
    console.log(count);

    if(count[4]*2 % 2==0){
      $(`.group5`).css({
        transform:"scale(1)",
        boxShadow: "none"
      }),count[4]+=1;
    }
      $(`#${id}`).css({
        transform:"scale(1.2)"
      })}   

$(document).ready(function(){
base_price();

})
// *=은 패턴 매칭 속성을 지닌 속성 선택자
// $=은 텍스트 끝 매칭 속성을 지닌 속성 선택자
// ^=은 텍스트 시작 매칭 속성을 지닌 속성 선택자
