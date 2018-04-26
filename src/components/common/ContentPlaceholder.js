import React from 'react';
import PropTypes from 'prop-types';

const ContentPlaceholder = ({styles}) => {
    return (
        <div className="row">
            <div className="col-md-4 spp-content-placeholder"><div className={`spp-placeholder panel-flat ${styles}`}/></div>
            <div className="col-md-4 spp-content-placeholder"><div className={`spp-placeholder panel-flat ${styles}`}/></div>
            <div className="col-md-4 spp-content-placeholder"><div className={`spp-placeholder panel-flat ${styles}`}/></div>
            <div className="col-md-4 spp-content-placeholder"><div className={`spp-placeholder panel-flat ${styles}`}/></div>
            <div className="col-md-4 spp-content-placeholder"><div className={`spp-placeholder panel-flat ${styles}`}/></div>
            <div className="col-md-4 spp-content-placeholder"><div className={`spp-placeholder panel-flat ${styles}`}/></div>
            <div className="col-md-4 spp-content-placeholder"><div className={`spp-placeholder panel-flat ${styles}`}/></div>
            <div className="col-md-4 spp-content-placeholder"><div className={`spp-placeholder panel-flat ${styles}`}/></div>
            <div className="col-md-4 spp-content-placeholder"><div className={`spp-placeholder panel-flat ${styles}`}/></div>
        </div>
    );
};

ContentPlaceholder.propTypes = {
  styles: PropTypes.string
};

export default ContentPlaceholder;
