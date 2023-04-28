import { useDispatch, useSelector } from 'react-redux';
import style from '../css/addCart_jw.module.css'
import { addCartbtn1 } from '../data/data';
import { useState } from 'react';
import ContentsComp from './selectedContents';
// 버튼을 누를 때 마다 Addcart가 랜더링 되기 때문에 전역으로 뺌
let a = [];
let discount = 5000; 

function Addcart() {
    const btnCount = useSelector(state => state.dataSet.btnCount),
        contentsData = useSelector(state => state.dataSet.contentsData),
        ID = useSelector(state => state.dataSet.id),
        resultData = contentsData.find(x => x.id === ID),
        dispatch = useDispatch();
    let totalPrice = 0;

    // 빈 배열인 a에 resultData를 마지막번째 배열로 추가
    a.push(resultData)
    a.forEach(element=>{
        totalPrice+=element.price;
    })

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
    console.log(getKeyConvertJS)
    // 여기 까지

    function onOff() {
        dispatch(addCartbtn1(btnCount))
    }

    return (
        
        <div style={btnCount ? { height: '60px' } : null} className={style.container}>
            <div className={style.header}>구독 장바구니<i onClick={onOff} className={btnCount ? `fa-solid fa-chevron-down` : 'fa-solid fa-chevron-up'}></i></div>
            {btnCount ? '' : <div className={style.main}>
                <div className={style.addedContent}>담은상품<pre> </pre><span>{getKeyConvertJS.length}</span></div>
                <div className={style.amountsOfContentsIs5}>한번에 5개까지 신청할 수 있어요</div>
                {/* 여기서부터 선택한 컨텐츠 */}
                <ul>
                    {getKeyConvertJS.map((value, index) => {
                        return (
                            <li key={value.id}>
                                <div className={style.contentArea}>
                                    <div className={style.xBtn}>x</div>
                                    <div className={style.content}>
                                        <img src={value.url} />
                                        <div>{value.title}</div>
                                        <div>정가 월 {value.price}</div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}

                </ul>
                {/* 여기까지 */}
                <div style={{ height: '200px' }}></div>
                <div className={style.normalPay}>
                    <div>정상 구독료</div>
                    <div>월 {totalPrice}원</div>
                </div>
                <div className={style.discount}>
                    <div>할인</div>
                    <div>- {discount}원</div>
                </div>
                <div className={style.totalPay}>
                    <div>예상 구독료</div>
                    <div>
                        <div>{Math.round((1-((totalPrice - discount) / totalPrice))*100)+'%'}</div>
                        <div>월 {totalPrice - discount}원</div>
                    </div>
                </div>
                <div className={style.confirmBtn}>구독 신청하기</div>
            </div>
            }
        </div>
    )
}

export default Addcart;