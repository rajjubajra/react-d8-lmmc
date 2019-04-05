import React from 'react';
import styled from 'styled-components';


const TitleDiv = styled.div`
margin: 100px 0px 20px 0px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;

h3{
  text-align: center;
}

p{
  width: 80%;
  margin: 0px auto;
}

`;

class Title extends React.Component{

  render(){
    return(
      <div className="row">
        <TitleDiv>
              <h3>Services</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque esse similique provident iste, optio totam perspiciatis, possimus debitis laudantium facere eos, fuga amet tempore? Vitae eveniet maiores omnis pariatur animi.</p>
        </TitleDiv> 
      </div>
    )
  }
}
export default Title;