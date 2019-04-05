import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';


const Section = styled.div`
width: 100%;
display:flex;
flex-direction: column;
justify-content: center;

@media ( max-width: 576px){
  p{
    font-size: 1rem;
    font-weight: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 1.4rem !important;
    i{
      margin: 10px 0px;
    }
  }
}


p{
  line-height: 0.7rem;
}
p > i{
  padding: 0px 10px 0px 0px;
  color: var(--dark-2);
}
.fa, .fab, .fal, .far, .fas {
  text-shadow: 0px 0px 0px #555;
}
`;




class Address extends React.Component{
  getAddress = (props) => {
    const view = this.props.address.map((item)=>{
      return <p key={item.nid}>
        {ReactHtmlParser(item.field_contact_info_fontawesome_i)}
        {item.field_contact_information.replace('"','')}
        </p>
    })
    return view;
  }

  

  render(){
    return(
      <Section>
        {this.getAddress()}
      </Section>
    )
  }
}
export default Address;