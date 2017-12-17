import React, { Component } from 'react';
import PostCard from './components/Card'

class NodePosts extends Component {
  constructor(){
    super();

  }

  render() {
    const cardPosts = [{'title':'NodeJspost1'},{'title':'NodeJspost2'},{'title':'NodeJspost3'}];
    return (

      cardPosts.map(function(card, index){
                    return  <PostCard key={index} info={card}/>;
                  })
    );
  }
}

export default NodePosts;
