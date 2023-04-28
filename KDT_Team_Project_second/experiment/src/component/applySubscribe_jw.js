import style from "../css/applySubscribe_jw.module.css";
//useRef 는 직접 DOM 요소를 건들여야할 때 해당하는 요소에 ref={name}을 부여하고
// const aa = useRef(name) 으로 하면 aa는 name에 해당하는 요소들을 가져올 수 있다.
import { useEffect, useState,useRef } from "react";
import AddCart from "./addCart_jw";
import Slide from "./swiper_jw";
import { useDispatch, useSelector } from "react-redux";
import { contentGetRdc, compareIDRdc, getKeyConvertJSRdc } from "../data/data";
import useAxios from "../additional_features/useAxios_jw";
import contentsSelect from "../additional_features/contentsSelect_jw";
import sessionStorage from "../additional_features/sessionStorage_jw";
const a = [];
let c = [];
function ApplySubscribe_jw() {
  const contentsData = useAxios("http://localhost:4000/data"),
    [totalPrice, setTotalPrice] = useState(0),
    [onOff, setOnOff] = useState(),
    [isTrue, setIsTrue] = useState(),
    data = useSelector(store => store.dataSet),
    key = data.getKeyConvertJS,
    dispatch = useDispatch();
  
  const containerRef = useRef();
  
  useEffect(() => {
    dispatch(contentGetRdc(contentsData));
  });

  function counter() {}

  function addBtnOnClick(e) {
    const resultData = contentsData.find((x) => x.id === e.target.id);

    setTotalPrice("여기에 토탈 가격이 들어감");
    c = contentsSelect(contentsData, resultData, a, e)
    setOnOff(c)
    console.log(onOff)
    dispatch(getKeyConvertJSRdc(sessionStorage(a)));
    dispatch(compareIDRdc(e.target.id));

    
  }

//  onOff는 contentsSelect 함수에서 return 된 contentsData.length를 갖는 onoff 기능 배열이다.
//  버튼 클릭을 하면 addBtnOnClick 실행 > contentsSelect 실행 > onOff 데이터 변경이 된다.
//  즉 버튼을 누를 때 마다 실행. onOff.include(true) 함수는 onOff 배열 중 하나라도 true가 있는지
//  검사해주는 함수이다. 하나라도 일치하면 true, 아니면 false
  useEffect(()=>{
    if(onOff!==undefined){
      if(onOff){
        setIsTrue(onOff.includes(true))
      }
    }
     
  },[onOff])

  console.log("isTrue? : ",isTrue)
  // console.log("applySubscribe rendering..");
  return (
    <>{}
      <div ref={containerRef} className={style.container}>
        <div className={style.main}>
          <div className={style.mainLeft}>
            <div className={style.swiperArea}>
              <Slide />
            </div>
            <div className={style.noticeArea}>
              <div
                style={{
                  borderRadius: "5px",
                  width: "30px",
                  height: "20px",
                  backgroundColor: "rgb(64, 143, 247)",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                공지
              </div>
              많은 사랑 부탁드립니다.
            </div>
            <div className={style.menuArea}>
              <div className={style.menu1}>
                <p onClick={counter}>전체</p>
              </div>
              <div className={style.menu2}>
                <p onClick={counter}>OTT/뮤직</p>
              </div>
              <div className={style.menu3}>
                <p onClick={counter}>자기개발</p>
              </div>
              <div className={style.menu4}>
                <p onClick={counter}>도서/아티클</p>
              </div>
              <div className={style.menu5}>
                <p onClick={counter}>자기관리</p>
              </div>
              <div className={style.menu6}>
                <p onClick={counter}>유쓰</p>
              </div>
              <div className={style.menu7}>
                <p onClick={counter}>단기렌탈</p>
              </div>
              <div className={style.menu8}>
                <p onClick={counter}>반려동물</p>
              </div>
              <div className={style.menu9}>
                <p onClick={counter}>여행</p>
              </div>
              <div className={style.menuBtn}>＾</div>
            </div>
            <div className={style.subscribeContentArea}>
              {contentsData.map((value, index) => {
                return (
                  <div key={value.id} className={style.subscribeContentBox}>
                    <div className={style.contentIcon}>
                      <img src={value.url} alt="" />
                    </div>
                    <div className={style.contentArea}>
                      <div className={style.content}>
                        <div className={style.contentTitle}>
                          {value.title} &gt;
                        </div>
                        <div className={style.contentText}>{value.text}</div>
                        <button
                          id={value.id}
                          onClick={addBtnOnClick}
                          className={style.addBtn}
                        >
                          + 담기
                        </button>
                      </div>
                    </div>
                    <div className={style.priceTextArea}>
                      월 {value.price}원
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={style.mainRight}>
            <div className={style.rightContentArea}>
                {isTrue ? <AddCart totalPrice={totalPrice} getKeyConvertJS={key} />:""}
     
              <div style={isTrue ? {marginTop:90+'px'}:null} className={style.goTOSubscribe}>
                <div className={style.goTOSubscribeTxt}>
                  <div className={style.todaySubscribeIs}>
                    오늘은 어떤 상품을
                    <br /> 구독할까요?
                  </div>
                  <div className={style.toLogin}>로그인 하러 가기 - &gt;</div>
                  <div className={style.subscribing}>현재 구독중인 상품</div>
                  <div className={style.ckeckYourContent}>
                    <div className={style.cautionBtn}>i</div> <pre> </pre>로그인
                    하고 구독중인 상품을 확인해 보세요
                  </div>
                </div>
              </div>
              <div className={style.cs}>
                <div className={style.csMenuArea1}>
                  <div className={style.csMenuImg1}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQON_GawiUP2UC1l9Ib0DKuZhZRzXk13jXadg&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <div className={style.csMenuTxt1}>JW 소개</div>
                </div>
                <div className={style.csMenuArea2}>
                  <div className={style.csMenuImg2}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQON_GawiUP2UC1l9Ib0DKuZhZRzXk13jXadg&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <div className={style.csMenuTxt2}>고객센터</div>
                </div>
                <div className={style.csMenuArea3}>
                  <div className={style.csMenuImg3}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQON_GawiUP2UC1l9Ib0DKuZhZRzXk13jXadg&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <div className={style.csMenuTxt3}>재원닷컴</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplySubscribe_jw;
