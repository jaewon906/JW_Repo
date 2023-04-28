import TopBtnJW from "./topBtn_JW";
import HeaderJW from "./header_jw";
import ApplySubscribeJW from "./applySubscribe_jw";
import style from '../css/app.module.css'

function App() {

    return (
        <div className={style.container}>
            <TopBtnJW />
            <HeaderJW />
            <ApplySubscribeJW />
            {/* <Ss /> */}
        </div>
    )
}
export default App;