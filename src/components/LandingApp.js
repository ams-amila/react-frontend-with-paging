import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header'

import '../styles/landing/';
import '../../node_modules/bootstrap/dist/js/bootstrap.min';

class LandingApp extends React.Component {
    constructor(props) {
        super(props);
        this.menu =  [
        {
            displayName: 'All Persons',
            url: '/'
        }, {
            displayName: 'New Person',
            url: '/new-person'
        }
      ]
    }

    render() {
        return (
            <main className="main-section">
                <Header menu={this.menu} location={this.props.location.pathname}/>
                <div className="main-section ptd30">
                    {this.props.children}
                </div>
            </main>
        );
    }

}

LandingApp.propTypes = {
    location: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired
};

export default LandingApp;
