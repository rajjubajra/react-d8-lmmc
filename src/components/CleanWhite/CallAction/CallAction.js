import React from 'react';
import Text from './Text';
import Images from './Images';


class CallAction extends React.Component{


  render(props){
    return(
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
           <Text callAction={this.props.callAction} />
        </div>
        <div className="col-md-6">
           <Images images={this.props.images} />
        </div>
      </div>
      </div>
    )  
  }
}
export default CallAction;