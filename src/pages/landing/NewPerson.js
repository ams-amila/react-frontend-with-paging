import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NewPersonForm from '../../components/common/NewPersonForm';

class NewPerson extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <NewPersonForm />
            </div>
        );
    }

}

NewPerson.propTypes = {

};

export default NewPerson;
