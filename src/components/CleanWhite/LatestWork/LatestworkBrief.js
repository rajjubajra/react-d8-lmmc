import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';


const Section = styled.section`
  width: 80%;
  margin: 0px auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3{
    text-align: center;
  }
  
`;

class LatestworkBrief extends React.Component{

  getData = (props) => {
    
    const view = this.props.latestwork.map((item)=>{
      return(
        <Section key={item.nid}>
          <h3>{item.title}</h3>
          {ReactHtmlParser(item.field_latest_work_brief)}
        </Section>
      )
    })
    return view;
  }


  render(){
  
    return(
      <div>
        {this.getData()} 
      </div>
    )
  }
}
export default LatestworkBrief;