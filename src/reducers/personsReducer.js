import _ from 'lodash';
import dotProp from 'dot-prop-immutable';
import initialState from './initialState';
import * as types from '../constants/actionTypes';

const personsReducer = (state = initialState.persons, action) => {
    let payload = action.payload;
    switch (action.type) {
        case types.PERSONS_LOADED:
            return {
                ...state,
                all: [...state.all, ...payload.content],
                pagingInfo: {
                    totalElements: payload.totalElements,
                    totalPages: payload.totalPages,
                    last: payload.last,
                    size: payload.size,
                    number: payload.number,
                    first: payload.first,
                    sort: payload.sort[0].direction,
                    by: payload.sort[0].property
                }
            };
        default:
            return state;
    }
};

export default personsReducer;
