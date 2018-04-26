import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import ContentPlaceholder from './ContentPlaceholder';
import Person from './Person';

const PersonList = ({persons, pagingInfo, loadPersons}) => {
    return (
        <div>
            {
                <InfiniteScroll
                    next={() => loadPersons(false)}
                    hasMore={!pagingInfo.last}
                    loader={<ContentPlaceholder styles="reader-blog-box"/>}
                    endMessage={<div className="posts-end-notification-land">You have seen all Persons</div>}>
                    <div className="row blog-post-wrapper">
                        {
                            persons.map(person => <Person key={`person-home-${person.id}`} {...person}/>)
                        }
                    </div>
                </InfiniteScroll>
            }
        </div>
    );
};

PersonList.propTypes = {
    persons: PropTypes.array.isRequired,
    pagingInfo: PropTypes.object.isRequired,
    loadPersons: PropTypes.func.isRequired
};

export default PersonList;
