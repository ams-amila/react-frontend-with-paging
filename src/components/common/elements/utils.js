import React from 'react';

export const renderError = (touched, error, asyncValidating) => {
    if (touched && (error || asyncValidating)) {
        return <div className="invalid-feedback">{error}</div>;
    }
    return '';
};
