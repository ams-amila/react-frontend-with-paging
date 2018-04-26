import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const Header = ({menu, location}) => {
    const menuItems = menu.map((menuItem, i) =>
        <li className={location === menuItem.url ? 'nav-item active' : 'nav-item'}
            key={`main-menu-item-${i}`}>
            <Link className="nav-link" to={menuItem.url}>{menuItem.displayName}</Link>
        </li>);

    return (
      <header className="header-section">
        <div className="header-bottom clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="themeix-main-menu float-right">
                            <div className="overlay-close">
                                <nav className="overlay-menu">
                                    <ul className="nav">
                                        {menuItems}
                                    </ul>
                                </nav>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </header>
    );
};

Header.propTypes = {
    menu: PropTypes.array.isRequired,
    location: PropTypes.string.isRequired
};

export default Header;
