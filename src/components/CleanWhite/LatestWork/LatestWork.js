import React from 'react';
import LatestWorkBrief from './LatestworkBrief';
import Workgallery from './Workgallery';
import Button from './Button';
import styled from 'styled-components';


class LatestWrok extends React.Component{

  render(props){
    return(
      <div className="container-fluid">
            <div className="row">
              <LatestWorkBrief  latestwork={this.props.latestwork} />
            </div>
            <div className="row">
              <Workgallery  workgallery={this.props.workgallery} />
            </div>
            <div className="row">
              <Button />
            </div>
      </div>
    )
  }
}
export default LatestWrok;