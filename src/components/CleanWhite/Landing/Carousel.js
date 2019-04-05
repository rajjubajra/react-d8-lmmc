import React from 'react';
import styled, {keyframes} from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

const fadeIn = keyframes`
from {  opacity: 0; }
to { opacity: 1 }
`;

const CarouselItem = styled.div`
width: 100%;
height: 100vh;
display: flex;
text-align: center;

.item{
  width: 100% !important;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: right top;
  background-repeat: no-repeat;
  filter: var(--grayscale);


  .entering{
    animation-name: ${fadeIn};
    animation-duration: 5s;
  }
  .entered{
    opacity: 1
  }
}


`;



class Carousel extends React.Component{
  state = { 
    counter: 0,
    fadeIn: 'entering'
  };

runCounter = (props) => {
  const length = this.props.scrollingText.length;
  this.state.counter === length - 1
  ? this.setState({counter: 0})
  : this.setState({counter: this.state.counter + 1}); 
}

changeClassName = () => {
  this.state.fadeIn === 'entering' 
  ? this.setState({fadeIn: 'entered'}) 
  : this.setState({fadeIn: 'entering'});
}


componentDidMount() {
  this.interval = setInterval(()=>this.runCounter(), 5000);
  this.interval = setInterval(()=>this.changeClassName(), 2500);
}


render(props){
  
  const {bg_2, scrollingText } = this.props;
  const arrNum = this.state.counter;  
  
 return(
  <CarouselItem>
        <div className="item" style={{backgroundImage:`url("${bg_2}")`}}>
          <div className={this.state.fadeIn} >
            <h1>{scrollingText[arrNum].title}</h1>
            <span>{ReactHtmlParser(scrollingText[arrNum].field_scrolling_text)}</span>
          </div>
        </div>
  </CarouselItem>
    
  )
  

}


}
export default Carousel;