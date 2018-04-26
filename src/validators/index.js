import {sendGETRequest} from '../remote/';

export const required = value => value ? undefined : 'Required';
export const requiredField = field => value => value ? undefined : `${field} is required`;
export const selectRequired = field => value => value && value !== 'default' ? undefined : `${field} is required`;
export const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
export const minValue = min => value => value && value < min ? `Must be at least ${min}` : undefined;
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
export const telephone = value => value && !/^[0][0-9]{9}$/i.test(value) ? 'Invalid telephone number' : undefined;
export const displayCode = value => value && !/^[A-Z]{3,5}$/i.test(value) ? 'Invalid short code' : undefined;
export const spaces = value => value && !(value.indexOf(" ") < 0) ? 'Spaces are not allowed' : undefined;
export const webUrl = value => value && !/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})$/i.test(value) ? 'Invalid Web URL' : undefined;
export const checkUsername = values => {
    return sendGETRequest(`/api/exists/username/${values.username}`).then(response => {
        if (response.data) throw {username: 'Username already exists'};
    });
};

export const checkDisplayCode = values => {
    return sendGETRequest(`/api/exists/displayCode/${values.displayCode}`).then(response => {
        if (response.data) throw {displayCode: 'displayCode already exists'};
    });
};

export const minAndMaxLength = (min, max, field) => value => value && value.length >= min && value.length <= max ? undefined : `${field} should contain ${min} to ${max} characters`;

/*
*
*   Customize validators for separate components
*
* */
export const firstNameRequired = requiredField('First Name');
export const lastNameRequired = requiredField('Last Name');
export const bioRequired = requiredField('Bio');

/*
*
* Validation composers
*
* */
export const composeAsyncValidators = (validatorFns) => {
    return async (values, dispatch, props, field) => {
        let errors;
        for (const validatorFn of validatorFns) {
            try {
                await validatorFn(values, dispatch, props, field);
            } catch (err) {
                errors = Object.assign({}, errors, err);
            }
        }

        if (errors) throw errors;
    };
};
