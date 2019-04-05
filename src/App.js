import React, { Component } from 'react';
import CleanWhite from './components/CleanWhite/CleanWhite';
import events from 'events';
import ajax from './Restapi/ajax';
import Loading from './Loading';
import logo from './logo.png';




// Create an emitter object so that we can do pub/sub
const emitter = new events.EventEmitter();


class App extends Component {
  constructor() {
    super()
    this.state = {
      images: [],
      scrollingText: [],
      servicebrands: [],
      sercies: [],
      callAction: [],
      workflowmodule: [],
      workflow: [],
      latestwork: [],
      workgallery: [],
      featureTitle: [],
      features: [],
      webdesign: [],
      graphicdesign: [],
      latestnews: [],
      contactinformation:[],
      reviews: [],
      isLoaded: false
    }
    this.refresh = this.refresh.bind(this)
  }

  componentWillMount() {
    emitter.addListener('NODE_UPDATED', this.refresh)
  }

  componentWillUnmount() {
    emitter.addListener('NODE_UPDATED', this.refresh)
  }

  async componentDidMount() {
    await this.refresh()
  }

  async refresh() {
    // AJAX fetch server/node/rest?_format=json and setState with the response data
    try {
          const axios = await ajax() // wait for an initialized axios object
         
          //get Images Data 
          const response = await axios.get('/rest/images') // wait for the POST AJAX request to complete
          if (response.data) {
            // setState will trigger repaint
            this.setState({ 
                            images: response.data,                    
                          })
          }

          //Get Scrolling Text data
          const scrollingText = await axios.get('/rest/scrollingtext') // wait for the AJAX request to complete
          if(scrollingText.data) {
            this.setState({
                      scrollingText: scrollingText.data,
            })
          }

          //Get Service Branding Tile and Icon  data
          const servicebrands = await axios.get('/rest/servicebrands') // wait for the AJAX request to complete
          if(servicebrands.data) {
            this.setState({
                      servicebrands: servicebrands.data,
            })
          }


          //Get Service data
          const services = await axios.get('/rest/services') // wait for the AJAX request to complete
          if(services.data) {
            this.setState({
                      services: services.data,
            })
          }

          //Get Call Action data
          const callAct = await axios.get('/rest/callaction') // wait for the AJAX request to complete
          if(callAct.data) {
            this.setState({
                      callAction: callAct.data,
            })
          }

           //Get Work flow module data
           const workflowmodule = await axios.get('/rest/workflowmodule') // wait for the AJAX request to complete
           if(workflowmodule.data) {
             this.setState({
                       workflowmodule: workflowmodule.data,       
             })
           }

           //Get Work flow brief data
           const workflow = await axios.get('/rest/workflow') // wait for the AJAX request to complete
           if(workflow.data) {
             this.setState({
                       workflow: workflow.data,          
             })
           }


            //Get Latest work brief data
            const latestwork = await axios.get('/rest/latestworkbrief') // wait for the AJAX request to complete
            if(latestwork.data) {
              this.setState({
                        latestwork: latestwork.data,
              })
            }


            //Get work gallery data
            const workgallery = await axios.get('/rest/workgallery') // wait for the AJAX request to complete
            if(workgallery.data) {
              this.setState({
                        workgallery: workgallery.data,
              })
            }

             //Get Feature Title data
             const featureTitle = await axios.get('/rest/featureTitle') // wait for the AJAX request to complete
             if(featureTitle.data) {
               this.setState({
                         featureTitle: featureTitle.data,
               })
             }

             //Get Features  data
             const features = await axios.get('/rest/features') // wait for the AJAX request to complete
             if(features.data) {
               this.setState({
                         features: features.data,
                         
               })
             }

             //Get Webdesign block data
             const webdesign = await axios.get('/rest/webdesign') // wait for the AJAX request to complete
             if(webdesign.data) {
               this.setState({
                         webdesign: webdesign.data,
                         
               })
             }

              //Get Graphic design block data
              const graphicdesign = await axios.get('/rest/graphicdesign') // wait for the AJAX request to complete
              if(graphicdesign.data) {
                this.setState({
                          graphicdesign: graphicdesign.data,
                })
              }

               //Get Latest News data
               const latestnews = await axios.get('/rest/latestnews') // wait for the AJAX request to complete
               if(latestnews.data) {
                 this.setState({
                           latestnews: latestnews.data,
                 })
               }

                //Get Contact information data
                const contactinformation = await axios.get('/rest/contact-information') // wait for the AJAX request to complete
                if(contactinformation.data) {
                  this.setState({
                            contactinformation: contactinformation.data,
                  })
                }

                 //Get Review data
                 const reviews = await axios.get('/rest/reviews') // wait for the AJAX request to complete
                 if(reviews.data) {
                   this.setState({
                             reviews: reviews.data,
                             isLoaded: true
                   })
                 }

      } catch (e) {
      alert(e)
    }
  }




  render() {
    
    return (
      <div className="App">


        {/** isLoaded must be used if not it will run empty state.data */}
        {this.state.isLoaded === true
        ?  <CleanWhite 
                logo={logo} 
                images={this.state.images}
                scrollingText={this.state.scrollingText}
                serviceBrands={this.state.servicebrands}
                services={this.state.services}
                callAction={this.state.callAction}
                workflowmodule={this.state.workflowmodule}
                workflow={this.state.workflow}
                latestwork={this.state.latestwork}
                workgallery={this.state.workgallery}
                featureTitle={this.state.featureTitle}
                features={this.state.features}
                webdesign={this.state.webdesign}
                graphicdesign={this.state.graphicdesign}
                latestnews={this.state.latestnews}
                contactinformation={this.state.contactinformation}
                reviews={this.state.reviews}
                />
        :  <Loading />
        }
       
      </div>
    );
  }
}
export default App;