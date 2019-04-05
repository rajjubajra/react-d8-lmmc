import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

const Section = styled.section`
width: 100%;
margin-bottom: 100px;
display: flex;
justify-content: center;

@media (max-width: 576px){
  -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  .icon{
    width: 61px;
    margin: 0px auto;
  }
  .title{
    text-align: center;
  }
}

h2{
  text-align: center;
}

div.contact{
  margin-left: var(--standard-margin);
  margin-right: var(--standard-margin);
  display: flex;
}

.col{
  width: 31.33%;
  margin: 1%;
  height: 300px;
  display:flex;
  justify-content: center;
  align-items: center;
}

.icon{
    padding: 20px;
    margin: 10px;
    border: 1px solid #ccc;
    color: #7b7a7a;
}
.title{
    font-weight: 100;
    font-size: 0.7rem;
    -webkit-letter-spacing: 2px;
    -moz-letter-spacing: 2px;
    -ms-letter-spacing: 2px;
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 1.5rem;
    margin-top: 9px;
}
.text{
  font-weight: 100;
  letter-spacing: 1px;
  font-size: 0.9rem;
}
.fa, .fab, .fal, .far, .fas {
  text-shadow: 0px 0px 0px #555;
}

`;

class Contactdetail extends React.Component{

  getContactData = (props) => {
    const view = this.props.contactinformation.map((item)=>{
      return(
        <div className="col-md-4" key={item.nid}>
          <Section>
              <div className="icon">{ReactHtmlParser(item.field_contact_info_fontawesome_i)}</div>
                <div>
                  <div className="title">{item.field_contact_information_label}</div>
                  <div className="text">{item.field_contact_information}</div>
                </div>
          </Section>   
        </div>       
      )
    })

    return view;

  }


  render(){
    return(
        <div className="row">
          {this.getContactData()}
        </div>
    )
  }
}

export default Contactdetail;

