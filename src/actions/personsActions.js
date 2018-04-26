import {sendPOSTRequest, sendGETRequest, sendDELETERequest,sendPUTRequest} from '../remote';
import * as types from '../constants/actionTypes';
import {handleRemoteRequestFault} from '../handlers/';

export const createPerson = (person) => {
    return sendPOSTRequest('/api/person', person).catch((err) => {
        handleRemoteRequestFault(err.response);
    });
};

export const personsLoaded = (payload) => {
    return {
        type: types.PERSONS_LOADED,
        payload
    };
};

export const resetPersons = () => {
    return {
        type: types.RESET_PERSONS
    };
};

export const getPersons = ({page, size, sort, by}) => {
    return (dispatch) => {
        sendGETRequest(`/api/person?page=${page}&size=${size}&sort=${by},${sort}`)
            .then(response => dispatch(personsLoaded(response.data)))
            .catch((err) => {
                handleRemoteRequestFault(err.response);
            });
    };
};
