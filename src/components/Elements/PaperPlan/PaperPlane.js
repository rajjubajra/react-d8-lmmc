import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const Sky = styled.div`

width: 100%
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

`;

class PaperPlan extends React.Component{

  render(){
    return(
      <Sky>
        <Image />
      </Sky>
    )
  }
}
export default PaperPlan;