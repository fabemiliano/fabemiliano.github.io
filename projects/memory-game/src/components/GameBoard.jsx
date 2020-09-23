/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useContext } from 'react';
import icons from '../services/images';
import { ContextAplication } from '../context/context';

const generateRandom = () => Math.floor(Math.random() * 16);

const randomPosition = icons.reduce((arr) => {
  let a = generateRandom();
  while (arr.includes(a)) { a = generateRandom(); }
  return [...arr, a];
}, []);

const storage = JSON.parse(localStorage.getItem('memoryStore')) || [];

const obj = {};
randomPosition.forEach((e) => { obj[e] = { img: icons[e], showImage: false }; });
let auxObj = obj;

function GameBoard() {
  const {
    setStartGame, name, setShowScore, setScore,
  } = useContext(ContextAplication);

  const [cardAttributes, setCardAttributes] = useState(obj);
  const [i, setI] = useState(2);
  const [click, setClick] = useState(0);

  const objectValues = Object.values(cardAttributes);
  // const [timer, setTimer] = useState(0);
  // useEffect(() => { setInterval(() => { setTimer((current) => current + 1); }, 1000); }, []);
  const showFront = 'face showfront front';
  const showBack = 'face showback back';
  const notShowFront = 'face front';
  const notShowBack = 'face back';

  return (
    <div>
      <h1>{name}</h1>
      <h1>{`Clicks: ${click}`}</h1>
      {/* <h2>{`Tempo: ${new Date(timer * 1000).toISOString().substr(14, 5)}`}</h2> */}
      <button type="button" onClick={() => setStartGame(false)}>Início</button>
      <div className="gameBoard">
        {randomPosition.map((e) => (
          <div
            className="card"
            onClick={() => {
              setCardAttributes({ ...cardAttributes, [e]: { ...cardAttributes[e], showImage: true } });
              if (objectValues.filter((el) => el.showImage === true).length === 15) {
                setTimeout(() => {
                  localStorage.setItem('memoryStore', JSON.stringify([...storage, { name, click: click + 1 }]));
                  setStartGame(false);
                  setShowScore(true); setScore(click + 1);
                }, 3000);
              }
              if ((objectValues.filter((el) => el.showImage === true).length > 1
                && objectValues.filter((el) => el.showImage === true).length % i === 0)
                || cardAttributes[e].showImage === true) {
                setCardAttributes(auxObj);
              } else {
                setClick((current) => current + 1);
                if (objectValues.filter((ell) => ell.showImage === true).length % 2 === 1) {
                  setTimeout(() => setCardAttributes(auxObj), 1000);
                }
                if (objectValues.filter((ell) => ell.showImage === true
                  && ell.img === cardAttributes[e].img).length > 0) {
                  auxObj = { ...cardAttributes, [e]: { ...cardAttributes[e], showImage: true } };
                  setCardAttributes(auxObj);
                  setI((current) => current + 2);
                }
              }
            }}
          >
            <div className={cardAttributes[e].showImage ? showFront : notShowFront} />
            <div className={cardAttributes[e].showImage ? showBack : notShowBack}>
              <img src={cardAttributes[e].img} alt="" width="100px" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// setFront('face showfront front'); setBack('face showback back'); setTimeout(() => {setFront('face front'); setBack('face back');}, 2000)}
export default GameBoard;
