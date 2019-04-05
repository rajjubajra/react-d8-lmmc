import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import ReactHtmlParser from 'react-html-parser';

const Box = styled.div`
width: 100%;
min-height: 350px;
padding: 0px 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

class Text extends React.Component{

  callActionData = (props) => {
    
    const view = this.props.callAction.map((item)=>{
      return(
        <div key={item.nid}>
          <h3>{item.title}</h3>
          {ReactHtmlParser(item.field_call_action_content)}
        </div>
      )});   
      return view;  
  }

  render(){
    return(
      <Box>
      {this.callActionData()}
      <Button />
      </Box>
    )
  }
}
export default Text;