import React, { Component, PropTypes} from 'react';
import Header from './header';

export default class Admin extends Component {
  render() {
    return (
      <div>
        <Header title='App Name' subTitle='admin'></Header>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
