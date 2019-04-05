import React from 'react';
import './style.css';
import Navigation from './Navigation/Navigation';
import Landing from './Landing/Landing';
import Services from './Services/Services';
import CallAction from './CallAction/CallAction';
import Workflow from './Workflow/Workflow';
import LatestWork from './LatestWork/LatestWork';
import Features from './Features/Features';
import Reviews from './Reviews/Reviews';
import Webdesign from './Webdesign/Webdesign';
import Graphicdesign from './Graphicdesign/Graphicdesign';
import News from './News/News';
import Subscription from './Subscription/Subscription';
import Contact from './Contact/Contact';
import Quotation from './Quotation/Quotation';
import Footer from './Footer/Footer';
import ContactFrom from './ContactForm/ContactForm';
import ContactForm from './ContactForm/ContactForm';


class CleanWhite extends React.Component{
  constructor(){
    super();
    this.state = {
      landingPageBg: '',
      yPosition: 0,
    }
  }


  componentDidMount(props){
   
    //get Image data
    const {images } = this.props;
    const url =  'http://yellow-website.com';
    images.map((image)=>{
      return  image.field_image_name === 'bg-2' 
        && this.setState({landingPageBg: url + image.field_image_rest_api})
    });

    window.onscroll = () => {
      const yPosition = window.pageYOffset;
      this.setState({yPosition: yPosition});
    }

  }

  render(props){
    console.log(this.props.scrollingText);
    const { logo  } = this.props;
    return(
      <div className="container-fluid">
        <div className="row index-at-top" >
            <Navigation 
              logo={logo} 
              yPosition={this.state.yPosition}
            />
        </div>
        <div className="row">    
            <Landing 
                bg_2={this.state.landingPageBg} 
                images={this.props.images}
                scrollingText={this.props.scrollingText}
                yPosition={this.state.yPosition}
                />
        </div>
        <div className="row">
            <Services 
                serviceBrands={this.props.serviceBrands} 
                services={this.props.services}
            />
        </div>
        <div className="row">
          <CallAction 
              callAction={this.props.callAction} 
              images={this.props.images}
          />
        </div>
        <div className="row">
          <Workflow 
              workflowmodule={this.props.workflowmodule} 
              workflow={this.props.workflow}
          />
        </div>
        <div className="row">
          <LatestWork 
              latestwork={this.props.latestwork}
              workgallery={this.props.workgallery}
          />
        </div>

        <div className="row">
          <Features 
              featureTitle={this.props.featureTitle}
              features={this.props.features}
          />
        </div>
        <div className="row">
          <Reviews 
              reviews={this.props.reviews} 
              yPosition={this.state.yPosition}
          />
        </div>
        <div className="row">
          <Webdesign 
              webdesign={this.props.webdesign} 
              yPosition={this.state.yPosition}
          />
        </div>
        <div className="row">
          <Graphicdesign graphicdesign={this.props.graphicdesign} />
        </div>
        <div className="row">
          <News latestnews={this.props.latestnews} />
        </div>
        <div className="row">
          <Subscription />
        </div>
        <div className="row">
          <Contact  contactinformation={this.props.contactinformation} />
        </div>
        <div className="row">
          <Quotation address={this.props.contactinformation} />
        </div>
        
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <ContactForm />
          </div>
          <div className="col-md-4"></div>          
        </div>
        <div className="row footer">
          <Footer />
        </div>
      </div>
    )
  }

}
export default CleanWhite