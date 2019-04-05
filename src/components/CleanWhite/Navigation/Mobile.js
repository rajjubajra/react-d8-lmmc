import React from 'react';
import styled from 'styled-components';


const NavMobile = styled.div`

@media only screen and (max-width: 700px) {

  .header{
    width: 100%;
    height: 54px;
    display: flex;
    justify-content: space-between;
  }

  ul.main-menu{
    display: none;
    flex-direction: column;
    position: relative;
    top: 0px;
    width: 200px;
    margin-top: 148px;
    z-index: 1;
    padding: 0px;
    text-align: center;
    li{
      line-height: 2.5rem;
      width: 100%;
      margin: 0;
      border: 1px solid var(--dark-3);
      background-color: var(--dark-3);
    }
    li a{
      color: var(--light-2);
    }
    li a:hover{
      color: #fff;
      border-bottom: 0px;
    }
  }
  .show{
   display: flex !important;
  }
  .line-button{
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 10px;
    top: 10px;
    z-index: 1;
    margin-top: 19px;
    padding: 0px 30px 29px 30px;
  }
  .line-button > div{
    width: 20px;
    height:2px;
    margin: 2px;
    background-color: var(--dark-3);
  }
}
`;


class Mobile extends React.Component{  

  handleHover = () => {
      this.state.isHovere === false 
        ? this.setState({isHovere: true}) 
        : this.setState({isHovere: false});
        /** view and hide navigation menu */
       const NavBtn = document.querySelector('.main-menu');      
       this.state.isHovere ? NavBtn.classList.remove('show'): NavBtn.classList.add('show');
       /** change nav div three line to cross shap to be done */
       const threeLines = document.querySelector('.line-button');
       console.log('line buttons', threeLines);

  }
  handleMenu = () => {
    this.state.isMobileMenu === false 
      ? this.setState({isMobileMenu: true}) 
      : this.setState({isMobileMenu: false});
     const NavBtn = document.querySelector('.main-menu');      
     this.state.isMobileMenu ? NavBtn.classList.remove('show'): NavBtn.classList.add('show');
}
  
foo = () => {
  const yw = 'https://www.yellow-website.com';
  window.open(yw, '_blank');
}


  render(props){
    const {logo, yPosition } = this.props;    
    //add show or hide id on Navigation bar
    const showHide = yPosition < 200 ? 'show' : 'hide';
   
    return(
      <NavMobile>
        
        <div id={showHide} >
          <ul className="main-menu" 
                  onMouseEnter={this.handleMenu} 
                  onMouseLeave={this.handleMenu}>

            <li><a onClick={this.foo} >Multi Page</a></li>
            <li><a onClick={this.foo} >Single Page</a></li>
            <li><a onClick={this.foo} >Blogs</a></li>
            <li><a onClick={this.foo} >Elements</a></li>
            <li><a onClick={this.foo} >Icons</a></li>
          </ul>
        </div>
      </NavMobile>     
    )
  }
}
export default Mobile;