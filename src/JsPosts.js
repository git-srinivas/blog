import React, { Component } from 'react';
import PostCard from './components/Card'

class JsPosts extends Component {
  constructor(){
    super();

  }

  render() {
    const cardPosts = [{'title':'Jspost1'},{'title':'Jspost2'},{'title':'Jspost3'}];
    return (

      cardPosts.map(function(card, index){
                    return  <PostCard key={index} info={card}/>;
                  })
    );
  }
}

export default JsPosts;
