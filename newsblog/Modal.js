import { useState } from "react";

function Modal(props) {
    //props = {title..'', likeCount:10,news:[], setNews:setNews함수}
    //          bgColor:'light
    let [num, setNum] = useState(10);

    return(
        <div className="modal" style={{backgroundColor:props.bgColor }}>
            <h3>{props.title} 💫 {props.likeCount} </h3>
            <p>날짜</p>
            <p>상세내용</p>

            <button onClick={()=>{
                //
                //
                let temp = [...props.news];
                temp[0] = 'Today News';
                props.setNews(temp);
            }}>
                제목변경
            </button>
        </div>
    )
}

export default Modal;