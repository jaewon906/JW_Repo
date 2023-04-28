// 전역변수 설정

var arr = [];
var equip_value_arr = []
var title_value_arr = [];
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
    let class_name = document
        .getElementById(self.id)
        .className
    let name = document.getElementsByName(self.name)

    checkOnlyOne(name)

    equipTotal(class_name, id);
    // equip_value_arr_text();
    if (class_name == "option1" || class_name == "option2" || class_name == "option3" || class_name == "option4" || class_name == "option5" || class_name == "option6") {
        title_value(class_name, id);
    }

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
        $(`#${ID} i`).css({transform: "rotate(180deg)"})
    } else {
        $(`#${ID}_box`).slideUp(0)
        $(`#${ID} i`).css({transform: "rotate(0deg)"})
    }

    $(`#${ID}`).attr("value", count)
}

// 추가 요금 옵션을 누를 때 마다 옵션에 해당하는 클래스와 id를 불러와 각 id에 해당하는 value값을 price에 저장하고 switch
// case문을 써서 해당하는 클래스의 id의 value 값을 각 배열에 저장 예를 들어 arr[0]은 '클래스1'에 해당하는 value값,
// arr[1]은 '클래스2'에 해당하는 value값 버튼을 누를 때 마다 고유 id의 value값을 불러온다. 기존의 값은 사라지고 새로운
// value의 값을 가져온다. 총 합은 배열의 합을 구한다
function equipTotal(class_name, id) {

    var price = $(`#${id}`).attr('value')

    for (i = 0; i < 9; i++) 

        switch (class_name) {
            case `option${i}`:
                arr[i] = Number(price);
                break;
        }
    
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
                $(`.option${i + 1}`).css({transform: "scale(1)", boxShadow: "none"})
                $(`#${id}`).css(
                    {transform: "scale(1.1)", boxShadow: "0px 0px 3px 1px rgb(34, 34, 34)"}
                )

                console.log("카운트 : " + count);
            }
        }
    }
}

// 체크박스 하나만 체크되는 기능
function checkOnlyOne(name) {

    const checkboxes = name

    checkboxes.forEach((cb) => {
        cb.checked = false;
    })

    name.checked = true;

}

//스크롤바에 따라 헤더에 있는 옵션 종류 표시 & 사진 변환
let option_indecator = () => {
    document.addEventListener('scroll', function () {

        let a1 = document.getElementById("scroll1");
        let a2 = document.getElementById("scroll2");
        let a3 = document.getElementById("container1");
        // getBoundingClientRect.top : 부모요소로 부터 위로 얼마나 떨어져 있는지 a1 a2는 각각 id =scroll1 2
        // 까지의 상대 위치(부모요소로 부터 위로 얼마나)를 나타냄
        scroll1_y = a1
            .getBoundingClientRect()
            .top;
        scroll2_y = a2
            .getBoundingClientRect()
            .top;
        viewWidth = a3
            .offsetWidth

            console
            .log("height : " + scroll1_y)

        // width 가 특정 값 미만일 때 구조가 바뀌기 때문에 특정 값 기준으로 기준 픽셀값을 다르게 설정해야 한다. 특정 영역이 조건에 있는
        // 특정 픽셀값을 만족 시 옵션이 표시된다.
        if (viewWidth >= 903) {

            if (scroll1_y <= 200) {
                car_image = document.getElementById("car_image");
                car_image.innerHTML = "<img src=../img/interior1.jpeg>";
                $('#scroll1_div').css({borderBottom: "none"})
                $('#scroll2_div').css({borderBottom: "3px red solid"})

            } else {
                car_image.innerHTML = "<img src=../img/porsche-iris.jpg>";
                $('#scroll1_div').css({borderBottom: "3px red solid"})
                $('#scroll2_div').css({borderBottom: "none"})
            }

            if (scroll2_y <= 200) {
                $('#scroll2_div').css({borderBottom: "none"})
                $('#scroll3_div').css({borderBottom: "3px red solid"})
            } else {
                $('#scroll3_div').css({borderBottom: "none"})
            }
        } else {

            if (scroll1_y <= 700) {

                car_image = document.getElementById("car_image");
                car_image.innerHTML = "<img src=../img/interior1.jpeg>";
                $('#scroll1_div').css({borderBottom: "none"});
                $('#scroll2_div').css({borderBottom: "3px red solid"});

            } else {

                car_image.innerHTML = "<img src=../img/porsche-iris.jpg>";
                $('#scroll1_div').css({borderBottom: "3px red solid"});
                $('#scroll2_div').css({borderBottom: "none"});
            }

            if (scroll2_y <= 700) {

                $('#scroll2_div').css({borderBottom: "none"})
                $('#scroll3_div').css({borderBottom: "3px red solid"})

            } else {
                $('#scroll3_div').css({borderBottom: "none"})
            }
        }
    })
}

// querySelectorAll(css)는 주어진 css 선택자에 대응하는 요소 전부 반환 querySelector(css)는 css
// 선택자에 대응하는 요소 중 첫번째 요소만 반환 querySelector(css)=querySelectorAll[0]

$(document).ready(function () {

    base_price();

    option_indecator()

})

// *=은 패턴 매칭 속성을 지닌 속성 선택자 $=은 텍스트 끝 매칭 속성을 지닌 속성 선택자 ^=은 텍스트 시작 매칭 속성을 지닌 속성
// 선택자 3/7일 이후 개선 사항 개선사항 : 1) 체크박스 중복 해제 2) 체크박스 on off -> 기존 코드는 누르면 항상 true기
// 때문에 off가 안됨 3) 한 리스트의 옵션 중복 선택 시 값들을 전부 더하는 기능 4) 창 너비를 줄일 때 옵션 리스트 이름을 하나씩
// 숨기는 반응형 5) 창 너비를 줄일 때 페이지의 구조를 바꿔줘서 가독성을 높히는 반응형           완 6) 스크롤을 내리거나 올릴
// 때 특정 부분에서 사진을 바꿔주는 반응형              완 7) 금액 표시시 천 단위로 콤마로 끊어주는 기능 8) 뷰포트 너비를
// 줄여서 구조가 바뀐 이후로 계속 폭을 줄일 때 옵션 리스트 집합이    옵션 리스트 집합이 불안정 한 것 안정화 완