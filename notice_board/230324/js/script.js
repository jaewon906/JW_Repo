// 전역 변수
let count = 0,
    board_arr = [];
for (var i = 0; i < 2; i++) {
    board_arr[i] = 0;
}

let logInToken = false;
function main_function(self) {
    boardActive(self);

}
function boardActive(self) {
    let board_id = self.id,
        board_class = document.getElementById(self.id).className;
    console.log(board_id, board_class)
    for (var i = 1; i <= 2; i++) {

        switch (board_id) {
            case `board${i}`: {
                if (count % 2 == 0) {
                    $(`.${board_class}`).animate({
                        width: `0px`,
                        height: `0px`,
                        opacity: `0`
                    }, 750)
                    $(`#${board_id}`).animate({
                        width: `100vw`,
                        height: `120vh`,
                        opacity: `1`
                    }, 750).animate({
                        opacity: `0`
                    }, 1000).css({
                        cursor: `auto`
                    })
                }
                else {
                    $(`.${board_class}`).animate({
                        width: `250px`,
                        height: `300px`,
                        opacity: `1`
                    }, 500);
                    $(`#${board_id}`).animate({
                        width: `250px`,
                        height: `300px`,
                        opacity: `1`
                    }, 500)
                } count++;
            }; break;
        }
    }
}

// 상단에 스크롤 진행상황을 보여주는 함수
function progressBar() {
    document.addEventListener('scroll', function () {
        $("#progressBar").show();
        let progressBar = document.getElementById(`progressBar`),
            // document.documentElement 는 body나 head를 포함하는, 전체 HTML요소의 프레임을 반환
            window_Y = document.documentElement.scrollTop,
            // .scrollHeight는 스크롤의 전체 길이, clientHeight는 내가 보고있는 화면의 높이
            // 왜이렇게 구해야 하냐면 우리가 보고있는 화면의 높이가 0 이라면, 스크롤의 전체 길이는
            // HTML 전체 높이와 동일한데, 아마도 우리가 보는 화면이 HTML 사이에 들어가면서 두  높이만큼
            // 오버플로우 되서 안보여지게 되서 그렇다고 생각.
            scroll_Y = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        progressBar.style.width = (window_Y / scroll_Y) * 100 + '%'

    })

}

// 게시글 올리기
function create_notice_list() {
    let submit = document.getElementById("submit"),
        board_main = document.getElementById("board_main");

    submit.addEventListener("click", () => {
        let notice_title = document.getElementById("notice_title"),
            notice_title_text = notice_title.value,
            notice_content = document.getElementById("notice_content"),
            notice_content_text = notice_content.value,
            YesOrNo = confirm("등록 하시겠습니까?");

        if (YesOrNo) {
            alert("등록 되었습니다.");
            location.href = "notice_board1.html"
            board_main.innerHTML += ` <div class="notice_list">
            <div class="No">No.</div>
            <div class="title">${notice_title_text}</div>
            <div class="author">작성자</div>
            <div class="typed_time">작성 시간</div>
            <div class="like">좋아요</div>
        </div>`
        }
    })

}
// 모달창 띄우기
function modal() {
    let modal_aroundBlur = document.getElementById("modal_aroundBlur"),
        body_division = document.querySelector("body"),
        signIn = document.getElementById("signIn"),
        close_icon = document.getElementsByClassName("fa-solid fa-x"),
        close = close_icon[0];
    body = body_division[0];

    signIn.addEventListener("click", (e) => {
        $(`#modal_aroundBlur`).show().css({
            // .show()로 불러오면 display가 block으로 자동으로 변경된다..
            display: "flex"
        })
        $(`#modal`).animate({
            opacity: "1"
        }, 500);
        $(`body`).addClass("hidden")
        modal_aroundBlur.classList.add("hidden");


    })
    close.addEventListener("click", (e) => {
        $(`#modal_aroundBlur`).hide();
        $(`#modal`).css({
            opacity: 0
        })
        $(`body`).removeClass("hidden");
        modal_aroundBlur.classList.remove("hidden");
    })

}
// 각 게시판 메뉴를 누르면 페이지가 이동하지 않고 해당 게시판 데이터만 출력하는 기능
// element.style.stylevalue 로 지정할 때가 있는데 여러 속성값을 변경 하고 싶을 땐
// setAttribute("속성","속성값")으로 한 줄에 지정하면 편하다.
function eachBoardDataShow() {
    let typeOfNoticeBoard = document.getElementsByClassName("typeOfNoticeBoard"),
        board_title_name = document.getElementById("board_title_name");

    for (let element of typeOfNoticeBoard) {

        element.addEventListener("click", () => {

            $("#board_container").fadeOut(00).fadeIn(300)
            board_title_name.innerText = element.getAttribute(`data-value`)
        })
    }
}


// 
function noticeWriteModify() {
    let needToLogIn = document.querySelectorAll(".needToLogIn"),
        // 헤더 로그인 버튼
        signIn = document.getElementById("signIn"),
        // 헤더 로그아웃 버튼
        signOut = document.getElementById("signOut"),
        modal_logInButton = document.getElementById("logIn"),
        addUrl_write = document.getElementById("addUrl_write"),
        addUrl_modify = document.getElementById("addUrl_modify")
    for (let element of needToLogIn) {

        if (!logInToken) {
            element.onclick = () => {
                let YesorNo = confirm("로그인이 필요한 서비스 입니다. 로그인 하시겠습니까?");
                if (YesorNo) {
                    $(`#modal_aroundBlur`).show().css({
                        // .show()로 불러오면 display가 block으로 자동으로 변경된다..
                        display: "flex"
                    })
                    $(`#modal`).animate({
                        opacity: "1"
                    }, 500);
                    $(`body`).addClass("hidden")
                    modal_aroundBlur.classList.add("hidden");
                }
            }
        }
        else{
            addUrl_write.href = "../HTML/write.html"
            addUrl_modify.href = "../HTML/modify.html"
        }
    }

    // 로그인을 하는 일련의 과정을 보여줌. (실제로 로그인이 되는것은 아님)
    function logInProcess(modal_logIn, logIn, logOut) {
        let modal_logInButton = modal_logIn,
            logIn_button = logIn,
            logOut_button = logOut

        modal_logInButton.onclick = () => {

            let welcome = document.getElementById("welcome"),
                loginFailText = document.getElementById("loginFailText"),
                ID = document.getElementById("inputID"),
                PW = document.getElementById("inputPW"),
                user = [ID.value, PW.value],
                matchID = new RegExp("^[0-9]*[a-zA-Z]*$"),
                matchPW = new RegExp("^([0-9]*[a-zA-Z]*[!,@,#,$,%,^,&,*]*){8,15}$"),
                matchIDPW = [matchID, matchPW];

            if (matchIDPW[0].test(user[0]) && matchIDPW[1].test(user[1])) {
                logInToken = true;
                if (logInToken) {
                    welcome.innerHTML = `<a href="" style="margin-right:15px; font-size:20px"><i class="fa-regular fa-id-card"></i>`
                    $("#modal_aroundBlur").hide();
                    logIn_button.style.display = "none";
                    logOut_button.style.display = "flex";

                    logOut_button.onclick = () => {

                        let confirm_window = confirm("로그아웃 하시겠습니까?");

                        if (confirm_window) {
                            alert("로그아웃 되셨습니다.");
                            logInToken = false;
                            $("#modal_aroundBlur").hide();
                            logIn_button.style.display = "flex";
                            logOut_button.style.display = "none";
                            welcome.innerHTML = ``
                        }

                    }
                }
                else {
                    console.log("aaa")
                    loginFailText.innerText = "아이디 또는 비밀번호를 잘못 입력하셨습니다."
                }
            }

        }
    }

    logInProcess(modal_logInButton, signIn, signOut)
}


$(document).ready(() => {
    // 상단에 스크롤 진행상황을 보여주는 함수
    progressBar()
    // 게시글 올리기
    // create_notice_list()
    // 모달창 구현 기능
    modal()
    // 로그인 해야 서비스 할 수 있다는 창을 띄우는 기능
    noticeWriteModify()
    // 각 게시판 메뉴를 누르면 페이지가 이동하지 않고 해당 게시판 데이터만 출력하는 기능
    eachBoardDataShow()

})

// 현재 버그 : 
// 로그아웃을 누른 후 로그인을 누르면 모달창의 애니메이션이 재생되지 않고 바로 나타나는 현상
// logintoken이 true임에도 불구하고 noticeWriteModify에서 else문이 작동하지 않음