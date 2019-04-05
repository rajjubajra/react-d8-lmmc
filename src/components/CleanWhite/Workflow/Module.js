import React from 'react';
import styled from  'styled-components';
import ReactHtmlParser from 'react-html-parser';

const Page = styled.div`
width: 100%;
min-height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items; cetner;

.fas, .fab, fa{
  width: 100%;
  font-size: 4rem;
  padding: 70px 0px;
  border: 1px solid #ddd;
  margin-bottom: 30px;
  text-align: center;
}

h4{
  border: 1px solid #ddd;
  padding: 10px 0px;
  background-color: var(--dark-2);
  color: var(--dark-1);
  text-align: center;
}


`;


const Ul = styled.ul`
width: 100%;
min-height: 600px;
display:flex;
justify-content: space-between;
align-items: center;
text-align: center;


li{
  display: flex;
  width: 100%;
  margin: 10px;
  flex-direction: column;
}





`;

class Module extends React.Component{


  WorkFlowData = (props) => {
   
    const view = this.props.workflowmodule.map((item)=>{
      return(
      <div className="col-md-4" key={item.nid}>
        {ReactHtmlParser(item.field_workflow_icon)}
        <h4>{item.field_workflow_title}</h4>
      </div>);
    })
    return view ;
  }


  render(props){

    return(
      <Page>
        <div className="container-fluid">
         <div className="row">
            {this.WorkFlowData()}
         </div>
       </div>
      </Page>
       
    )
  }
}
export default Module;