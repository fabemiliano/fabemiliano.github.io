import React, { useState } from 'react';
import bug from '../imgs/insect.svg';
import blood from '../imgs/blood.png';

function randomFly() {
  const x = Math.floor(Math.random() * 100) - 50;
  const y = Math.floor(Math.random() * 100) - 50;
  const deg = Math.floor(Math.random() * 360);
  return `rotate(${deg}deg) translate(${x}px, ${y}px) scale(0.75)`;
}

function bloodRemove(e) {
  console.log(e);
}

function createNewbug(setArr, arr, e) {
  e.remove();
  console.log(e.style.top);
  const top1 = `${Math.floor(Math.random() * 85)}vh`;
  const top2 = `${Math.floor(Math.random() * 85)}vh`;
  const degree1 = Math.floor(Math.random() * 360);
  const left1 = `${Math.floor(Math.random() * 98)}%`;
  const left2 = `${Math.floor(Math.random() * 98)}%`;
  const degree2 = Math.floor(Math.random() * 360);
  setArr([...arr, {
    top: e.style.top, left: e.style.left, transform: 'rotate(0) translate(0, 0)', img: blood, func: bloodRemove,
  }, {
    top: top1, left: left1, transform: `rotate(${degree1}deg)`, img: bug, func: randomFly,
  }, {
    top: top2, left: left2, transform: `rotate(${degree2}deg)`, img: bug, func: randomFly,
  }]);
}

function MainScreen() {
  const [arr, setArr] = useState([{
    top: '200px', left: '200px', transform: 'rotate(45deg)', img: bug, func: randomFly,
  }]);
  return (
    <div>
      <h1>KILL THE FLY</h1>
      <div id="main-frame" className="main-frame">
        {arr.map(({
          top, left, transform, img, func,
        }) => {
          if (img === '/static/media/insect.f22a96ed.svg') 
        {return <img className="raket" src={img} alt="" width="50px" style={{ top, left, transform }} onMouseEnter={(e) => { e.target.style.transform = (func());}} onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }} onClick={(e) => createNewbug(setArr, arr, e.target)} />}
        {return <img className="bottle" src={img} alt="" width="50px" style={{ top, left, transform }} onClick={(e) => e.target.remove()}/>}
        })}
      </div>
    </div>
  );
}

export default MainScreen;
