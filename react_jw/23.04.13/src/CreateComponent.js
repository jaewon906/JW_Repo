import style from './CreateComponent.module.css'
import { useState } from 'react';
function CreateComponent() {
    const mode ="welcome";
    const value=[
        {id:1, title:"html", body:'html은...'},
        {id:2, title:"CSS", body:'CSS는...'},
        {id:3, title:"javascript", body:'javascript는...'}
    ]
    const [name, setName] = useState(value);
    let content = null;
    function Header(props) {
        return (
            <header>
                <h1>
                    <a href="/" className={style.hrefText} >{props.title}</a>
                </h1>
            </header>
        )
    }

    function Nav(props) {
        const list=[]
        for(var i=0; i<value.length; i++){
           let a= props.value[i];
           list.push(<li key={a.id} className={style.tomatoColor}>{a.title}</li>);
        }
        return (
            <nav>
                <ul>
                   {list}
                </ul>
            </nav>
        )
    }
    function Article(props){
        return(
            <article>
            <h2>{props.title}</h2>
            <h3>{props.body}</h3> 

        </article>
        )
        
    }

    if(mode ==="welcome"){
        content=<Article title="welcome" body="안녕 모두들!" />
    }
    else if(mode ==="read"){
        content=<Article title="Read" body="안녕 모두 읽자!" />

    }
    
    return (
        <>
            <Header title="React"/>
            <Nav value={value}/>
            {content}
        </>
    )
}
export default CreateComponent;
