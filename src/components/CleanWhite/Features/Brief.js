import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled, {keyframes} from 'styled-components';


const fadeOut = keyframes`
from{ background-color: var(--background)}
to {background-color: var(--light-1)}
`;

const changeColor = keyframes`
from {color: var(--dark-2); text-shadow: 1px 1px 1px #555;}
to   {color: var(--dark-3); text-shadow: 0px 0px 0px #fff;}
`;

const Section = styled.section`

.block{
  width: 100%;
  margin: 10px 0px;
  height: 200px;
  overflow: hidden;
  padding: 20px;
}

.block:hover{
  background-color: var(--light-1);
  animation-name: ${fadeOut};
  animation-duration: 2s;

  i{
    animation-name: ${changeColor};
    animation-duration: 2s;
    color: var(--dark-3);
    text-shadow: 0px 0px 0px #fff;
  }
}


    i{
      position: absolute;
      right: 36px;
      font-size: 2rem;
    }

    p{
      text-align: justify;
      margin-top: 20px;
    }
`;


class Brief extends React.Component{

  getData = (props) => {
    const view = this.props.features.map((item)=>{
        return(
          <div className="col-md-4" key={item.nid}>
            <Section>
              <div className="block">
                  {ReactHtmlParser(item.field_feature_fontawesome_icon)}
                  <h4>{item.title}</h4>
                  {ReactHtmlParser(item.field_features)}
              </div>
            </Section>
          </div>
        )
    });
    return view;
  }


  render(){
    return(
     <div className="row">
       {this.getData()}
     </div>
    )
  }
}
export default Brief;