import React from 'react';
import styled from 'styled-components';
import BrandIcons from './BrandIcons';
import ServicesInColumn from './ServicesInColumn';
import Title from './Title';

const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  margin-bottom: 100px;

`;

class Services extends React.Component{

  

  render(props){
    return(
      <Page>
        <div className="container-fluid">
          <Title />
          <BrandIcons serviceBrands={this.props.serviceBrands} />
          <ServicesInColumn services={this.props.services} />     
        </div>
      </Page>      
    )
  }
}
export default Services;
