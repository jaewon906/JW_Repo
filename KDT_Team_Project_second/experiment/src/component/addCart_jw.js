import { useDispatch, useSelector } from 'react-redux';
import style from '../css/addCart_jw.module.css'
import { addCartbtn1Rdc } from '../data/data';

let discount = 5000;

function Addcart(props) {
    const data = useSelector(store => store.dataSet),
         btnCount = data.btnCount,
         dispatch = useDispatch();

    function onOff() {
        dispatch(addCartbtn1Rdc(btnCount))
    }

    // console.log('addCart rendering..')
    return (

        <div style={btnCount ? { height: '60px' } : null} className={style.container}>
            <div className={style.header}>구독 장바구니<i onClick={onOff} className={btnCount ? `fa-solid fa-chevron-down` : 'fa-solid fa-chevron-up'}></i></div>
            {btnCount ? '' : <div className={style.main}>
                <div className={style.addedContent}>담은상품<pre> </pre><span>{props.getKeyConvertJS.length}</span></div>
                <div className={style.amountsOfContentsIs5}>한번에 5개까지 신청할 수 있어요</div>
                {/* 여기서부터 선택한 컨텐츠 */}
                <ul>
                    {props.getKeyConvertJS.map((value, index) => {
                        return (
                            <li key={value.id}>
                                <div className={style.contentArea}>
                                    <div className={style.xBtn}>x</div>
                                    <div className={style.content}>
                                        <img src={value.url} alt=""/>
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
                    <div>월 {props.totalPrice}원</div>
                </div>
                <div className={style.discount}>
                    <div>할인</div>
                    <div>- {discount}원</div>
                </div>
                <div className={style.totalPay}>
                    <div>예상 구독료</div>
                    <div>
                        <div>{Math.round((1 - ((props.totalPrice - discount) / props.totalPrice)) * 100) + '%'}</div>
                        <div>월 {props.totalPrice - discount}원</div>
                    </div>
                </div>
                <div className={style.confirmBtn}>구독 신청하기</div>
            </div>
            }
        </div>
    )
}

export default Addcart;