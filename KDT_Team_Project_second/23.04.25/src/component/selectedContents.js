import style from '../css/selectedContents.module.css'
function ContentsComp(props) {
    const sessionStorage = window.sessionStorage
    const getKey = sessionStorage.getItem('key')

    function deleteFn(){

    }
    
    return (
        <>
            <li key={props.id}>
                <div className={style.contentArea}>
                    <div onClick={deleteFn}className={style.xBtn}>x</div>
                    <div className={style.content}>
                        <img src={props.url} />
                        <div>{props.title}</div>
                        <div>정가 월 {props.price}</div>
                    </div>
                </div>
            </li>
        </>
    )
}
export default ContentsComp;