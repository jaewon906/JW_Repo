import { useEffect, useState, useRef } from "react";
import style from "../css/jw_main.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default function Main() {
  const img1 = [
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-siwon.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-strawberrycong.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-tving.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-netflix2.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-youtubepremium2.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-doosonfood.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-tving.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-aboutPet.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-enfant.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-dagreen.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-millie.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-eubos.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-modoo.png",
  ];
  const img2 = [
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-yogiyo.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-vcoloring.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-welaaa.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-illy.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-npep.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-disney.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-npep.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-cjFoodVille.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-washswat.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-yogiyo.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-themarket.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-gs25.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-vcoloring_genie.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-dagreen.png",
  ];
  const img3 = [
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-welaaa.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-disney.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-vcoloring_genie.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-dagreen.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-eubos.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-aboutPet.png",
  ];
  const img4 = [
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-strawberrycong.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-youtubepremium2.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-aboutPet.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-illy.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-millie.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-welaaa.png",
  ];
  return (
    <div className={style.container}>
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        <div className={style.btnBox}>
          <a href="main/">
            <button className={style.entranceBtn}>둘러보기</button>
          </a>
        </div>
      </div>
      <div className={style.box}>
        <div className={style.imgBoxss}>
          <div style={{ paddingLeft: "30px" }} className={style.imgBoxs}>
            {img3.map((v, i) => {
              return (
                <div key={i} className={style.img}>
                  <img src={v} />
                </div>
              );
            })}
          </div>
          <div style={{display:'flex',justifyContents:'center',width:'300px', height:'10%'}}>
            <img src={"https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-welaaa.png"} alt=''></img>
          </div>
          <div style={{ paddingRight: "30px" }} className={style.imgBoxs}>
            {img4.map((v, i) => {
              return (
                <div key={i} className={style.img}>
                  <img src={v} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.imgBoxl}>
          {img1.map((v, i) => {
            return (
              <div key={i} className={style.img}>
                <img src={v} />
              </div>
            );
          })}
        </div>
        <div className={`${style.imgBoxl} ${style.after}`}>
          {img2.map((v, i) => {
            return (
              <div key={i} className={style.img}>
                <img src={v} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${style.box} ${style.box1}`}>
        <div className={style.contentBox2}>
          <div>
            <div style={{fontWeight:'bold',fontSize:'40px', marginTop:'200px'}}>
            <p>마음대로 고르고</p>
            <p>
              <span style={{ color: "rgb(247, 64, 134)" }}>할인도 받아요</span>
            </p>
            </div>
            
            <div style={{lineHeight:'30px',marginLeft:'-60px',color:'rgb(71, 71, 71)',width:'170px',fontSize:'20px', marginTop:'50px'}}>
            <p>내 마음대로 고르는데 추가 할인까지 해줘요</p>
 
            </div>
          </div>
          <div >
            <div style={{position:'relative',margin:'-20px 10px 10px 10px '}}>
            <img className={style.pzImg1} src={'https://image.lguplus.com/static/pc-static/hago/images/common/block-subs-a.png'}></img>
            <img className={style.pzImg2} src={'https://image.lguplus.com/static/pc-static/hago/images/common/block-subs-b.png'}></img>
            <img className={style.pzImg3} src={'https://image.lguplus.com/static/pc-static/hago/images/common/block-subs-c.png'}></img>
            <img className={style.pzImg4} src={'https://image.lguplus.com/static/pc-static/hago/images/common/block-subs-d.png'}></img>
            </div>
          </div>
        </div>
      </div>
      <div className={style.box}></div>
      <div className={`${style.box} ${style.box1}`}>
      <div className={style.contentBox2}>
          <div>
            <div style={{fontWeight:'bold',fontSize:'40px', marginTop:'200px'}}>
            <p>구독 관리도</p>
            <p>
              <span style={{ color: "rgb(247, 64, 134)" }}>쉽고 편해요</span>
            </p>
            </div>
            
            <div style={{marginLeft:'120px',lineHeight:'30px',color:'rgb(71, 71, 71)',width:'310px',fontSize:'20px', marginTop:'50px'}}>
            <p>MY 구독에서 내 구독 정보 한 눈에 보세요</p>
            <p>해지하기도 쉬워요</p>
            </div>
          </div>
          <div >
            <div style={{position:'relative',margin:'-20px 10px 10px 10px '}}>
              <img src={process.env.PUBLIC_URL +'./mainImg/phone-body2.png'} alt='phone-body2'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
