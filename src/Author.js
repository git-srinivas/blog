import React, { Component } from 'react';
import {grey900} from 'material-ui/styles/colors';

class Author extends Component {
  constructor(){
    super();

  }
  render() {
    const styles = {
      cont : {
        backgroundColor:'rgb(48, 48, 48)',
        height:'500px'
      }
    }
    return (
      <div class="container" style={styles.cont}>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6 ">
            componentWillMount
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 ">
            componentWillMount
          </div>
        </div>
      </div>
    );
  }
}

export default Author;
