import React from 'react';
import styled, {keyframes} from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

const animate = keyframes`
0% {opacity: 0; letter-spacing: -3px; text-align: center;}
100%{ opacity: 1; letter-spacing: 1px; text-align: center;}
`;

const appear = keyframes`
from {opacity: 0; }
to   {opacity: 1; }
`;


const Section = styled.section`

#view{
  display: flex;
  animation-name: ${appear};
  animation-duration: 4s;

}
#hide{
  display: none;
}

width: 100%
min-height: 300px;
margin-top: 100px;
margin-bottom: 100px;

h3{
  text-align: center;
}

div.reviews{
  max-width: 700px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
}
.date{
  width: 100%;
    font-size: 0.8rem;
    font-weight: 100;
    text-align: right;
    position: relative;
    top: -22px;
    right: 9px;
}
ul.review-nav{
  display: flex;
}

.entering{
  animation-name: ${animate};
  animation-duration: 1s; /* set interval time should match the duration time */
  letter-spacing: 1px;
  opacity: 1;
  text-align: center;
}
.entered{
  opacity:1;
  letter-spacing: 1px;
  text-align: center;
}
`;


class Reviews extends React.Component{
  state = {
    counter: 0,
    animate: ''
  }
  
  //updates by one to the counter state
  // setInterval[infinite loop] executes the runCounter at DidMount
  runCounter = (props) => {
    //REST API -  reviews
    const reviews = this.props.reviews;
    this.state.counter < reviews.length - 1
    ? this.setState({counter:  this.state.counter + 1})
    : this.setState({counter: 0})
  }

  scrollAnimate = () => {
    this.state.animate === 'entered' 
    ? this.setState({animate: 'entering'}) 
    : this.setState({animate: 'entered'});
  }


  componentDidMount(props){
     //counter infine loop - to view reviews[array] one at a time
     this.Interval = setInterval(()=>{this.runCounter()}, 6000);
     
     //animation - css class change - infinite loop
     // animation-duration should match the setInterval time
     this.Interval = setInterval(() => {this.scrollAnimate()}, 3000);
  }







  render(props){
      const { reviews, yPosition } = this.props;
      let num = this.state.counter;
      let appear = yPosition > 3600 ? 'view' : 'hide';
     return(
      <Section>
        <div id={appear} className="reviews">
              <div className={this.state.animate}>
                  <h3>Reviews</h3>
                  <div className="date">{reviews[num].field_review_date}</div>
                  {ReactHtmlParser(reviews[num].field_review)}
                  <i> - {reviews[num].field_review_by}</i>
              </div>
        </div>
      </Section>
    )
  }
}
export default Reviews;