import React, { Component } from 'react';
import PostCard from './components/Card'

class AngularPosts extends Component {
  constructor(){
    super();

  }

  render() {
    const cardPosts = [{'title':'AngularJspost1'},{'title':'AngularJspost2'},{'title':'AngularJspost3'}];
    return (

      cardPosts.map(function(card, index){
                    return  <PostCard key={index} info={card}/>;
                  })
    );
  }
}

export default AngularPosts;
