import React, { useState } from 'react';
 
 

const  App = () => {

  let time = new Date().toLocaleTimeString();
   
  const [cnttime, updatetime] = useState(time);

   const myTime  = () => {
     time = new Date().toLocaleTimeString();
       updatetime(time);

     }

  setInterval (myTime,1000)

  

  return (
    <>
    <div className="time"> 
     <h1> Digital Clock</h1>
     <h1> {cnttime} </h1>
     </div>
     </>
  );
}

export default App;
