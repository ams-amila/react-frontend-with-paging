import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPersons} from '../../actions/personsActions';
import PersonList from '../../components/common/PersonList';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.loadPersons = this.loadPersons.bind(this);
    }

    componentWillMount() {
        if (this.props.persons.length === 0) this.loadPersons(true);
    }

    loadPersons(initial) {
        const pagingInfo = {
            size: this.props.pagingInfo.size,
            page: (initial) ? this.props.pagingInfo.number : this.props.pagingInfo.number + 1,
            sort: this.props.pagingInfo.sort,
            by: this.props.pagingInfo.by,
        };
        this.props.actions.getPersons(pagingInfo);
    }

    render() {
        return (
            <div className="container">
                {<PersonList persons={this.props.persons} pagingInfo={this.props.pagingInfo}
                              loadPersons={this.loadPersons}/>}
            </div>
        );
    }

}

Home.propTypes = {
    actions: PropTypes.object.isRequired,
    persons: PropTypes.array.isRequired,
    pagingInfo: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        persons: state.persons.all,
        pagingInfo: state.persons.pagingInfo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            getPersons
        }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
