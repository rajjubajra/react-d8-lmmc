import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';
import Button from './Button';

const Div = styled.div`
width: 100%;
display:flex;
justify-content: center;
align-items: center;
padding: 0px 20px;

h3{
  text-align: center;
}

p{
  text-align: justify;
}


`;


class Text extends React.Component{

  getData = (props) => {
    const view = this.props.graphicdesign.map((item)=>{
        return (
         <div key={item.nid}>
           <h3>{item.title}</h3>
           {ReactHtmlParser(item.field_graphic_design_block)}
           <Button />
         </div>
           
        )
    });
    return view;
  }


  render(){
    return(
      <Div>
       {this.getData()}
      </Div>
    )
  }
}
export default Text;