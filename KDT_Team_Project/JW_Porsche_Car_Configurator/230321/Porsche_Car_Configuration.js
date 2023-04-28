// 전역변수 설정

var arr = [];
var equip_value_arr = []
var title_value_arr = [];
// 전개 연산자 : arr1=[1,2], arr2=[3,4] arr=[...arr1,...arr2]=[1,2,3,4]
// 각 옵션의 금액이 들어갈 배열 선언
for (var i = 0; i < 20; i++) {
    arr[i] = 0;
}
// 각 옵션에서 옵션 선택시 표시되는 금액이 담길 택스트의 id를 배열에 저장
for (var i = 0; i < 6; i++) {
    equip_value_arr[i] = document.getElementById(`equip_value${i + 1}`);
}
// 각 옵션에서 옵션 선택시 표시되는 이름이 담길 텍스트의 title이름을 저장
for (var i = 0; i < 6; i++) {
    title_value_arr[i] = document.getElementById(`title_value${i + 1}`);
}


//메인 함수
function click_function(self) {

    let id = self.id
    let class_name = document.getElementById(self.id).className
    let name = document.getElementsByName(self.name)

    equipTotal(class_name, id);
    // equip_value_arr_text();
    if (class_name == "option1" || class_name == "option2" || class_name == "option3" || class_name == "option4" || class_name == "option5" || class_name == "option6") {
        title_value(class_name, id);
    }

    optionSelectEffect(class_name, id)

    // CarColorChange(id)

}

//목록 누를때 옵션칸이 내려왔다 올라왔다 하는 기능
var count = [];
for (var i = 0; i < 20; i++) {
    count[i] = 0;
}

function list_box_active(ID) {
    // attr 속성으로 value값을 불러오면 기본적으로 문자형이기 때문에 number함수로 숫자로 바꿔준다.
    var count = Number($(`#${ID}`).attr("value"));
    count += 1;

    if (count % 2 == 1) {
        $(`#${ID}_box`).slideDown(300)
        $(`#${ID} i`).css({ transform: "rotate(180deg)" })
    } else {
        $(`#${ID}_box`).slideUp(0)
        $(`#${ID} i`).css({ transform: "rotate(0deg)" })
    }

    $(`#${ID}`).attr("value", count)
}

// 추가 요금 옵션을 누를 때 마다 옵션에 해당하는 클래스와 id를 불러와 각 id에 해당하는 value값을 price에 저장하고 switch
// case문을 써서 해당하는 클래스의 id의 value 값을 각 배열에 저장 예를 들어 arr[0]은 '클래스1'에 해당하는 value값,
// arr[1]은 '클래스2'에 해하는 value값 버튼을 누를 때 마다 고유 id의 value값을 불러온다. 기존의 값은 사라지고 새로운
// value의 값을 가져온다. 총 합은 배열의 합을 구한다
function equipTotal(class_name, id) {

    var price = $(`#${id}`).attr('value')

    for (i = 0; i < 9; i++)

        switch (class_name) {
            case `option${i}`:
                arr[i] = Number(price);
                break;
        }
    
        console.log(arr)

    sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] +
        arr[8]
    // price for equip 표시
    equip_value.innerText = sum + " ₩";
    // total price 표시, getElementsByClassName으로 불러오면 클래스에 해당하는 요소들을 전부 불러오고 배열로
    // 리턴된다.
    let total_value = document.getElementsByClassName("total_value");
    for (i = 0; i <= 1; i++) {
        total_value[i].innerText = 170000000 + sum + " ₩";
    }

}

// 기본 요금
function base_price() {

    let base_value = document.getElementById("base_value");
    base_value.innerText = 170000000 + " ₩";

}

// 각 옵션의 표시될 텍스트 출력  옵션 이름을 표시하는 기능
function title_value(class_name, id) {

    var title = $(`#${id}`).attr('title')
    let split = title.split("-")

    for (i = 0; i < 5; i++) {

        switch (class_name) {
            case `option${i + 1}`:
                title_value_arr[i].innerText = split[0];
                equip_value_arr[i].innerText = split[1];
                break;
        }
    }
}

function optionSelectEffect(class_name, id) {

    // 클릭시 커지는 효과;
    for (var i = 0; i < 20; i++) {

        if (class_name == `option${i + 1}`) {
            count[i] += 1

            if (count[i] * 2 % 2 == 0) {
                $(`.option${i + 1}`).css({ transform: "scale(1)", boxShadow: "none" })
                $(`#${id}`).css(
                    { transform: "scale(1.1)", boxShadow: "0px 0px 3px 1px rgb(34, 34, 34)" }
                )

                console.log("카운트 : " + count);
            }
        }
    }
}


// 차량 색상 변경
function CarColorChange() {

    document.addEventListener('input', function () {
        
        const canvas = document.getElementById("myCanvas"),
        // 2d context개체 생성
              ctx = canvas.getContext("2d",{willReadFrequently : true}),
              img = new Image(),
        // 일반적으로 너비와 높이를 설정하고 하면 canvas 요소의 크기는
        // 설정이 되나 내부 픽셀 자체는 1920 * 1080 인 상태로 고정이 되기
        // 때문에 getBoundingClientRect().width 나 height로 동적으로 설정할 수 있다.
        // canvas가 레이아웃 된 후 script가 처음 실행될 때 캔버스의 CSS 스타일 사이즈와 동일하게 스크립트 픽셀 사이즈를 정의가능.
              { width, height } = canvas.getBoundingClientRect();
              
        canvas.width = width;
        canvas.height = height;

        // img.src = "../img/porsche-iris-onlyCarColor.png"
        img.src = "../img/porsche-iris-onlyCarColor.png";
        // getImageData(x, y, width, height)
        // x, y : 객체를 추출한 사각형의 왼쪽 상단 모서리 좌표
        // width, height : 객체를 추출한 사각형의 길이
        // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        // 여기서 s는 source image, d는 destination canvas

        img.onload = draw;
        // 이미지를 로드 하고 나서 drawImage()를 실행
        // imageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) : d -> destination
        // dirty : 상단 왼쪽 부분에서 부터 추출할 좌표를 설정
        // dirtyWidth, Height : 이미지가 그려질 사각형의 너비와 높이

        function draw() {
            // 커스텀 컬러를 위해 RGBA값을 입력 받는 변수
                
            let R = document.getElementById("R"),
                G = document.getElementById("G"),
                B = document.getElementById("B"),
                A = document.getElementById("A").value,
                convertedToRGB = HexToRGB();
            R.value = convertedToRGB[0];
            G.value = convertedToRGB[1];
            B.value = convertedToRGB[2];
            
            ctx.drawImage(img, 0, 0, width, height);
            // imageData의 배열 길이는 가로픽셀 * 세로픽셀 * 4(r,g,b,a)
            // 따라서 한 픽셀당 길이 4의 배열이 할당 되고 배열 요소는 순서대로 rgba이다
            // imageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) : d -> destination
            // dirty : 상단 왼쪽 부분에서 부터 추출할 좌표를 설정
            // dirtyWidth, Height : 이미지가 그려질 사각형의 너비와 높이
            const imageData = ctx.getImageData(0, 0, width, height),
                  data = imageData.data;
            // height가 소수점이 있기 때문에 소수점을 제거해주는 식을 세운다.
            for (j = 0; j < width * (height - height % 1) * 4; j += 4) {
                //  data는 1픽셀당 rgba 요소 4개를 가지고 있다.
                // 마지막은 a요소 인데 선명도를 적당히 조절해야 색감이 이쁘게 잘나온다.
                data[j] = R.value;
                data[j + 1] = G.value;
                data[j + 2] = B.value;

                if (data[j + 3] > 100) {
                    data[j + 3] = A;
                }

            }
            ctx.putImageData(imageData, 0, 0);
            
        }
        //HEX 요소 RGB로 변경
        function HexToRGB(){
            let hex = document.getElementById("rgba_value").value;
            let red = parseInt(hex.slice(1,3),16),
                green = parseInt(hex.slice(3,5),16),
                blue = parseInt(hex.slice(5,7),16)
            return [red, green, blue];
        
        }
        
        
    })

}


//스크롤바에 따라 헤더에 있는 옵션 종류 표시 & 사진 변환

let car_interior_image = document.querySelector("#car_interior_image");
car_interior_image.classList.add("car_image_remove");

let option_indecator = () => {
    document.addEventListener('scroll', function () {

        let a1 = document.getElementById("scroll1");
        let a2 = document.getElementById("scroll2");
        let a3 = document.getElementById("container1");
        let a4 = document.getElementById("car_image");
        let car_image = document.querySelector("#car_image");
        let car_interior_image = document.querySelector("#car_interior_image");
        // getBoundingClientRect.top : 부모요소로 부터 위로 얼마나 떨어져 있는지 a1 a2는 각각 id =scroll1 2
        // 까지의 상대 위치(부모요소로 부터 위로 얼마나)를 나타냄
        let mainOption2_y = a1.getBoundingClientRect().top;
        let mainOption3_y = a2.getBoundingClientRect().top;
        let viewWidth = a3.offsetWidth;
        let carImageHeight = a4.offsetHeight;
        // 웹페이지의 너비를 줄이면 자동차 이미지가 자동으로 비율을 맞춰서 줄어들게 된다.
        // 이 때 높이도 시시각각 달라지기 때문에 현재 자동차의 이미지 높이를 불러와서 메인 옵션의
        // 좌표에서 빼분 값을 조건으로 설정하면 조건 또한 자동으로 맞춰지게 된다. 
        let change_height1 = carImageHeight - mainOption2_y;
        let change_height2 = carImageHeight - mainOption3_y;


        // width 가 특정 값 미만일 때 구조가 바뀌기 때문에 특정 값 기준으로 기준 픽셀값을 다르게 설정해야 한다. 특정 영역이 조건에 있는
        // 특정 픽셀값을 만족 시 옵션이 표시된다.
        if (viewWidth >= 903) {

            if (mainOption2_y <= 200) {

                car_image.classList.add("car_image_remove");
                car_interior_image.classList.remove("car_image_remove");
                $('#scroll1_div').css({ borderBottom: "none" });
                $('#scroll2_div').css({ borderBottom: "3px red solid" });

            }
            else {
                car_image.classList.remove("car_image_remove");
                car_interior_image.classList.add("car_image_remove");
                $('#scroll1_div').css({ borderBottom: "3px red solid" })
                $('#scroll2_div').css({ borderBottom: "none" })
            }

            if (mainOption3_y <= 200) {
                $('#scroll2_div').css({ borderBottom: "none" });
                $('#scroll3_div').css({ borderBottom: "3px red solid" });
            }
            else {
                $('#scroll3_div').css({ borderBottom: "none" });
            }
        } else {
            console.log(change_height1)
            console.log("carimgheight : " + carImageHeight)
            if (change_height1 >= -120) {

                car_image.classList.add("car_image_remove");
                car_interior_image.classList.remove("car_image_remove");
                $('#scroll1_div').css({ borderBottom: "none" });
                $('#scroll2_div').css({ borderBottom: "3px red solid" });

            }
            else {

                car_image.classList.remove("car_image_remove");
                car_interior_image.classList.add("car_image_remove");
                $('#scroll1_div').css({ borderBottom: "3px red solid" });
                $('#scroll2_div').css({ borderBottom: "none" });
            }

            if (change_height2 >= -120) {

                $('#scroll2_div').css({ borderBottom: "none" });
                $('#scroll3_div').css({ borderBottom: "3px red solid" });

            }
            else {
                $('#scroll3_div').css({ borderBottom: "none" });
            }
        }
    })
}


let customColor_changeHeight = () => {
    // let customColorON = document.getElementById("rgba_value");
    $('#rgba_value').click(function(){
        $('#BoxForHeight').show();
        
    })
           
    $('*').hover(function(){
        $('#BoxForHeight').hide();
        
    })

}

let progressBar = () =>{
    let upperMainOption1 = document.getElementById('scroll1_div')
}
// querySelectorAll(css)는 주어진 css 선택자에 대응하는 요소 전부 반환 querySelector(css)는 css
// 선택자에 대응하는 요소 중 첫번째 요소만 반환 querySelector(css)=querySelectorAll[0]

$(document).ready(function () {

    base_price();

    option_indecator();

    CarColorChange();

    customColor_changeHeight();
})

// *=은 패턴 매칭 속성을 지닌 속성 선택자 $=은 텍스트 끝 매칭 속성을 지닌 속성 선택자 ^=은 텍스트 시작 매칭 속성을 지닌 속성
// 선택자 3/7일 이후 개선 사항 개선사항 : 
// 1) 체크박스 중복 해제 
// 2) 체크박스 on off -> 기존 코드는 누르면 항상 true기 때문에 off가 안됨
// 3) 한 리스트의 옵션 중복 선택 시 값들을 전부 더하는 기능 
// 4) 창 너비를 줄일 때 옵션 리스트 이름을 하나씩 숨기는 반응형
// 5) 창 너비를 줄일 때 페이지의 구조를 바꿔줘서 가독성을 높히는 반응형           완
// 6) 스크롤을 내리거나 올릴때 특정 부분에서 사진을 바꿔주는 반응형              완
// 7) 금액 표시시 천 단위로 콤마로 끊어주는 기능
// 8) 뷰포트 너비를 줄여서 구조가 바뀐 이후로 계속 폭을 줄일 때 옵션 리스트 집합이    옵션 리스트 집합이 불안정 한 것 안정화 완
// 9) 자동차 외관 컬러 색상 변환 기능    세부 옵션을 누를 때 제외 완