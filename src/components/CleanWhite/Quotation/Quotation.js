import React from 'react';
import styled, {keyframes} from 'styled-components';
import Button from './Button';
import Address from './address';
import MessageForm from './MessageForm';


const formAppear = keyframes`
0% {opacity: 0}
100%{opacity: 1}
`;

const formDisappear = keyframes`
0%{opacity: 1}
100%{opacity: 0}
`;


const Div = styled.div`
  .row{
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }

  .show{
    display: flex;
    animation-name: ${formAppear};
    animation-duration: 3s;
  }
  .hiding{
    animation-name: ${formDisappear};
    animation-duration: 3s;
  }
  .hide{
    display: none; 
  }

`;

class Quotation extends React.Component{
  state = {
      showHide: true
  }

  messageForm = () => {
   this.state.showHide === true 
   ? this.setState({showHide: false})
   : this.setState({showHide: true})
  }

  render(){

    return(
      <Div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <Button messageForm={this.messageForm} showHide={this.state.showHide} />
          </div>
          <div className="col-md-6">   
            
                <div className={this.state.showHide ===  true ? 'show' : 'hide'}>
                  <Address address={this.props.address} />
                </div>  
                <div className={this.state.showHide === false ? 'show' : 'hide'}>
                  <MessageForm messageForm={this.messageForm} />
                </div>
           
              
          </div>
        </div>
      </Div>
    )
  }
}
export default Quotation;