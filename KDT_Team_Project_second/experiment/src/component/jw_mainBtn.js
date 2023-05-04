import { Link } from "react-router-dom"

const style={
   
        width:'350px',
        height:'40px',
        borderRadius: '30px',
        transition: 'background-color 0.3s',
        backgroundColor:'rgb(64, 143, 247)',
        color:'white',
        fontSize: '20px',
        position:'sticky',
        top:'800px',
        zIndex: 2,
        border:'1px solid gray',
        hover:{
            backgroundColor: 'rgb(247, 64, 134)',
            color:'white',
            cursor: 'pointer',
        }
}
export default function MainBtn(){

    return(<Link to='main/'><button style={style}>둘러보기</button></Link>)
}