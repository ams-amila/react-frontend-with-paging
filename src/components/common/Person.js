import React from 'react';
import PropTypes from 'prop-types';
import {formatDate, shortenString} from '../../utils';

const Person = ({id, firstName, lastName, bio, createdAt}) => {
    return (<div className="col-md-4">
        <div className="article-post manage reader">
            <div className="article-post-intro">
                <h5>{`${firstName} ${lastName}`}</h5>
                <p dangerouslySetInnerHTML={{__html: bio}}/>
                <table className="article-table">
                    <tbody>
                      <tr>
                        <td colSpan={2}>{formatDate(createdAt)}</td>
                      </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>);
};

Person.propTypes = {
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
};

export default Person;
