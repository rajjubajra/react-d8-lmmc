import React from 'react';
import styled from 'styled-components';
import Copyright from './copyright';

const FooterDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;

class Footer extends React.Component{

  render(){
    return(
      <FooterDiv>
        <Copyright />
      </FooterDiv>
    )
  }
}
export default Footer;