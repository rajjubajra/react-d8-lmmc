import React from 'react';
import styled, {keyframes} from 'styled-components';


const ColorChange = keyframes`
0% {color:var(--red);      transform:rotate(72deg)}
25% {color: var(--orange); transform:rotate(144deg)}
50% {color: var(--yellow); transform:rotate(216deg)}
75% {color: var(--orange); transform:rotate(288deg)}
100% {color: var(--red);   transform:rotate(360deg)}
`;


const LoadingDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  i{
    font-size: 3rem;
    animation: ${ColorChange} 0.5s infinite;
    text-shadow: 0px 0px 0px;
  }


`;



const Loading = () => (
  <div className="col-md-12">
      <LoadingDiv>                    
        <i className="fas fa-circle-notch"></i>
        <p>Loading ...</p>                  
      </LoadingDiv>
  </div>
)
export default Loading;