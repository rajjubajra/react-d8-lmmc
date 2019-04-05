import React from 'react';
import Iframe from 'react-iframe';


const ContactiFrame = () => {
  return(
    <div>
    <Iframe url="https://www.youtube.com/embed/qH4pJISKeoI"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen/>
    </div>
  )
}

export default ContactiFrame;