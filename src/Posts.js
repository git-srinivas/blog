import React, { Component } from 'react';
import PostCard from './components/Card'

class Posts extends Component {
  constructor(){
    super();

  }

  render() {
    const cardPosts = [{'title':'post1'},{'title':'post2'},{'title':'post3'}];
    return (

      cardPosts.map(function(card, index){
                    return  <PostCard key={index} info={card}/>;
                  })
    );
  }
}

export default Posts;
