import React from 'react';
import izah1 from './izah1.png'
import izah2 from './izah2.png'
function Explanation({ exactproject }) {
  return (
    <>
      <p>Salam, {exactproject.name}</p>
      <a href={exactproject.link} target='_blank'>Buyur buda sənin sərbəst iş</a>
      <p>Izah</p>
      <div style={{display:'flex',flexDirection:"column",alignItems:"center",justifyContent:"center",gap:'20px',}}>
      <img src={izah1} alt="" style={{width:"400px"}}/>
        <img src={izah2} alt="" style={{width:"400px"}}/>
      </div>
    
    </>
  );
}

export default Explanation;
