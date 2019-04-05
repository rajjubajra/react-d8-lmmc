import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
margin: 80px 0px 50px 0px;
width: 100%;
display: flex;
flex-direction: column;

h3, h2{
  text-align: center;
}

@media(max-width: 576px){
  .read-all-button{
    position:relative;
    top: 35px;
    letter-spacing: 1px;
  }
  
}
`;


class NewsTitle extends React.Component{

  render(){
    return(   
          <Title>
            <h3>Latest News</h3>
            <a href="" className="read-all-button">Read All News Blog</a>
          </Title>  
    )
  }
}
export default NewsTitle;