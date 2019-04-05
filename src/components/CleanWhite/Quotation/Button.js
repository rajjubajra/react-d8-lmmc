import React from 'react';
import styled from 'styled-components';

const Btn = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;


const Button = (props) => {

const label = props.showHide === true ? 'Message us' : 'Close message form'

      return(
      <Btn>
        <h3>Get Quotation</h3>
        <button onClick={props.messageForm} >{label}</button>
      </Btn>
      )
}
export default Button;