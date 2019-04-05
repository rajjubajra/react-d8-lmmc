import React from 'react';
import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';
import logo from '../../logo.png';


const Nav = styled.div`

#hide{
  display: none;
}
#show{
  display: flex;
}
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: var(--bgTrasparant);
    width: 100%;
    height: 77px;
    padding-top: 12px;

.logo{
  margin: 0px 20px;
  img{
    width: 50px;
    filter: grayscale(1%);
    border: 0px;
    box-shadow: 0px 0px 0px;
  }
}


ul.main-menu{
    height: 54px;
    margin-right: 20px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
}
ul.main-menu > li{
  list-style: none; 
  a{
    font-size: 0.8rem;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0px 15px;
    margin: 0px 5px;
    color: var(--dark-3);
    -webkit-transition: padding 0.4s; /* For Safari 3.1 to 6.0 */
    transition: padding 0.4s;
    cursor: pointer;
  }
  a:hover{
    color: var(--dark-3);
    padding-bottom: 28px;
    border-bottom: 1px solid var(--dark-2);
    -webkit-transition: padding 0.4s; /* For Safari 3.1 to 6.0 */
    transition: padding 0.4s;
  }
}



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



class Navigation extends React.Component{
  constructor(){
    super();
    this.state = {
      isHovere: false,
      isMobileMenu: false,
      navBar: true,
    }    

  }
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
    const { yPosition } = this.props;    
    //add show or hide id on Navigation bar
    const showHide = yPosition < 200 ? 'show' : 'hide';
    const opacity = yPosition  < 200 ? 'rgba(235,238,243,0.77)' : 'rgba(235,238,243,0.0)';
   
    return(
      <Nav style={{backgroundColor:opacity}}>
        <div className="header">
          <div className="logo"><img src={logo} alt="logo" /></div>
          {/**  mobile app line icon for drop down menu */}
            <div  className="line-button" 
                  onMouseEnter={this.handleHover} 
                  onMouseLeave={this.handleHover}
                  onClick={this.handleHover}>
                  <div></div><div></div><div></div>
            </div>
        </div>
        
        <div id={showHide} >
          <ul className="main-menu" 
                  onMouseEnter={this.handleMenu} 
                  onMouseLeave={this.handleMenu}>
            <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink to='/MultiPage' >Multi Page</NavLink></li>
            <li><NavLink to='/SinglePage' >Single Page</NavLink></li>
            <li><NavLink to='/Blogs' >Blogs</NavLink></li>
            <li><NavLink to='/Elements' >Elements</NavLink></li>
            <li><NavLink to='/Icons' >Icons</NavLink></li>
          </ul>
        </div>
      </Nav>     
    )
  }
}
export default Navigation;