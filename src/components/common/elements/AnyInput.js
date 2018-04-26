import React from 'react';
import PropTypes from 'prop-types';
import {renderError} from './utils';

const AnyInput = ({input,label, placeholder, type, meta: {asyncValidating, touched, error}}) => {
    return (
        <div className="form-group col-md-12">
            {label && <label>{label}</label>}
            <input className={`form-control ${touched && error ? 'is-invalid' : ''}`} type={type} {...input}
                   placeholder={placeholder}/>
            {renderError(touched, error, asyncValidating)}
        </div>
    );
};

AnyInput.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired
};

export default AnyInput;
