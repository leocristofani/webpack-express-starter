import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class Login extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3'>
            <div className='panel panel-default'>
              <header className='panel-heading'>
                <h3 className='panel-title'>Login</h3>
              </header>
              <div className='panel-body'>
                <Link to='/admin'>Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
