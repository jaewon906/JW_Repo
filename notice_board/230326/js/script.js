// ////////////////////////////////////전역 변수//////////////////////////////////////////
let count = 0,
    board_arr = [];
for (var i = 0; i < 2; i++) {
    board_arr[i] = 0;
}

let logInToken = false,
    ID = document.getElementById("inputID"),
    PW = document.getElementById("inputPW"),
    pageNumber = 1;


////////////////////////////////////////////////////////////////////////////////////////////
function getCookie(logInToken) {
    let saveLogInToken = document.cookie
}

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

///////////////////////////   상단에 스크롤 진행상황을 보여주는 함수   ////////////////////////////
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

////////////////////////////////   게시글 올리기   //////////////////////////////////////
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
//////////////////////////////   모달창 띄우기   /////////////////////////////////
function modal() {
    let modal_aroundBlur = document.getElementById("modal_aroundBlur"),
        signIn = document.getElementsByClassName("signIn"),
        close_icon = document.getElementsByClassName("fa-solid fa-x"),
        close = close_icon[0];

    for(let signin of signIn){

        signin.addEventListener("click", (e) => {
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
    

}
// 각 게시판 메뉴를 누르면 페이지가 이동하지 않고 해당 게시판 데이터만 출력하는 기능
// element.style.stylevalue 로 지정할 때가 있는데 여러 속성값을 변경 하고 싶을 땐
// setAttribute("속성","속성값")으로 한 줄에 지정하면 편하다.
function eachBoardDataShow() {
    let typeOfNoticeBoard = document.getElementsByClassName("typeOfNoticeBoard"),
        board_title_name = document.getElementById("board_title_name");

    for (let element of typeOfNoticeBoard) {

        element.addEventListener("click", () => {

            $("#board_container").fadeOut(0).fadeIn(300)
            board_title_name.innerText = element.getAttribute(`data-value`)
        })
    }
}


/////////////////////   로그인 로그아웃 기능    ///////////////////////////
function modalLogIn() {
    let needToLogIn = document.querySelectorAll(".needToLogIn"),
        // 헤더 로그인 버튼
        signIn = document.getElementsByClassName("signIn"),
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
                    // $(`body`).addClass("hidden")
                    modal_aroundBlur.classList.add("hidden");
                }
            }
        }
        else {
            addUrl_write.href = "../HTML/write.html"
            addUrl_modify.href = "../HTML/modify.html"
        }
    }

    /////////////////////    로그인을 하는 일련의 과정을 보여줌.  (실제로 로그인이 되는것은 아님)////////////////
    function logInProcess(modal_logIn, logIn, logOut) {
        let modal_logInButton = modal_logIn,
            logIn_button = logIn[0],
            logOut_button = logOut
        // 모달창 로그인 버튼을 누를 때 로그인 성공 or 실패
        modal_logInButton.onclick = () => {

            let welcome = document.getElementById("welcome"),
                loginFailText = document.getElementById("loginFailText"),
                user = [ID.value, PW.value],
                matchID = new RegExp("^[0-9]*[a-zA-Z]*$"),
                matchPW = new RegExp("^([0-9]*[a-zA-Z]*[!,@,#,$,%,^,&,*]*){8,15}$"),
                matchIDPW = [matchID, matchPW];

            if (matchIDPW[0].test(user[0]) && matchIDPW[1].test(user[1])) {
                logInToken = true;
                if (logInToken) {
                    welcome.innerHTML = `<p>반갑습니다 ${user[0]}님</p><a href="" style="margin-right:15px;"><i style="font-size:20px; margin-left:15px" class="fa-regular fa-id-card"></i></a>`
                    $("#modal_aroundBlur").hide();
                    $("body").removeClass("hidden")
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
            }
            else {
                console.log("aaa")
                loginFailText.innerText = "아이디 또는 비밀번호를 잘못 입력하셨습니다."
            }
        }
    }

    logInProcess(modal_logInButton, signIn, signOut)
}

///////////////////////    글쓰기 html에서 등록하기 수정하기    /////////////////////////
function uploadOrCancel() {
    let submit = document.getElementById("submit"),
        cancel = document.getElementById("cancel");

    try {
        submit.onclick = () => {
            let confirm_window = confirm("등록 하시겠습니까?");

            if (confirm_window) {
                alert("등록을 완료했습니다.");
            }
        }
        cancel.onclick = () => {
            let confirm_window = confirm("작성을 취소 하시겠습니까? 작성했던 내용들은 저장되지 않습니다.");

            if (confirm_window) {
                alert("작성을 취소했습니다.");
            }
        }
    } catch {
        console.error("uploadOrCancel() error beacause, one of the variable of this function does not exist in this HTML")
    }
}

///////////////////    게시판 html 에서 화살표 버튼을 누르면 페이지가 이동하는 기능    //////////////////
function movePage() {
    try {
        let pageMoveForward_button = document.getElementById("pageMoveForward"),
            pageMoveBack_button = document.getElementById("pageMoveBack"),
            page_number_box = document.getElementById("page_number_box")
        pageMoveBack_button.onclick = () => {

            if (pageNumber >= 1) {
                pageNumber++;
                page_number_box.innerHTML = `<a>${pageNumber}</a><a>${pageNumber + 1}</a><a>${pageNumber + 2}</a><a>${pageNumber + 3}</a><a>${pageNumber + 4}</a>`

            }


        }
        pageMoveForward_button.onclick = () => {

            if (pageNumber > 1) {
                pageNumber--;
                page_number_box.innerHTML = `<a>${pageNumber}</a><a>${pageNumber + 1}</a><a>${pageNumber + 2}</a><a>${pageNumber + 3}</a><a>${pageNumber + 4}</a>`
            }

        }
    }
    catch {
        console.error(" movePage() error beacause, one of the variable of this function does not exist in this HTML")
    }
}

//////////////////////////  회원가입 약관 체크박스 기능 구현 ///////////////////////
function signUpcheckBox() {
    let checkboxes = document.querySelectorAll(".agreeCheckbox"),
        agreeTermsOfUse = document.getElementById("agreeTermsOfUse");
    try {
        checkboxes[3].onclick = () => {
            // 모두 동의하는 체크박스 클릭 시 전부 체크되는 기능
            if (checkboxes[3].checked) {

                for (let checkbox of checkboxes) {
                    checkbox.checked = true
                }
            }
            else {

                for (let checkbox of checkboxes) {
                    checkbox.checked = false
                }
            }

        }
        // 필수 체크박스를 전부 눌러야 다음 페이지로 넘어가는 기능 
        agreeTermsOfUse.onclick = () => {
            let registMyInfo_htmlLink = document.getElementById("registMyInfo_htmlLink")

            if (checkboxes[0].checked && checkboxes[1].checked) {

                registMyInfo_htmlLink.setAttribute("href", "registMyInfo.html")
            }
            else {
                $('#pleaseAgree').css({
                    color: "red"
                })
            }
        }
        // 체크박스 전부 true일 시 전체 동의 체크박스가 true가 되는 기능
        window.onclick = () => {
            
            if (checkboxes[0].checked && checkboxes[1].checked && checkboxes[2].checked) {
                checkboxes[3].checked = true;
            }
        }             
    }
    catch {
        console.error("signUpCheckBox() error")
    }
}
// 회원가입 창 나오는 애니메이션
function registMyInfoFadeIn(){
    // let registMyInfoMain = document.getElementById("registMyInfoMain")
    $("#registMyInfoMain").fadeOut(0).fadeIn(300).css({
        display:"flex"
    })
}

function registTestAndMatch(){

}

/////////////////////////////      ready.function(){}      /////////////////////////////
$(document).ready(() => {
    // 상단에 스크롤 진행상황을 보여주는 함수
    progressBar()
    // 게시글 올리기
    // create_notice_list()
    // 모달창 구현 기능
    modal()
    // 로그인 로그아웃 구현
    modalLogIn()
    // 각 게시판 메뉴를 누르면 페이지가 이동하지 않고 해당 게시판 데이터만 출력하는 기능
    eachBoardDataShow()
    // 글쓰기 html 에서 등록하기 취소하기 기능
    uploadOrCancel()
    // 게시판 html에서 페이지 넘기는 기능
    movePage()
    // 회원가입 체크박스 모두 동의해야 회원가입 페이지로 넘어가는 기능
    signUpcheckBox()
    // 회원가입 창 나오는 애니메이션
    registMyInfoFadeIn()
    // 
    registTestAndMatch()
})

// 현재 버그 :
// 로그아웃을 누른 후 로그인을 누르면 모달창의 애니메이션이 재생되지 않고 바로 나타나는 현상
// logintoken이 true임에도 불구하고 modalLogIn에서 else문이 작동하지 않음
