import React from 'react';
import Carousel from './Carousel';
import styled, {keyframes} from 'styled-components';



const scrollDownAnimation = keyframes`
0%     { position: relative; top: -10px; text-shadow: 0px 1px 1px #ccc;  color: var(--dark-2);}
15%    { position: relative; top: -7px;  text-shadow: 1px 1px 1px #ccc;  color: var(--dark-2); }
30%    { position: relative; top: -4px;  text-shadow: 2px 1px 1px #ccc;  color: var(--dark-2); }     
45%    { position: relative; top: -2px;  text-shadow: 3px 1px 1px #ccc;  color: var(--dark-3); }  
60%    { position: relative; top: 0px;   text-shadow: 4px 1px 1px #ccc;  color: var(--dark-3); }
75%    { position: relative; top: -3px;  text-shadow: 3px 1px 1px #ccc;  color: var(--dark-2); } 
90%    { position: relative; top: -6px;  text-shadow: 2px 1px 1px #ccc;  color: var(--dark-2); }
100%   { position: relative; top: -10px; text-shadow: 1px 1px 1px #ccc;  color: var(--dark-2);} 
`;


const Pages = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;

      section{
          width: 100%;
          height: 100vh;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;


          .fas{
            font-weight: 900;
            color: #fd0100;
            font-size: 1.5rem;
            z-index: 10;
            -webkit-animation-name: ${scrollDownAnimation};
            animation-name: ${scrollDownAnimation};
            -webkit-animation-duration: 1.5s;
            animation-duration: 1.5s;
            -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
            cursor: pointer;
          }

          
      }
`;

class Landing extends React.Component{
  

  //scroll window on click 
  scrollSmooth = () => {  
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': 600
    });
  }

  render(props){

    const yPosition = this.props.yPosition;
    //show hide angle down arrow 
    const angleDownStyle = yPosition < 200 ? "fas fa-angle-down" : '';
    
    const {bg_2, scrollingText} = this.props;
    return(
      <Pages>
        <section>
         <Carousel bg_2={bg_2}  scrollingText={scrollingText} /> 
         <i onClick={this.scrollSmooth}  className={angleDownStyle} ></i>
        </section>
      </Pages> 
    )
  }


}
export default Landing;