import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
import Button from './Button';

const NewsBlock = styled.div`
margin-bottom: 100px;

h3{
  padding: 20px 0px;
}
p{
  text-align: justify;
}

img{
  width: 100%;
}
.news-date{
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
  font-weight: 100;
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  text-decoration: none;
  padding: 5px 0px;
}
.hide{
  display: none;
}



`;

const url = 'https://yellow-website.com';

class LatestNews extends React.Component{

  getData = (props) => {
      let text = '';
      const view = this.props.latestnews.map((item)=>{
        return(
              <div className="col-md-4" key={item.nid}>
              <NewsBlock>
                <img src={ url + item.field_news_image} alt="image" />
                <h3>{item.title}</h3>
                <div className="news-date">{item.field_news_date}</div>
                {ReactHtmlParser(  item.field_news_contents.substring(300,0) )}
                <Button />
              </NewsBlock>
            </div>
        )        
      })
      return view;
  }
  

  render(props){
    return(
      <div className="row">
        {this.getData()}
      </div>
    )
  }
}
export default LatestNews;