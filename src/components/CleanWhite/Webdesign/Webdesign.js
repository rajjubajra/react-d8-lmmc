import React from 'react';
import Image from './Image';
import Text from './Text';
import styled, {keyframes} from 'styled-components';


const appear = keyframes`
0%   { opacity: 0;}
100% { opacity: 1;}
`;

const disappear = keyframes`
0%   { opacity: 1;}
100% { opacity: 0;}
`;

const Div = styled.div`
.row {
  height: 100vh;
width: 100%;
justify-content: center;
align-items: center;
}

`;


const Box = styled.div`
display: flex;

#view{
  display: flex;
  animation-name: ${appear};
  animation-duration: 3s;
}
#hidding{
  animation-name: ${disappear};
  animation-duration: 2s;
  pacity: 0;
}
#hide{
  display: none;
}

`;



class Webdesign extends React.Component{

  hidintTohide = () =>{
      setTimeout(()=>{ return 'hide'}, 3000);
      return 'hidding';
  }
  
  render(props){
    const {yPosition} = this.props;
    let appear = yPosition > 4000 ? 'view' : this.hidintTohide() ;
    return(
      <Div className="container-fluid">
        <div className="row">
              <div  className="col-md-6">    
                <Box><div id={appear} ><Image webdesign={this.props.webdesign} /></div></Box>
              </div>
              <div className="col-md-6">
               <Box><div id={appear} ><Text  webdesign={this.props.webdesign} /></div></Box>
              </div>
          
        </div>
      </Div>
    )
  }
}
export default Webdesign;