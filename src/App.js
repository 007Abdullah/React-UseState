import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import React from "react";
import pic_bulboff from './pic_bulboff.gif';
import pic_bulbon from './pic_bulbon.gif';
import "./index.css";


function App({ text, maxlength }) {

  const [hidden, sethidden] = useState(true);


  return (
    <>
      <span>
        {hidden ? `${text.substr(0, maxlength).trim()} ...` : text}
        {hidden ? (
          <a href onClick={() => sethidden(false)}>read more</a>
        ) : (
            <a href onClick={() => sethidden(true)}>read less</a>
          )}
      </span>
    </>
  );
}
function Check() {

  const [num, setNumber] = useState(0);
  let imgid = document.getElementById('imgid');


  function light() {
    setNumber((prvious) => {
      // if (prvious > 1) {
      //   imgid.src = "pic_bulbon"
      // }
    });
  }
  // useEffect(() => {
  //   imgid.src = "pic_bulbon"
  // }, [])

  return (
    <>
      <h1 >Second Component</h1>
      <br />
      <img src={pic_bulboff} id="imgid" alt="" onClick={light} />
      <br />
      <h2>{num}</h2>
      {/* <button type="button" onClick={light}>Increment</button> */}
      <br />
      {/* <button type="button" onClick={light(0)}> OFF</button> */}

    </>
  )
}

// function Room() {
//   const [isLit, setLit] = useState(true);

//   return (
//     <>
//       <div className="room">
//         the room is {isLit ? "lit" : "dark"}
//         <br />
//         <button onClick={() => setLit(!isLit)}>
//           flip
//         </button>
//       </div>
//     </>
//   )
// }

// function Number() {

//   const [number, setnumber] = useState(0);

//   return (
//     <>
//       <br />
//       <h1>Your Number Is {number}</h1>
//       <br />
//       <button onClick={() => setnumber(number + 1)}>CLick</button>
//     </>
//   )
// }


export {
  App, Check
}