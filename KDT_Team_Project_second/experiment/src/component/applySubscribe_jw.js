import style from "../css/applySubscribe_jw.module.css";
//useRef 는 직접 DOM 요소를 건들여야할 때 해당하는 요소에 ref={name}을 부여하고
// const aa = useRef(name) 으로 하면 aa는 name에 해당하는 요소들을 가져올 수 있다.
import { useEffect, useState, useRef } from "react";
import AddCart from "./addCart_jw";
import Slide from "./swiper_jw";
import { useDispatch, useSelector } from "react-redux";
import {
  contentGetRdc,
  compareIDRdc,
  getKeyConvertJSRdc,
  totalPriceRdc,
  onOffRdc,
  discountRdc
} from "../data/data";
import useAxios from "../additional_features/useAxios_jw";
import contentsSelect from "../additional_features/contentsSelect_jw";
import sessionStorage from "../additional_features/sessionStorage_jw";
import CanvasImage from "../additional_features/canvasRGB_jw";
import comma from "../additional_features/amount_notation";

let [a, c, t, d] = [[], [], 0, 0];

function ApplySubscribe_jw() {
  const contentsData = useAxios("http://localhost:4000/data"),
    [filteredData, setFilteredData] = useState([]),
    [onOff, setOnOff] = useState([]),
    [isTrue, setIsTrue] = useState(),
    [onOff1, setOnOff1] = useState(),
    data = useSelector((store) => store.dataSet),
    key = data.getKeyConvertJS,
    totalPrice = data.totalPrice,
    discount = data.discount,
    cc = data.onOffArr,
    ID = data.id,
    dispatch = useDispatch();

  const canvasRef = useRef(null);

  useEffect(()=>{

      for (var i = 0; i < contentsData.length; i++) {
        c[i] = false;
      }
    
    setOnOff1(c)
  },[contentsData])

  useEffect(() => {
    dispatch(contentGetRdc(contentsData));
  }, [contentsData]);

  useEffect(()=>{
    setFilteredData(contentsData)
  },[contentsData])

  function menuFilter(e) {
    let [f,g,h] = [[],[],[]]

    if(e.target.id!=="all"){
      f = contentsData.filter(x => x.category === e.target.id)
      setFilteredData(f)  

        f.forEach(element=>{
           h =[...h, (parseInt(element.id.slice(2,3))-1)]
        })
        h.forEach(element =>{
          console.log(onOff[element])
          g = [...g, onOff[element]]
        })
        setOnOff1(g)
      }
    
    else{
      f = contentsData
      setOnOff1(onOff)
      setFilteredData(f)
    }

  }
  
  function addBtnOnClick(e) {
    const resultData = contentsData.find((x) => x.id === e.target.id);
    [a, c, t, d] = contentsSelect(contentsData, resultData, c, e);

    setOnOff(c);

    dispatch(getKeyConvertJSRdc(sessionStorage(a)));
    dispatch(compareIDRdc(e.target.id));
    dispatch(totalPriceRdc(t));
    dispatch(discountRdc(d));
    // dispatch(onOffRdc(onOff))

    if (onOff) {
      setIsTrue(onOff.includes(true));
    }
  }

  //  onOff는 contentsSelect 함수에서 return 된 contentsData.length를 갖는 onoff 기능 배열이다.
  //  버튼 클릭을 하면 addBtnOnClick 실행 > contentsSelect 실행 > onOff 데이터 변경이 된다.
  //  즉 버튼을 누를 때 마다 실행. onOff.include(true) 함수는 onOff 배열 중 하나라도 true가 있는지
  //  검사해주는 함수이다. 하나라도 일치하면 true, 아니면 false
  useEffect(() => {
    if (onOff) {
      setIsTrue(onOff.includes(true));
    }
  }, [onOff]);

  // console.log("applySubscribe rendering..");
  return (
    <>
      <div className={style.container}>
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
              <div  className={style.menu1}>
                <p id="all" onClick={menuFilter}>전체</p>
              </div>
              <div className={style.menu2}>
                <p id="OTT/뮤직" onClick={menuFilter}>OTT/뮤직</p>
              </div>
              <div className={style.menu3}>
                <p id="자기개발" onClick={menuFilter}>자기개발</p>
              </div>
              <div className={style.menu4}>
                <p id="도서/아티클" onClick={menuFilter}>도서/아티클</p>
              </div>
              <div className={style.menu5}>
                <p id="자기관리" onClick={menuFilter}>자기관리</p>
              </div>
              <div className={style.menu6}>
                <p id="유쓰"  onClick={menuFilter}>유쓰</p>
              </div>
              <div className={style.menu7}>
                <p id="단기렌탈" onClick={menuFilter}>단기렌탈</p>
              </div>
              <div className={style.menu8}>
                <p id="반려동물" onClick={menuFilter}>반려동물</p>
              </div>
              <div className={style.menu9}>
                <p id="여행" onClick={menuFilter}>여행</p>
              </div>
              <div className={style.menuBtn}>＾</div>
            </div>
            <div className={style.subscribeContentArea}>
              {filteredData.map((value, index) => {
                return (
                  <div
                    key={value.id}
                    ref={canvasRef}
                    className={style.subscribeContentBox}
                  >
                    {onOff1[index] ? (
                      <>
                        <CanvasImage url={value.url} />
                      </>
                    ) : (
                      ""
                    )}
                    <div className={style.contentIcon}>
                      <img src={value.url} alt="" />
                    </div>
                    <div
                      className={
                        onOff1[index] ? style.contentArea1 : style.contentArea
                      }
                    >
                      <div className={style.content}>
                        <div
                          className={
                            onOff1[index]
                              ? style.contentTitle1
                              : style.contentTitle
                          }
                        >
                          {value.title} &gt;
                        </div>
                        <div
                          className={
                            onOff1[index]
                              ? style.contentText1
                              : style.contentText
                          }
                        >
                          {value.text}
                        </div>
                        <button
                          id={value.id}
                          onClick={addBtnOnClick}
                          className={style.addBtn}
                        >
                          {onOff1[index] ? "- 빼기 " : "+ 담기"}
                        </button>
                      </div>
                    </div>
                    <div className={style.priceTextArea}>
                      <div>
                        <div>
                          {Math.round(
                            (1 - (value.price - value.discount) / value.price) *
                              100
                          ) + "%"}
                        </div>
                        <div>월 {comma(value.price - value.discount)}원</div>
                      </div>
                      <div><strike>월 {comma(value.price)} 원</strike></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={style.mainRight}>
            <div className={style.rightContentArea}>
              {isTrue ? (
                <AddCart
                  totalPrice={totalPrice}
                  getKeyConvertJS={key}
                  discount = {discount}
                />
              ) : (
                ""
              )}

              <div
                style={isTrue ? { marginTop: 90 + "px" } : null}
                className={style.goTOSubscribe}
              >
                <div className={style.goTOSubscribeTxt}>
                  <div className={style.todaySubscribeIs}>
                    오늘은 어떤 상품을
                    <br /> 구독할까요?
                  </div>
                  <div className={style.toLogin}>로그인 하러 가기 - &gt;</div>
                  <div className={style.subscribing}>현재 구독중인 상품</div>
                  <div className={style.ckeckYourContent}>
                    <div className={style.cautionBtn}>i</div> <pre> </pre>
                    로그인 하고 구독중인 상품을 확인해 보세요
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
