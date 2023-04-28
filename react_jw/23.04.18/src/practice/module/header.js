import React from 'react';
import HeaderStyle from '../module/counter.module.css'
import { useState } from 'react';
function Header() {
    let totalScrollTop = document.documentElement.scrollTop,
     scrolltop = document.documentElement.scrollHeight - document.documentElement.clientHeight,
     progressBar = (totalScrollTop / scrolltop ) * 100;
     const [progressBarWidth, setProgressBarWidth] = useState(0)
    window.addEventListener('scroll',function progressBarWidth(){
        setProgressBarWidth(progressBar)
    })
    return (
        <React.Fragment>
            <div className={HeaderStyle.header}>
                <div style={{color:'white'}}>재원이네 가게^^</div>
            </div>
            <div className={HeaderStyle.progressbar} style={{width:progressBarWidth + "%"}}></div>
        </React.Fragment>
    )
}
export default Header;