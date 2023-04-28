import style from '../applySubscribe_jw.module.css'
import { useEffect, useState } from 'react'
import AddCart from './addCart_jw'
import Slide from './swiper'
import Swiper from 'swiper';
// useEffect 한번만 렌더링되게
let count = 0;
// 담기 버튼 클릭 시 장바구니 창 활성화

function ApplySubscribe_jw() {
    const [contentsData, setContentData] = useState([])
    const [addClick, setAddClick] = useState(false)
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
    function counter() {
        count++
    }
    function addBtnOnClick(){
        setAddClick(value => !value)
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
                                                <button onClick={addBtnOnClick} className={style.addBtn}>+ 담기</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={style.mainRight}>
                        <div className={style.rightContentArea}>
                             <AddCart/>
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
                                    <div className={style.csMenuImg1}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQON_GawiUP2UC1l9Ib0DKuZhZRzXk13jXadg&usqp=CAU'/></div>
                                    <div className={style.csMenuTxt1}>0 0 소개</div>
                                </div>
                                <div className={style.csMenuArea2}>
                                    <div className={style.csMenuImg2}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQON_GawiUP2UC1l9Ib0DKuZhZRzXk13jXadg&usqp=CAU'/></div>
                                    <div className={style.csMenuTxt2}>고객센터</div>
                                </div>
                                <div className={style.csMenuArea3}>
                                    <div className={style.csMenuImg3}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQON_GawiUP2UC1l9Ib0DKuZhZRzXk13jXadg&usqp=CAU'/></div>
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