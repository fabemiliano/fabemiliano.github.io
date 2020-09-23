<div className="maincontainer">

        <div className="thecard">

          <div className="thefront">
            <h1>Front of Card</h1>
            <p>This is the front of the card. It contains important information. Please see overleaf for more details.</p>
          </div>

          <div className="theback">
            <h1>Back of Card</h1>
            <p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
          </div>

        </div>
      </div>




.maincontainer{
  position: absolute;
  width: 250px;
  height: 320px;
}

/* THE CARD HOLDS THE FRONT AND BACK FACES */
.thecard{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
}

/* THE PSUEDO CLASS CONTROLS THE FLIP ON MOUSEOVER AND MOUSEOUT */
.thecard:hover{
  transform: rotateY(180deg);
}

/* THE FRONT FACE OF THE CARD, WHICH SHOWS BY DEFAULT */
 .thefront{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #ffc728;
  color: #000;
}

/* THE BACK FACE OF THE CARD, WHICH SHOWS ON MOUSEOVER */
.theback{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #fafafa;
  color: #333;
  text-align: center;
  transform: rotateY(180deg);
}


/*This block (starts here) is merely styling for the flip card, and is NOT an essential part of the flip code */
.thefront h1, .theback h1{
  font-family: 'zilla slab', sans-serif;
  padding: 30px;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
}

.thefront p, .theback p{
  font-family: 'zilla slab', sans-serif;
  padding: 30px;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
}



<div className="gameBoard">
{randomPosition.map((e) => (
  <button
    type="button"
    className="image-block"
    id={icons[e]}
    onClick={(event) => {

      setShow(() => ({ ...show, [e]: { img: icons[e], show: true } }));
      if (show[e].show === false && Object.values(show).some((ell) => (ell.img === show[e].img && ell.show === true))) {
      }
      // if (Object.values(show).filter((el) => el.show === true).length > 0) {
      //   setTimeout(() => { setShow(obj); }, 1000);
      // }

      if (Object.values(show).filter((el) => el.show === true).length > 0) {
        setTimeout(() => { setShow(obj); }, 1000);
      }
    }}
  >
    {show[e].show && (
    <img
      src={icons[e]}
      alt=""
      width="50px"
    />
    )}
  </button>


<div className="card">
      <div className="face front"><h2>Front</h2></div>
      <div className="face back"><h2>Back</h2></div>
    </div>


.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 500px;
  transform-style: preserve-3d;
}

.face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 2s;
  backface-visibility: hidden;
}

.front {
  background: rgb(211, 35, 35);
  color: white;
}

.back {
  background: rgb(32, 193, 214);
  color: white;
  transform:  rotateY(180deg)
}

.card:hover .front{
  transform:  rotateY(180deg);
}

.card:hover .back{
  transform:  rotateY(360deg);
}

h2{
  font-size: 4rem;
  text-transform: uppercase;
  transform: translateZ(100px);
}
\




{randomPosition.map((e) => (
  <div
    className="card"
    onClick={() => {
      console.log(cardAttributes);
      obj[e] = { img: icons[e], showImage: true };
      setCardAttributes({ ...cardAttributes, [e]: { ...cardAttributes[e], showImage: true } });
      if (Object.values(cardAttributes).filter((ell) => ell.showImage === true).length === 1) {
        setTimeout(() => setCardAttributes(obj), 1500);
      }
      if (Object.values(cardAttributes).filter((ell) => ell.showImage === true && ell.img === cardAttributes[e].img).length > 0) {
        console.log((Object.values(cardAttributes).filter((ell) => ell.showImage === true)));
        obj[e] = { img: icons[e], showImage: true };
      }
    }}
  >
    <div className={cardAttributes[e].showImage ? showFront : notShowFront} />
    <div className={cardAttributes[e].showImage ? showBack : notShowBack}><img src={cardAttributes[e].img} alt="" width="100px" /></div>
  </div>