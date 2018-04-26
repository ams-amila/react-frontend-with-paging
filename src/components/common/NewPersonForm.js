import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {handleRemoteRequestSuccess} from '../../handlers/';
import {scrollToTop} from '../../utils';
import {moveToAllPersons} from '../../actions/move';
import {
    firstNameRequired,
    lastNameRequired,
    bioRequired
} from '../../validators';
import AnyInput from './elements/AnyInput';
import RichTextEditor from './elements/RichTextEditor';
import {createPerson} from '../../actions/personsActions';

class NewPersonForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
      createPerson(values).then(res => {
          if (res.status === 201) {
              handleRemoteRequestSuccess('Person Successfully Created.You will redirect to All Persons');
              moveToAllPersons();
              scrollToTop();
              this.props.reset();
          }
      });
    }

    render() {
        const {handleSubmit, submitting} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div className="form-row">
                    <Field className="form-control" component={AnyInput} type="text" placeholder="First Name"
                           label="First Name" name="firstName" validate={firstNameRequired}/>
                </div>
                <div className="form-row">
                    <Field className="form-control" component={AnyInput} type="text" placeholder="Last Name"
                           label="Last Name" name="lastName" validate={lastNameRequired}/>
                </div>
                <div className="form-row">
                    <Field className="form-control" component={RichTextEditor}
                           placeholder="Please Enter your Bio"
                           label="Bio" name="bio" validate={bioRequired}/>
                </div>
                <div className="form-action-btn-wrapper">
                    <button type="submit" className="btn btn-success"
                            disabled={submitting}>CREATE</button>
                </div>
            </form>
        );
    }
}

NewPersonForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};

const newPersonForm = reduxForm({
    form: 'new-person-form',
    enableReinitialize: true
})(NewPersonForm);

const mapStateToProps = (state) => {
    const initialValues = {
        firstName: '',
        lastName: '',
        bio: ''
    }
    return {initialValues}
};
export default connect(mapStateToProps, null)(newPersonForm);
