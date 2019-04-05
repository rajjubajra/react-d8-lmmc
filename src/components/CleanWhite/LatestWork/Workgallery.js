import React from 'react';
import styled, {keyframes} from 'styled-components';

const addEffect = keyframes`

0%  {filter: grayscale(100); }
100%{filter: grayscale(0); }

`;

const Image = styled.div`
 img{
  width: 100%;
  margin: 10px 0px;
 }
 img:hover{
    animation-name: ${addEffect};
    animation-duration: 0.04s;
    filter: grayscale(0);
 }

 h2{
    position: relative;
    top: 100px;
    left: 6px;
    z-index: 5;
    font-size: 1.5rem;
    display: none;
 }


 

`;


const url = 'http://yellow-website.com'

class Workgallery extends React.Component{


    getImageData = (props) => {
      const view = this.props.workgallery.map((img)=>{
        return(
          <div className="col-md-4" key={img.nid}>
            <Image>
            <h2>{img.field_latest_work_description}</h2>
            <img src={url + img.field_latest_work_image} alt="images" />     
            </Image>
            
          </div>
        )
      })
      return view;
    }

  render(){ 
  
    return(
     <div className="container-fluid">
       <div className="row">
         {this.getImageData()}
       </div>
     </div>
       
     
    )
  }
}
export default Workgallery;