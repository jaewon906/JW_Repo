import style from '../css/applySubscribe_jw.module.css'
//useRef 는 직접 DOM 요소를 건들여야할 때 해당하는 요소에 ref={name}을 부여하고
// const aa = useRef(name) 으로 하면 aa는 name에 해당하는 요소들을 가져올 수 있다.
import { useRef, useEffect, useState } from 'react'
import AddCart from './addCart_jw'
import Slide from './swiper'
import { useDispatch, useSelector } from 'react-redux';
import { contentGet, compareID } from '../data/data';
import Aa from './cc'
// useEffect 한번만 렌더링되게
let count = 0;
let cc;
function ApplySubscribe_jw() {
    const [contentsData, setContentData] = useState([]),
        [addClick, setAddClick] = useState(false),
        dispatch = useDispatch(),
        [convert, setConvert] = useState(true);
    //   contentsData를 data.js의 리듀서인 contentGet에 가져와서 
    //   initialstate.contentsData에 저장
    dispatch(contentGet(contentsData))

    useEffect(() => {
         fetch('http://localhost:4000/data')
            .then(res => {
                const body = res.json();
                return body
            })
            .then(json => {
                setContentData(json)
            }).catch(err => console.error(err))
    }, [count])


    // useEffect 렌더링 한번만 실행되게 하기 위함 (onClick)
    function counter() {
        count++
    }

    function addBtnOnClick(e) {
        dispatch(compareID(e.target.id))
        setAddClick(value => !value)

        if(addClick){
            if(e.target.id===1){

                // 해당하는 id와 세션 id가 같다면 세션에 추가 x
            }
            else{
                // 해당하는 id와 세션 id가 다르다면 세션에 해당하는 데이터 추가, addCart에서 진행 
            }
        }
        else{// 해당하는 Id 데이터 삭제
        }

    }
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
                                        <div className={style.contentIcon}><img src={value.url}></img></div>
                                        <div className={style.contentArea}>
                                            <div className={style.content}>
                                                <div className={style.contentTitle}>{value.title} &gt;</div>
                                                <div className={style.contentText}>{value.text}</div>
                                                <button id={value.id} onClick={addBtnOnClick} className={style.addBtn}>+ 담기</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={style.mainRight}>
                        <div className={style.rightContentArea}>

                            {addClick ? <AddCart /> : ''}
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
                                    <div className={style.csMenuImg1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQON_GawiUP2UC1l9Ib0DKuZhZRzXk13jXadg&usqp=CAU' /></div>
                                    <div className={style.csMenuTxt1}>JW 소개</div>
                                </div>
                                <div className={style.csMenuArea2}>
                                    <div className={style.csMenuImg2}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQON_GawiUP2UC1l9Ib0DKuZhZRzXk13jXadg&usqp=CAU' /></div>
                                    <div className={style.csMenuTxt2}>고객센터</div>
                                </div>
                                <div className={style.csMenuArea3}>
                                    <div className={style.csMenuImg3}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQON_GawiUP2UC1l9Ib0DKuZhZRzXk13jXadg&usqp=CAU' /></div>
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