import style from '../css/applySubscribe_jw.module.css'
//useRef 는 직접 DOM 요소를 건들여야할 때 해당하는 요소에 ref={name}을 부여하고
// const aa = useRef(name) 으로 하면 aa는 name에 해당하는 요소들을 가져올 수 있다.
import { useEffect, useState } from 'react'
import AddCart from './addCart_jw'
import Slide from './swiper'
import { useDispatch, useSelector } from 'react-redux';
import { contentGetRdc, compareIDRdc, getKeyConvertJSRdc } from '../data/data';
import useAxios from '../additional_features/useAxios';

let a = [];

function ApplySubscribe_jw() {
    const contentsData = useAxios('http://localhost:4000/data', " "),
        [totalPrice, setTotalPrice] = useState(0),
        key = useSelector((store) => store.dataSet.getKeyConvertJS),
        dispatch = useDispatch();

    useEffect(() => {
        dispatch(contentGetRdc(contentsData))
    })

    function counter() {}


    function addBtnOnClick(e) {
        const resultData = contentsData.find(x => x.id === e.target.id)

        dispatch(compareIDRdc(e.target.id))

        let b = 0;
        // 빈 배열인 a에 resultData를 마지막번째 배열로 추가

        // 컨텐츠가 다른것을 담으면서 5개 이상 못담게
        if (a.id !== e.target.id) {
            console.log("a의 ID", a)
            if (a.length < 5) {

                a.push(resultData)
                a.forEach(element => {

                    b += element.price;
                    setTotalPrice(b)
                })
            }
        }


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
        dispatch(getKeyConvertJSRdc(getKeyConvertJS))
        // 여기 까지

    }


    console.log('applySubscribe rendering..')
    return (
        <>
            <div className={style.container}>
                <div className={style.main}>
                    <div className={style.mainLeft}>
                        <div className={style.swiperArea}><Slide /></div>
                        <div className={style.noticeArea}>
                            <div style={{ borderRadius: '5px', width: '30px', height: '20px', backgroundColor: 'rgb(64, 143, 247)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>공지</div> 많은 사랑 부탁드립니다.
                        </div>
                        <div className={style.menuArea}>
                            <div className={style.menu1}><p onClick={counter}>전체</p></div>
                            <div className={style.menu2}><p onClick={counter}>OTT/뮤직</p></div>
                            <div className={style.menu3}><p onClick={counter}>자기개발</p></div>
                            <div className={style.menu4}><p onClick={counter}>도서/아티클</p></div>
                            <div className={style.menu5}><p onClick={counter}>자기관리</p></div>
                            <div className={style.menu6}><p onClick={counter}>유쓰</p></div>
                            <div className={style.menu7}><p onClick={counter}>단기렌탈</p></div>
                            <div className={style.menu8}><p onClick={counter}>반려동물</p></div>
                            <div className={style.menu9}><p onClick={counter}>여행</p></div>
                            <div className={style.menuBtn}>＾</div>
                        </div>
                        <div className={style.subscribeContentArea}>
                            {contentsData.map((value, index) => {
                                return (
                                    <div key={value.id} className={style.subscribeContentBox}>
                                        <div className={style.contentIcon}><img src={value.url} alt="" /></div>
                                        <div className={style.contentArea}>
                                            <div className={style.content}>
                                                <div className={style.contentTitle}>{value.title} &gt;</div>
                                                <div className={style.contentText}>{value.text}</div>
                                                <button id={value.id} onClick={addBtnOnClick} className={style.addBtn}>+ 담기</button>
                                            </div>
                                        </div>
                                        <div className={style.priceTextArea}>월 {value.price}원</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={style.mainRight}>
                        <div className={style.rightContentArea}>

                            {key && contentsData ? <AddCart totalPrice={totalPrice} getKeyConvertJS={key} /> : ""}
                            <div className={style.goTOSubscribe}>
                                <div className={style.goTOSubscribeTxt}>
                                    <div className={style.todaySubscribeIs}>오늘은 어떤 상품을<br /> 구독할까요?</div>
                                    <div className={style.toLogin}>로그인 하러 가기 - &gt;</div>
                                    <div className={style.subscribing}>현재 구독중인 상품</div>
                                    <div className={style.ckeckYourContent}><div className={style.cautionBtn}>i</div> <pre> </pre>로그인 하고 구독중인 상품을 확인해 보세요</div>
                                </div>
                            </div>
                            <div className={style.cs}>
                                <div className={style.csMenuArea1}>
                                    <div className={style.csMenuImg1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQON_GawiUP2UC1l9Ib0DKuZhZRzXk13jXadg&usqp=CAU' alt="" /></div>
                                    <div className={style.csMenuTxt1}>JW 소개</div>
                                </div>
                                <div className={style.csMenuArea2}>
                                    <div className={style.csMenuImg2}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQON_GawiUP2UC1l9Ib0DKuZhZRzXk13jXadg&usqp=CAU' alt="" /></div>
                                    <div className={style.csMenuTxt2}>고객센터</div>
                                </div>
                                <div className={style.csMenuArea3}>
                                    <div className={style.csMenuImg3}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQON_GawiUP2UC1l9Ib0DKuZhZRzXk13jXadg&usqp=CAU' alt="" /></div>
                                    <div className={style.csMenuTxt3}>재원닷컴</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ApplySubscribe_jw