import React from 'react';
import Image from './Image';
import Text from './Text';
import styled from 'styled-components';

const Div = styled.div`
margin-bottom: 100px;

.row {
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
}
`;

class Graphicdesign extends React.Component{
  
  render(props){
    return(
      <Div className="container-fluid">
        <div className="row">
          <div className="col-md-6"><Text  graphicdesign={this.props.graphicdesign} /></div>
          <div className="col-md-6"><Image graphicdesign={this.props.graphicdesign} /></div>
        </div>
      </Div>
    )
  }
}
export default Graphicdesign;