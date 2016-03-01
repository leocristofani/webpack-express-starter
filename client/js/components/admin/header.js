import React, { PropTypes } from 'react';
import {Link} from 'react-router';

const Header = ({title, subTitle}) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to='/' className="navbar-brand" href="#">{title} <small>{subTitle}</small></Link>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><Link to='/admin/'>Dashboard</Link></li>
            <li><Link to='/admin/users'>Users</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><button className='btn btn-sm btn-danger navbar-btn' href="#">Logout</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.displayName = 'Header';

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

export default Header;
