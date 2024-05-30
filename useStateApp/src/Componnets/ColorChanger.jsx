// import React, { useState } from 'react'

// const ColorChanger = () => {

//  const [color, setColor] = useState('red')
//  const changeColor = () =>{
//     if(color === 'red'){
//         setColor('blue')
//     }else if(color === 'blue'){
//         setColor('orange')
//     }else if (color === 'orange'){
//         setColor('white')
//     }else{
//         setColor("")
//     }

//  }
//   return (
//     <div style={{ backgroundColor: color, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//       <button onClick={changeColor}>
//   change
//       </button>
//     </div>
//   )
// }

// export default ColorChanger





import React, { useState } from 'react';

const ColorChanger = () => {
  const [color, setColor] = useState('red');

  const changeToRed =()=>{
    setColor('red');
  }

 // const changeToRed = () => setColor('red');
  const changeToBlue = () => setColor('blue');
  const changeToOrange = () => setColor('orange');
  const changeToGreen = () => setColor('green');

  return (
    <div style={{ backgroundColor: color, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={changeToRed}>Red</button>
      <button onClick={changeToBlue}>Blue</button>
      <button onClick={changeToOrange}>Orange</button>
      <button onClick={changeToGreen}>Green</button>
    </div>
  );
};

export default ColorChanger;
