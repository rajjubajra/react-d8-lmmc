import React from 'react';
import events from 'events';
import ajax from './Restapi/ajax';
import Loading from './Loading';
import logo from './logo.png';
//import CleanWhite from './components/CleanWhite/CleanWhite';

import Data, { ScrollingText } from './Restapi/Data';
import Navigation from './components/Navigation/Navigation';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Multipage from './components/Multipage/Multipage';
import Singlepage from './components/Singlepage/Singlepage';
import Elements from './components/Elements/Element';
import Blogs from './components/Blogs/Blogs';
import Icons from './components/Icons/Icons';


// Create an emitter object so that we can do pub/sub
const emitter = new events.EventEmitter();

class App extends React.Component{
  


  render(){
    
    return(
      <BrowserRouter>
          <div className="App">  
              <Navigation logo={logo} yPosition={0} />
              <Route exact path="/"  component={Home} />
              <Route exact path="/Multipage" component={Multipage} />
              <Route path="/Singlepage" component={Singlepage} />
              <Route path="/Elements" component={Elements} />
              <Route path="/Blogs" component={Blogs} />
              <Route path="/Icons" component={Icons} />

            
          </div>
      </BrowserRouter>
      
    )
  }
}
export default App;