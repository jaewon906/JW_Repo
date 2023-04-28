import style from '../css/header_jw.module.css'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom' 
function Header_JW(){

    const[onOff, setOnOff] = useState([true, false, false, false])
    const onOffFunction =() => {
        setOnOff((value) => value[3]=true)
        console.log("after onOff : ",onOff)
    }

    return(
        <>
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.menu}>{useEffect(()=>{},[onOff])}
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQON_GawiUP2UC1l9Ib0DKuZhZRzXk13jXadg&usqp=CAU' alt=''/>
                    <Link style={{color:'black'}} to='/'onClick={onOffFunction} id='header1' className={style.linkStyle}><div className={ (onOff[0] ? `${style.selected}`:null)}>구독신청</div></Link>
                    <Link style={{color:'black'}} to='/'onClick={onOffFunction} id='header2' className={style.linkStyle}><div className={ (onOff[1] ? `${style.selected}`:null)}>MY 구독</div></Link>
                    <Link style={{color:'black'}} to='/'onClick={onOffFunction} id='header3' className={style.linkStyle}><div className={ (onOff[2] ? `${style.selected}`:null)}>이벤트</div></Link>
                    <Link style={{color:'black'}} to='/'onClick={onOffFunction} id='header4' className={style.linkStyle}><div className={ (onOff[3] ? `${style.selected}`:null)}>고객센터</div></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header_JW;