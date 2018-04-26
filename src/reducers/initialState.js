let initialState = {
    persons: {
        all: [],
        pagingInfo: {
            totalElements: 0,
            totalPages: 0,
            last: false,
            size: 9,
            number: 0,
            first: false,
            sort: 'DESC',
            by: 'createdAt'
        },
        selectedPerson: null
    }
};

export default initialState;
