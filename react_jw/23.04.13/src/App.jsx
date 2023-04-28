import './App.css'
function App(){
    const styleH2 = {
        border:'solid 1px black', color:'blue', fontSize:'32px'
    }
    return(
        <div>
            {/*최상위태그는 하나만!*/}
            <h1>Hello world</h1>
            <h2 style={styleH2}>Hello world</h2>
            <h2 style={{ border:'solid 1px black', color:'blue', fontSize:'32px'}}>Hello world</h2>
            <h2 className="content">Hello world</h2>
        </div>
    )
}
export default App;

/*app.jsx는 자바스크립트XML 파일의 확장자입니다. jsx는 리액트에서 사용되는 템플릿 언어 
jsx 파일을 자바스크립트 파일로 변환하기 위해서는 바벨과 같은 도구를 사용한다. jsx파일에서는
자바스크립트와 HTML 태그를 함꼐 사용*/