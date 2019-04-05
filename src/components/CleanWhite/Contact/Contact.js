import React from 'react';
import Contactdetail from './Contactdetail';
import ContactiFrame from './ContactiFrame';
class Contact extends React.Component{


render(props){
 
    return(
      <div className="container-fluid">
        <div className="row">
          <h3 style={{textAlign:"center", width: "100%", padding: "30px 0px"}}>Contact</h3>
        </div>
           <Contactdetail  contactinformation={this.props.contactinformation} />
      </div>
    )
  }
}
export default Contact;