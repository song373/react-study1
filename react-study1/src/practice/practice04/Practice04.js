import { useState } from "react";
import "./Practice04.css"

function Practice04(){

    let [boxes, setBoxes] = useState([<div className="box">박스</div>,<div className="box">박스</div> ]);

    let [arr, setArr] = useState([1,1]);

    return(
        <div>
            <div style={{margin : '10px'}}>
        <button onClick={() =>{
            //boxes 배열에다가 요소를 추가
           // let temp = [...boxes];
            //temp.push(<div className="box">박스</div>);
            //setBoxes(temp);

            //arr 배열에다가 아무 값이나 추가 -> arr 길이만큼 반복하면서 box를 그림
            let temp = [...arr,1];
            setArr(temp);

        }}>추가</button>
</div>

        {/*boxes */}

        {
            //arr 배열의 갯수만큼 반복
            // for(let i=0; i<arr.length; i++)
            arr.map(()=>{
                return <div className="box">박스</div>;
                //      <Box/>
            })
        }

        {/*<div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>*/}

        </div>
    )
}

export default Practice04;