import style from '../css/addCart_jw.module.css'
function Addcart() {
    return (
        <div className={style.container}>
            <div className={style.header}>구독 장바구니<i class="fa-solid fa-chevron-up"></i></div>
            <div className={style.main}>
                <div className={style.addedContent}>담은상품<pre> </pre><span>1</span></div>
                <div className={style.amountsOfContentsIs5}>한번에 5개까지 신청할 수 있어요</div>
                <div className={style.contentArea}>
                    <div className={style.content}>

                    </div>
                </div>
                <div style={{height:'500px'}}></div>
            </div>
        </div>
    )
}

export default Addcart;