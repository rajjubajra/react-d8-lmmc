import React from 'react';
import NewsTitle from './NewsTitle';
import LatestNews from './LatestNews';


class News extends React.Component{

  render(props){
    return(
      <div className="container-fluid">
        
          <NewsTitle />
          <LatestNews latestnews={this.props.latestnews} />
       
      </div>
    )
  }
}
export default News;