import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

const Page = styled.div`
width: 100%;
min-height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items; cetner;
`;

class WorkflowBrief extends React.Component{

  getData = () => {
    const view = this.props.workflow.map((item)=>{
      return(
        <section key={item.nid}>
          <h3>{ReactHtmlParser(item.title)}</h3>
              {ReactHtmlParser(item.field_workflow_brief)}
        </section>
      )
    })
    return view;
  }

  render(props){
    return(
      <Page>
        {this.getData()}
      </Page>
    )
  }
}
export default WorkflowBrief;