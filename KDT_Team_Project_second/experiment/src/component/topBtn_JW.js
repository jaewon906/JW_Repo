import style from '../css/topBtn_JW.module.css'
import { useState } from 'react';

// top 버튼 클릭시 최상단으로 이동하는 기능
function moveTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
}

function TopBtn() {
    const [btnMarginTop, setBtnMarginTop] = useState(document.documentElement.scrollTop + document.documentElement.clientHeight - 150);
    window.onscroll = () => {
        setBtnMarginTop(document.documentElement.scrollTop + document.documentElement.clientHeight - 150)

    }
    window.onresize = () => {
        setBtnMarginTop(document.documentElement.scrollTop + document.documentElement.clientHeight - 150)
    }
    return (
        <div onClick={moveTop} style={{ marginTop: `${btnMarginTop}px` }} className={style.topBtn}>
            <div className={style.topBtnArrow}><i className="fa-solid fa-arrow-up"></i></div>
        </div>
    )
}

export default TopBtn;
