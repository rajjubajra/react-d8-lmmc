import React from 'react';
import ScrollingText from '../../Restapi/Data';


const Multipage = () =>{
  console.log('props - ', ScrollingText);

  const text = ScrollingText;
  return(
  <div>
      <h1>Multipage Page</h1> 
      <p>{text}</p>
  </div>
  )
}
export default Multipage;