import React from 'react';
import Brief from './Brief';
import Title from './Title';
import styled from 'styled-components';


const Div = styled.div`
margin-bottom: 100px;
`;

class Features extends React.Component{

  

  render(props){
  
    return(
      <Div className="container-fluid">
        
          <Title featureTitle={this.props.featureTitle} />
          <Brief features={this.props.features} />
        
      </Div>
    )
  }
}
export default Features;