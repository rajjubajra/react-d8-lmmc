import React from 'react';
import Plane from './paper-flight.png'
import styled, {keyframes} from 'styled-components';

const Fly = keyframes`

0%{ top: 0px}
20%{ top: -5px}
40%{ top: -10px;}
60%{ top: -10px;}
80%{ top: -5px;}
100%{top: 0px;}

`;

const Div = styled.div`
img{
  width: 120px;
  position:relative;
  animation: ${Fly} 1.5s infinite;
  transform: rotate(-180deg);
  margin: 20px;
}

ul > li{
  list-style: none;
}

ul > li.pln1{
  position: relative;
  top: 150px;
    left: -200px;
}
ul > li.pln2{
  position: relative;
  top: 63px;
    left: -122px;
}
ul > li.pln3{
  position: relative;
  top: -23px;
    left: -40px;
}
ul > li.pln4{
  position: relative;
  top: -60px;
  left: -29px;
}
ul > li.pln5{
  position: relative;
  top: -94px;
  left: -29px;
}

`;



const Image = () => (
  <Div>
    <ul>
      <li className="pln1"><img src={Plane} /></li>
      <li className="pln2"><img src={Plane} /></li>
      <li className="pln3"><img src={Plane} /></li>
      <li className="pln4"><img src={Plane} /></li>
      <li className="pln5"><img src={Plane} /></li>
    </ul>
  </Div>
)
export default Image;