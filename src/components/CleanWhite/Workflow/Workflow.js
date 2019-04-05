import React from 'react';
import styled from 'styled-components';
import Module from './Module';
import WorkflowBrief from './WorkflowBrief';

const Text = styled.div`
width: 100%;


`;
const WorkFlow = styled.div`
width: 100%;

`;

class Workflow extends React.Component{


  render(props){
    //console.log('workflow data', this.props.workflowmodule)
    return(
      <div className="container-fluid">
            <div className="row">
            <div className="col-md-3">
              <Text>
                  <WorkflowBrief workflow={this.props.workflow} />
              </Text>
            </div>
            <div className="col-md-9">
              <WorkFlow>
                   <Module workflowmodule={this.props.workflowmodule} />
              </WorkFlow>
            </div>
          </div> 
      </div>
        
    )
  }
}
export default Workflow;