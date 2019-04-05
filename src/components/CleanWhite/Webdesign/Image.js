import React from 'react';
import styled from 'styled-components';

const Img = styled.div`

width: 100%;
display: flex;
justify-content: center;
align-items: center;


img{
  width: 80%
  margin:0px auto;
}


`;


const url = 'https://yellow-website.com';

class Image extends React.Component{

  getData = (props) => {
    const view = this.props.webdesign.map((item)=>{
        return url + item.field_webdesign_image;
    });
    return view;
  }

  render(){
    return(
      <Img>
       <img src={this.getData()} alt="images" />
      </Img>
    )
  }
}
export default Image;