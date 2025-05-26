import { useState } from 'react';
import './Practice05.css';
import ColorBox from './ColorBox';

function Practice05() {
    
    let [boxes, setBoxes] = useState([
        'red', 'blue', 'green', 'black'
    ]);

    return (
        <div>
            <div>
                <button onClick={() => {
                    let temp = ['red', ...boxes];
                    setBoxes(temp);
                }}>앞빨간박스추가</button>
                <button onClick={() => { 
                    let temp = ['blue', ...boxes];
                    setBoxes(temp);
                }}>앞파란박스추가</button>
                <button onClick={() => { 
                    let temp = ['green', ...boxes];
                    setBoxes(temp);
                }}>앞초록박스추가</button>
                <button onClick={() => {
                    let temp = [...boxes, 'red'];
                    setBoxes(temp);
                }}>뒤빨간박스추가</button>
                <button onClick={() => { 
                    let temp = [...boxes, 'blue'];
                    setBoxes(temp);
                }}>뒤파란박스추가</button>
                <button onClick={() => { 
                    let temp = [...boxes, 'green'];
                    setBoxes(temp);
                }}>뒤초록박스추가</button>
                <button onClick={()=>{
                    //앞: unshift   shift
                    //뒤: push      pop
                    let temp = [...boxes];
                    temp.shift();
                    setBoxes(temp);
                }}>앞 박스 삭제</button>
                <button onClick={()=>{
                    let temp = [...boxes];
                    temp.pop();
                    setBoxes(temp);
                }}>뒤 박스 삭제</button>
            </div>

            {
                // 'red', 'green', 'blue', 'black'
                boxes.map((item)=>{
                    //return <div className='box' style={{backgroundColor:item}}></div>
                    return <ColorBox bgColor={item} />
                })
            }
        </div>
    );
}

/*
function Practice05() {


    let [boxes, setBoxes] = useState([
        <div className='box bg-red'></div>,
        <div className='box' style={{backgroundColor:'blue'}}></div>,
        <div className='box' style={{backgroundColor:'green'}}></div>,
        <div className='box' style={{backgroundColor:'black'}}></div>
    ]);

    return (
        <div>
            <div>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.unshift(<div className='box bg-red'></div>);
                    setBoxes(temp);
                }}>앞빨간박스추가</button>
                <button onClick={() => { 
                    let temp = [...boxes];
                    temp.unshift(<div className='box' style={{backgroundColor:'blue'}}></div>,);
                    setBoxes(temp);
                }}>앞파란박스추가</button>
                <button onClick={() => { 
                    let temp = [...boxes];
                    temp.unshift(<div className='box' style={{backgroundColor:'green'}}></div>);
                    setBoxes(temp);
                }}>앞초록박스추가</button>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.push(<div className='box bg-red'></div>);
                    setBoxes(temp);
                }}>뒤빨간박스추가</button>
                <button onClick={() => { 
                    let temp = [...boxes];
                    temp.push(<div className='box' style={{backgroundColor:'blue'}}></div>,);
                    setBoxes(temp);
                }}>뒤파란박스추가</button>
                <button onClick={() => { 
                    let temp = [...boxes];
                    temp.push(<div className='box' style={{backgroundColor:'green'}}></div>);
                    setBoxes(temp);
                }}>뒤초록박스추가</button>
                <button onClick={()=>{
                    //앞: unshift   shift
                    //뒤: push      pop
                    let temp = [...boxes];
                    temp.shift();
                    setBoxes(temp);
                }}>앞 박스 삭제</button>
                <button onClick={()=>{
                    let temp = [...boxes];
                    temp.pop();
                    setBoxes(temp);
                }}>뒤 박스 삭제</button>
            </div>

            {boxes}
        </div>
    );
}
*/
export default Practice05;