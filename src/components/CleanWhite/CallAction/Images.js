import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
width: 100%;
min-height: 300px;
margin-bottom: 100px;
display: flex;
justify-content:center;
align-items: center;

> div{
  width: 100%;
  display:flex;
  justify-content: center;
  height: 350px;
    border: 0.5rem solid #fff;
    margin: 10px;
    box-shadow: 1px 1px 4px #3333334f;
    background-size: cover;
    background-position: center;
    filter: var(--grayscale);
}

ul.images > li{
    list-style: none;
    width: 25%;
    height: 250px;
    border: 0.5rem solid #fff;
    margin: 5px;
    box-shadow: 1px 1px 4px #3333334f;
    background-size: cover;
    background-position: center;
    filter: var(--grayscale);
}
`;


class Images extends React.Component{
  state = {
    v_1: '',
    v_2: '',
    v_3: ''
  }

 componentDidMount(){
    
    const url = 'http://yellow-website.com';

    this.props.images.map((img)=>{
      if(img.field_image_name === 'vertical-1'){
         this.setState({v_1: url + img.field_image_rest_api})
      }
      if(img.field_image_name === 'vertical-2'){
        this.setState({v_2: url + img.field_image_rest_api})
      } 
     if(img.field_image_name === 'vertical-3'){
      this.setState({v_3: url + img.field_image_rest_api})
      }
    })
  } 
  



  render(){
    const {v_1, v_2, v_3} = this.state;
  
    return(
      <Div className="row">
              <div className="col" style={{backgroundImage:`url("${v_1}")`}}></div>
              <div className="col" style={{backgroundImage:`url("${v_2}")`}}></div>
              <div className="col" style={{backgroundImage:`url("${v_3}")`}}></div>
      </Div>
    )
  }
}
export default Images;